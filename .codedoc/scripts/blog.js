//use fs-extra to read contents of docs/md/blog folder
const path = require("path");
const fs = require("fs-extra");

const blogLocation = "docs/md/blogs";
const httpPath = "/blogs";

const blogPath = path.resolve(process.cwd(), blogLocation);
const homePageMD = path.resolve(process.cwd(), "docs/md/index.md");
//read all the subfolders in the blog folder

let folders = []; // Assign an initial empty array

const folderNameRegex = /^[a-zA-Z]{3}[-]\d{4}$/;

const blogFolders = fs.readdirSync(blogPath);
blogFolders.forEach((folder) => {
    const folderPath = path.resolve(blogPath, folder);
    const stat = fs.statSync(folderPath);
    if (stat.isDirectory() && folderNameRegex.test(folder)) {
		const sp = folder.split("-");
		const year = sp[1];
		const month = sp[0];
		const dateString = `${year}-${month}-01`;
		const ts = new Date(dateString).getTime();
        folders.push({
            path: path.resolve(process.cwd(), blogLocation, folder),
            year,
            month,
            ts,
            name: `${month} ${year} `,
            files: [],
        });
    }
});

//read contents of each folder and extract first line
//the first line has to have # line
folders = folders.sort((a, b) => b.ts - a.ts);
function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return "th"; // Rules for 11th to 13th
    switch (day % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}
function formatDate(timestamp) {
    const date = new Date(timestamp);

    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
}

folders.forEach((folder) => {
	//read the files inside this folder
	fs.readdirSync(folder.path).forEach((file) => {
		if(!file.endsWith(".md")) {
			return;
		}
		const filePath = `${folder.path}/${file}`
		const fileStat = fs.statSync(filePath)
		const ts = fileStat.birthtime;
		const data = fs.readFileSync(filePath, "utf8");
		const levelRegex = new RegExp(`^# (?:[^\n]+)`, "gm");

		const match = levelRegex.exec(data);
		
		const heading = match ? match[0] : null;
		const authorCard = `
		
> :Author name=Raj Nandan Sharma,
> date=${formatDate(ts)},
> avatar=/assets/images/me.jpg,
> url=https://www.rajnandan.com   
		`;

		//append authorCard to file content at bottom if it does exist
		const authorCardRegex = new RegExp(`^> :Author name=`, "gm");
		if(!authorCardRegex.test(data)) {
			fs.writeFileSync(filePath, data + authorCard);
		}
		folder.files.push({
            name: heading.trim().substring(1).trim(),
            ts: new Date(ts).getTime(),
            filePath,
            httpPath: "/blogs" + filePath.split("/blogs")[1].split(".md")[0] ,
        });
    });
})

function getContent(folders) {
	let res = "";
	folders.forEach((folder) => {
		let md = `## ${folder.name.toUpperCase()}\n`;
		const blogs = folder.files.sort((a, b) => b.ts - a.ts);
		blogs.forEach((blog) => {
			md = md + `- [${blog.name}](${blog.httpPath})\n`;
		})

		res = res + "\n" + md;

	})

	return res;
}

function getLatestBlog(folders){
	const latestBlog = folders[0]
	const blogs = latestBlog.files.sort((a, b) => b.ts - a.ts);
	return blogs[0];
}

const md = `
# My Blog

Thoughts put here are my own and does represent my employer

${getContent(folders)}
`



fs.writeFileSync(`${blogPath}/index.md`, md);

const latestBlog = getLatestBlog(folders);

//in indexMD find and replace ### Latest Blog Posts with ### Latest Blog Posts blog
//replace > :ArticleCard src=/blogs/.* if present

let indexMD = fs.readFileSync(homePageMD, "utf8");
const latestBlogRegex = new RegExp(`### Latest Blog Posts`, "gm");
const latestBlogMD = `### Latest Blog Posts\n> :ArticleCard src=${latestBlog.httpPath}`;
//replace > :ArticleCard src=/blogs/.* if present
const articleCardRegex = new RegExp(`^> :ArticleCard src=/blogs/.*`, "gm");
if (articleCardRegex.test(indexMD)) {
    indexMD = indexMD
        .split("\n")
        .filter((line) => !articleCardRegex.test(line))
        .join("\n");
}
indexMD = indexMD.replace(latestBlogRegex, latestBlogMD);
fs.writeFileSync(homePageMD, indexMD);
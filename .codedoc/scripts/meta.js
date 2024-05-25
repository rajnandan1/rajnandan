const path = require("path");
const fs = require("fs-extra");
const {generateScreenshot} = require("./screenshot");

const allMds = "docs/md";

const mdPath = path.resolve(process.cwd(), allMds);
const assetPath = path.resolve(process.cwd(), "assets/images/og-images");
let myMds = [];

function readMdFiles(directory) {
    const files = fs.readdirSync(directory);
    files.forEach((file) => {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            readMdFiles(filePath);
        } else if (file.endsWith(".md")) {
            myMds.push(filePath);
        }
    });
}

readMdFiles(mdPath);

myMds = myMds.filter((md) => {
    if (md.includes("_toc.md")) {
        return false;
    }
    return true;
});

for (let i = 0; i < myMds.length; i++) {
    const md = myMds[i];
    let content = fs.readFileSync(md, "utf8");
	const levelRegex = new RegExp(`^# (?:[^\n]+)`, "gm");

    const match = levelRegex.exec(content);

    const heading = match ? match[0] : "Raj Nandan Sharma";
	//get the first line that start with alpha for description
	const description = content.split("\n").find(line => line.match(/^[a-zA-Z]/)).substring(0, 300);
    //check if > :MetaOverride property=og:image is not present
    if (!content.includes(":MetaOverride property=og:image")) {
        
		const fileName = md
            .split("/md/")[1]
            .replaceAll("/", "-")
            .replace(".md", ".png");
		
		generateScreenshot(
            "https://www.rajnandan.com/og",
            assetPath + "/" + fileName,
            heading.replace("# ", "").trim()
        );
		const ogImage = `> :MetaOverride property=og:image\n>\n> https://www.rajnandan.com/assets/images/og-images/${fileName}\n\n`;
        content = ogImage + content;
		
	}
	if (!content.includes(":MetaOverride property=og:description")) {
		const ogDescription = `> :MetaOverride property=og:description\n>\n> ${description}\n\n`;
		content = ogDescription + content;
	}

    fs.writeFileSync(md, content);

}
> :MetaOverride property=og:image
>
> https://www.rajnandan.com/assets/images/og-images/blogs-may-2024-setting-up-rajnandan.png

> :MetaOverride property=og:description
>
> Sign up for a github account and create a new repository. Keep the repository public. My username is rajnandan1 and I created a repository called rajnandan. 


# How I built this personal website


## Creating a github repository

Sign up for a github account and create a new repository. Keep the repository public. My username is rajnandan1 and I created a repository called rajnandan. 

## Cloning the repository

Clone the repo to your local machine. I used the command line to do this. 
```bash
git clone https://github.com/rajnandan1/rajnandan.git
cd rajnandan
```

## Setup codedoc

I used [codedoc](https://codedoc.cc/) to create my website. 

```bash
npm i -g @codedoc/cli
codedoc install
```

## Run the site in local

```bash
codedoc serve
```

The site should be running on [http://localhost:3000](http://localhost:3000)

## Home Page

The home page is located at `docs/md/index.md` and the content is written in markdown. 

## Adding a new page

To add a new page, create a new markdown file in the `docs/md` folder. 

## Adding the Nav bar

The nav bar is located in `.codedoc/content/header.tsx`. 

Suppose you add a file called `docs/md/about.md`, you can add a link to the nav bar by adding the following code. 

```tsx
return (
	<div class={classes.header}>
		<a href="/" class="nav-link">
			Home Page
		</a>
		<a href="/about" class="nav-link">
			About
		</a>
	</div>
);
```

## Customizing theme

You can customize the theme present in `.codedoc/theme.ts` file. 

```ts
export const theme = /*#__PURE__*/ createTheme({
    light: {
        background: "#fffdf0",
        text: "#45475a",
        primary: "#8E7AB5",
    },
    dark: {
        background: "#11111b",
        text: "#cdd6f4",
        primary: "#a6e3a1",
    }
});
```

## Adding font

To add a font, you can add the following code to `.codedoc/config.ts` file. 

```ts
fonts: {
	text: {
		url: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
		name: "Montserrat",
	},
},
```

## Adding title and fav icon

You can add the title and fav icon in `.codedoc/config.ts` file. 
```ts
favicon: "/assets/images/favicon.ico",
title: {
	base: "Raj Nandan Sharma", // --> the base title of your doc pages
},
```

## Adding images

You can add images in `assets/images` folder. In the project you can refer to the images as `/assets/images/me.jpg`. 

## Adding custom CSS

You can add custom CSS in `.codedoc/plugins/css.tsx` file. 

## Adding custom JS

You can add custom JS in `.codedoc/plugins/js.tsx` file. 

## Adding google analytics or any other

You can add google analytics or any other script in `.codedoc/plugins/ms-clarity.tsx` file. It has microsft clarity script. You can replace it with your own script. 

This is what you would do to add google analytics. 

```tsx
return function (): ConfigOverride {
	return {
		page: {
			scripts: [
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-Q3MLRX"
				/>,
				<script>
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag() {
							dataLayer.push(arguments);
						}
						gtag("js", new Date());

						gtag("config", "G-Q3MLRX");
					`}
				</script>,
			],
		},
	};
};
```

Replace `G-Q3MLRX` with your own google analytics id. 

## How to a blog

Blogs are added inside the blogs folder. It has sub folders which are named as mmm-YYYY. Example: `blogs/may-2021`. Inside this folder, you can add markdown files. 

Also don't forget to add the blog to the nav bar. 

## Build Blog

If you have added blogs then run. This will create a new markdown file with a catalog of all the blogs sorted chronologically. It would be under /blogs and this what you should add in the nav bar.

```bash
node scripts/blog.js
```

## Build site

```bash
codedoc build
```

## Publish

Push your changes to github
```bash
git add .
git commit -m "commit message"
git push
```

## Create a github page

Go to your repository settings and scroll down to the github pages section. Select the branch as `gh-pages` and click save. 

## Custom Domain

Buy a domain and make DNS changes as shown below. The same you will have to add in github pages custom domain section. 

![DNS Config](/assets/images/dns.png "DNS Config")

![GH Pages Config](/assets/images/gh-pages.png "GH Pages Config")

## Connect with Obsidian

Also I am using [obsidian](https://obsidian.md/) to write the markdown. Just add the root folder as a vault in obsidian.

---

> :Author name=Raj Nandan Sharma,
> date=16th May 2024,
> avatar=/assets/images/me.jpg,
> url=https://www.rajnandan.com   
		
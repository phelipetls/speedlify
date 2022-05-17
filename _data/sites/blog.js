module.exports = {
	name: "Blog",
	description: "My blog and personal web site",
	skip: false,
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://phelipetls.github.io/",
		"https://phelipetls.github.io/posts/",
		"https://phelipetls.github.io/projects/",
		"https://phelipetls.github.io/resume/",
		// A sample post with a bunch of images, KaTeX, and YouTube embedding
		"https://phelipetls.github.io/pt/posts/gram-schmidt/",
		// A post with additional JavaScript
		"https://phelipetls.github.io/posts/f-strings-syntax-highlighting-in-vim/",
		// A post with mostly text
		"https://phelipetls.github.io/posts/implementing-dark-mode-for-static-websites/"
	]
};

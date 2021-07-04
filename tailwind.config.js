module.exports = {
	purge: ["./src/**/*.html", "./src/**/*.js"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				"contact-page-hero":
					"url('https://cdn.shopify.com/s/files/1/0464/2281/8974/files/close-up-2021-stationary.jpg?v=1614749527')",
				"become-vendor-header": "url(../images/ecom.jpg);",
			}),
		},
	},

	variants: {
		extend: {
			display: ["hover", "focus", "group-hover"],
			transitionDuration: ["hover", "focus"],
			textColor: ["active"],
		},
	},
	plugins: [],
};

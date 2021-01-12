export default {
	/*
	 ** Nuxt target
	 ** See https://nuxtjs.org/api/configuration-target
	 */
	target: "static",
	/*
	 ** Headers of the page
	 ** See https://nuxtjs.org/api/configuration-head
	 */

	//  <script src="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js"></script>

	head: {
		title: "Vuxen, när tiden går för fort.",
		meta: [
			{
				charset: "utf-8",
			},
		],
		script: [{}],
	},
	/*
	 ** Global CSS
	 */
	css: [
		// Load a Node.js module directly (here it's a Sass file)
	],
	/*
	 ** Plugins to load before mounting the App
	 ** https://nuxtjs.org/guide/plugins
	 */
	plugins: [],
	/*
	 ** Auto import components
	 ** See https://nuxtjs.org/api/configuration-components
	 */
	components: true,
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		"@nuxtjs/style-resources",
		"@nuxtjs/tailwindcss",
		"@nuxtjs/bulma",
	],
	styleResources: {
		// your settings here
		sass: [],
		scss: [
			"./assets/scss/app.scss",
			"./assets/scss/main.scss",
			"./assets/scss/variable.scss",
		],
		less: [],
		stylus: [],
	},
	/*
	 ** Nuxt.js modules
	 */
	modules: ["@nuxtjs/strapi"],
	strapi: {
		url: process.env.API_URL || "http://localhost:1337",
		entities: ["services", "categories", "homepage"],
	},
	env: {},
	/*
	 ** Build configuration
	 ** See https://nuxtjs.org/api/configuration-build/
	 */
	build: {},
};

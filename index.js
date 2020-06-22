// Based on:
// https://github.com/nuxt/nuxt.js/blob/dev/examples/coffeescript/modules/coffeescript.js
export default function () {

	// Add .coffee extension for store, middleware and more
	this.nuxt.options.extensions.push('coffee')
	this.nuxt.hook('build:before', (builder) => {
		builder.supportedExtensions.push('coffee')
	})

	// Add CoffeeScript loader
	this.extendBuild((config) => {

		// Lookup the babel config from nuxt
		const babel = config.module.rules.find(rule => {
			return String(rule.test) == '/\\.m?jsx?$/i'
		})
		if (!babel) {
			throw 'nuxt-coffeescript-module couldn\'t find Nuxt babel config'
		}

		// Add CoffeeScript loader
		config.module.rules.push({
			test: /\.coffee$/,
			use: [
				babel.use[0], // Get the babel loader object, including it's options
				{ loader: 'coffee-loader' },
			]
		})

		// Add .coffee extension in webpack resolve
		if (config.resolve.extensions.indexOf('.coffee') === -1) {
			config.resolve.extensions.push('.coffee')
		}
	})
}

// Based on:
// https://github.com/nuxt/nuxt.js/blob/dev/examples/coffeescript/modules/coffeescript.js
module.exports = function () {

	// Add .coffee extension for store, middleware and more
	this.nuxt.options.extensions.push('coffee')

	// Extend build
	this.extendBuild(config => {

		// Add CoffeeScript loader with Babel
		config.module.rules.push({
			test: /\.coffee$/,
			loader: 'coffee-loader',
			options: {
				transpile: {
					presets: ['vue-app'], // The Nuxt default
					plugins: ['transform-object-rest-spread']
				}
			}
		})

		// Add CoffeeScript loader for vue files (with Babel)
		for (let rule of config.module.rules) {
			if (rule.loader === 'vue-loader') {
				rule.options.loaders.coffee = {
					test: /\.coffee$/,
					loader: 'coffee-loader',
					options: {
						transpile: {
							presets: ['vue-app'], // The Nuxt default
							plugins: ['transform-object-rest-spread']
						}
					}
				}
			}
		}

		// Add .coffee extension in webpack resolve
		if (config.resolve.extensions.indexOf('.coffee') === -1) {
			config.resolve.extensions.push('.coffee')
		}
	})
}

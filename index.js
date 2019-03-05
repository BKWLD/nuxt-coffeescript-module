// Based on:
// https://github.com/nuxt/nuxt.js/blob/dev/examples/coffeescript/modules/coffeescript.js
export default function () {

	// Add .coffee extension for store, middleware and more
	this.nuxt.options.extensions.push('coffee')

	// Add CoffeeScript loader
	this.extendBuild((config) => {

		// Add CoffeeScript loader
		config.module.rules.push({
			test: /\.coffee$/,
			loader: 'coffee-loader',
			options: {
				transpile: {
					presets: ['@nuxt/babel-preset-app'], // The Nuxt 2 default
					plugins: ['transform-object-rest-spread']
				}
			}
		})

		// Add .coffee extension in webpack resolve
		if (config.resolve.extensions.indexOf('.coffee') === -1) {
			config.resolve.extensions.push('.coffee')
		}
	})
}

# nuxt-coffeescript-module

Adds Coffeescript support to your Nuxt 1.x app.  This is based on the [official Nuxt example](https://github.com/nuxt/nuxt.js/blob/dev/examples/coffeescript/modules/coffeescript.js).

## Install

1. `yarn add nuxt-coffeescript-module`

2. In `nuxt.config.js`:

```js
{
  modules: [ 'nuxt-coffeescript-module' ]
}
```

## Notes

Btw, if you want to write your `nuxt.config.js` in coffeescript, what I've been doing is making my `nuxt.config.js` just: 

```js
require('coffeescript/register')
module.exports = require('./nuxt.config.coffee')
```

And then exporting the real config from `nuxt.config.coffee`.

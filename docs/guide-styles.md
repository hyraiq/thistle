# Guide: writing styles

This project is set up to use the [LESS](http://lesscss.org/) CSS precompiler.

In an Aurelia template, you can use a `require` tag to import your less file.

```html
<template>
	<require from="./my-cool-file.less"></require>
</template>
```

Webpack will go through and trace your application to find all the different LESS files that are used and combine them together.

There are some variables we have added in `src/styles/variables.less` - they configure some simple stuff like html/body font-sizes which can be a bit fiddly. Feel free to do whatever you'd prefer instead.

Likewise, we have included [normalize.css](https://necolas.github.io/normalize.css/) to standardise browser rendering - but feel free to change this.

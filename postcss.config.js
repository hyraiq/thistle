// postcss.config.js
module.exports = {
    plugins: {
        'autoprefixer': {
            "browsers": [
                "> 1%",
                "last 2 versions"
            ]
        }
    }
};

const webpack = require('webpack');
const path = require('path');

module.exports = {

    entry: {
        main: './assets/JS/main.js',
        menuAdmin: './assets/JS/menu-admin.js'
    },

    output: {
        path: path.resolve(__dirname, 'public/assets/js'),
        filename: "[name]-bundle.js"
    }
};
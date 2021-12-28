const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');

process.noDeprecatiom = true;

module.exports = options => {

    return {
        mode: options.mode,
        entry: options.entry,
        output: Object.assign(
            {
                path: path.resolve(process.cwd(), './build'),
                publicPath: '/'
            },
            options.output
        )
    };
};
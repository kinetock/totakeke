var path = require('path');

module.exports = [{
    entry: ['./src/app.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(css|sass|scss)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [
                                require('autoprefixer')
                            ];
                        }
                    }
                }
            ]
        },
        {
            test: /\.(eot|otf|ttf|woff|woff2|svg)(\?.+)?$/,
            use: [
                {
                  loader: 'file-loader',
                  options: {
                      name: './fonts/[name].[ext]'
                  }
                }
            ]
        }
      ]
    }
}];
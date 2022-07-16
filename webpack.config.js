import path from 'path'
import {fileURLToPath} from 'url'
import ESLintPlugin from 'eslint-webpack-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]    
  },
  plugins: [new ESLintPlugin()],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  watch: true
}
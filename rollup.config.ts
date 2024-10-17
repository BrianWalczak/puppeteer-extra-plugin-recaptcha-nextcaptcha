import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

import pkg from "./package.json";

const entryFile = "index";
const banner = `
/*!
 * ${pkg.name} v${pkg.version} by ${pkg.author}
 * ${`https://github.com/${pkg.repository.url}`}
 * @license ${pkg.license}
 */
`.trim();

const defaultExportOutro = `
  module.exports = exports.default || {}
  Object.entries(exports).forEach(([key, value]) => { module.exports[key] = value })
`;

export default {
	input: `src/${entryFile}.ts`,
	output: [
		{
			file: pkg.main,
			format: "cjs",
			sourcemap: true,
			exports: "named",
			outro: defaultExportOutro,
			banner
		},
		{
			file: pkg.module,
			format: "es",
			sourcemap: true,
			exports: "named",
			banner
		}
	],
	// Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
	external: [...Object.keys(pkg.dependencies || {})],
	watch: {
		include: "src/**"
	},
	plugins: [
		// Compile TypeScript files
		typescript(),
		// Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
		commonjs(),
		// Allow node_modules resolution, so you can use 'external' to control
		// which external modules to include in the bundle
		// https://github.com/rollup/rollup-plugin-node-resolve#usage
		resolve()
	]
};

import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
	input: 'src/index.ts',
	plugins: [
		typescript({
			typescript: require('typescript'),
			useTsconfigDeclarationDir: true,
		}),
        terser(),
	],
    output: [
        {
			format: 'iife',
			name: 'Editor',
			file: 'dist/canvo.browser.js',
		},
        {
			format: 'cjs',
			file: pkg.main,
		},
        {
			format: 'es',
			file: pkg.module,
		},
    ],
};

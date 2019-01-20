import typescript from 'rollup-plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
	input: 'src/index.ts',
	plugins: [
		typescript(),
        terser(),
	],
    output: [
        { format: 'iife', name: 'Editor', file: 'dist/canvo.browser.js' },
        { format: 'cjs', file: 'dist/canvo.cjs.js' },
        { format: 'umd', name: 'Editor', file: 'dist/canvo.js' },
        { format: 'es', file: 'dist/canvo.es.js' },
    ],
};
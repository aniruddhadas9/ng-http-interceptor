import nodeResolve from 'rollup-plugin-node-resolve';
import { globalsRegex, GLOBAL } from 'rollup-globals-regex';

export default {
    entry: 'dist/ng-http-interceptor.js',
    dest: 'dist/bundles/ng-http-interceptor.es2015.js',
    format: 'es',
    moduleName: 'httpInterceptor',
    plugins: [
        nodeResolve({ jsnext: true, browser: true })
    ],
    globals: globalsRegex({
        'tslib': 'tslib',
        [GLOBAL.NG2]: GLOBAL.NG2.TPL,
        [GLOBAL.RX]: GLOBAL.RX.TPL,
        [GLOBAL.RX_OBSERVABLE]: GLOBAL.RX_OBSERVABLE.TPL,
        [GLOBAL.RX_OPERATOR]: GLOBAL.RX_OPERATOR.TPL,
    }),
    external: (moduleId) => {
        if (/^(\@angular|rxjs|tslib)\/?/.test(moduleId)) {
            return true;
        }

        return false;
    }
}

/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

/**module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                // eslint-disable-next-line prettier/prettier
                inlineRequires: false
            }
        })
    }
}; */

var getBlacklistRE = function getBlacklistRE(){
	return new RegExp("(.*\\android\\.*|.*\\__fixtures__\\.*|node_modules[\\\\]react[\\\\]dist[\\\\].*|website\\node_modules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$");
};

module.exports = {
	resolver: {
		// eslint-disable-next-line prettier/prettier
		"blacklistRE": getBlacklistRE(),
	}
};
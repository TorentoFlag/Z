import path from 'path';
import { Configuration } from 'webpack';
import { buildPlugins } from './config/build/buildPlugings';
import { buildLoaders } from './config/build/buildLoaders';
import { buildResolvers } from './config/build/buildResolvers';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';



export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		dist: path.resolve(__dirname, 'dist'),
		html: path.resolve(__dirname, 'public', 'index.html')
	}
	
	const mode = env.mode || 'development';
	const isDev = mode === 'development';
	const PORT = env.port || 3000;
	
	const config: Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT
	});

	return config;
};
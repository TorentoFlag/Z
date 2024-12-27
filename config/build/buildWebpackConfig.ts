import path from "path";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugings";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import { Configuration } from "webpack";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions):Configuration {
	const { paths, mode, isDev } = options;
	return {
		entry: paths.entry,
		mode: mode,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.dist,
			clean: true
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined
	}
}
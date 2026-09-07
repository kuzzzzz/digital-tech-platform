/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  // No assetPrefix and no publicPath override here, deliberately.
  //
  // The export has to run from a flash drive over file://, where a leading
  // slash means the root of the filesystem. assetPrefix cannot fix that: the
  // pages sit at four different depths, so no single prefix is right for all of
  // them. output.publicPath = 'auto' looks like the answer and is worse - the
  // webpack runtime then works out its base path correctly, but Next also
  // writes the configured value straight into each page's own script tag, so
  // every route ended up asking for "autostatic/chunks/app/...".
  //
  // Both are handled after the build instead, by scripts/relative-paths.js,
  // which is the only place that knows how deep each page sits.
};

module.exports = nextConfig;

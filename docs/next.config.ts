import nextra from "nextra";
import path from "path";

const withNextra = nextra({
  contentDirBasePath: "/",
});

export default withNextra({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  outputFileTracingRoot: path.join(import.meta.dirname, ".."),
  experimental: {
    externalDir: true,
  },
  webpack(config) {
    // Ensure modules from ../src/ files resolve against docs/node_modules,
    // since Vercel only installs deps in the docs/ root directory.
    config.resolve.modules = [
      path.join(import.meta.dirname, "node_modules"),
      "node_modules",
    ];
    return config;
  },
});

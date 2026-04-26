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
  outputFileTracingRoot: path.join(import.meta.dirname, ".."),
  experimental: {
    externalDir: true,
  },
});

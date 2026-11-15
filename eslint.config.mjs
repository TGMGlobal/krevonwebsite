import nextConfig from "eslint-config-next";

// v2/ is a separate site with its own lint setup.
const eslintConfig = [{ ignores: ["v2/**"] }, ...nextConfig];

export default eslintConfig;

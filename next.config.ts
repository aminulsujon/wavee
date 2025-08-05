// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };


// export default nextConfig;


/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)', // Or restrict to /images/(.*), /fonts/(.*), etc.
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable', // 1 year cache
  //         },
  //       ],
  //     },
  //   ];
  // },
}
 
module.exports = nextConfig


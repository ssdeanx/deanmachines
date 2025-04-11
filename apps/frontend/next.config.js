//@ts-check

import { composePlugins, withNx } from '@nx/next';
import { withContentlayer } from 'next-contentlayer';
/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withContentlayer,
];

export default composePlugins(...plugins)(nextConfig);

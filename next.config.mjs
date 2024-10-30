
import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */ 
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

const nextConfig = {
    swcMinify: true,
    transpilePackages: ['@mdxeditor/editor'],
    reactStrictMode: true,
    webpack: (config) => {
        config.experiments = { ...config.experiments, topLevelAwait: true }
        config.cache = {
            type: 'filesystem',
            allowCollectingMemory: true,
            buildDependencies: {
                config: [__filename],
            },
        }
        return config
    }
}

export default withContentlayer(nextConfig)
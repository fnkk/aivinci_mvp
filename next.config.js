module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'dummyimage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'app.galxe.com',
        port: '',
        pathname: '/**',
      },
      {
        // https://artela-oss.oss-us-west-1.aliyuncs.com/renaissence/images/swapintro.png
        protocol: 'https',
        hostname: 'artela-oss.oss-us-west-1.aliyuncs.com',
        port: '',
        pathname: '/**',
      },
      {
        // https://artela-oss.oss-us-west-1.aliyuncs.com/renaissence/images/swapintro.png
        protocol: 'https',
        hostname: 'file.notion.so',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
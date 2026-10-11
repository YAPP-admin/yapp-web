/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /*
   * styled-components의 클래스 이름을 파일과 컴포넌트 기준으로 고정한다.
   * 이 설정이 없으면 이름이 "만들어진 순서"로 정해져서, 서버가 미리 그린 HTML과 브라우저가
   * 붙이는 이름이 어긋날 수 있다. 어긋나면 다른 컴포넌트의 스타일이 엉뚱한 곳에 붙는다
   * (운영 배포에서 탭의 여백 규칙이 모집 일정 카드에 붙어 카드가 깨졌다).
   * .babelrc의 babel-plugin-styled-components는 forceSwcTransforms 때문에 쓰이지 않는다.
   */
  compiler: {
    styledComponents: true,
  },
  experimental: {
    forceSwcTransforms: true,
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    return config;
  },
  images: {
    formats: ['image/webp'],
    domains: ['miro.medium.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
    ],
  },
};

module.exports = nextConfig;

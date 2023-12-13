import GlobalStyle from '@/styles/global-style';
import type { AppProps } from 'next/app';
import Script from 'next/script';

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  function initKakao() {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    }
  }


  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js"
        onLoad={initKakao}
      />
    </>
  );
}

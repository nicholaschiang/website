import { AppProps } from 'next/app';

import NProgress from 'components/nprogress';

import base from 'styles/base';
import font from 'styles/font';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <NProgress />
      <style jsx global>
        {font}
      </style>
      <style jsx global>
        {base}
      </style>
      <style jsx global>{`
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        html {
          font-feature-settings: 'case' 1, 'rlig' 1, 'calt' 0;
        }

        body {
          position: relative;
          min-height: 100%;
          margin: 0;
        }

        html,
        body {
          font-family: var(--font-sans);
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: var(--geist-background);
          color: var(--geist-foreground);
        }

        ::selection {
          background-color: var(--geist-selection);
          color: var(--geist-foreground);
        }
      `}</style>
    </>
  );
}

import React from 'react';
import { AppProps } from 'next/app';

import '~/public/static/fonts/fonts.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;

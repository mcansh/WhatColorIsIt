import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

import GlobalStyle from '~/components/global-style';
import Wrapper from '~/components/wrapper';
import { useColor } from '~/lib/useColor';
import Meta from '~/components/meta';
import Sharing from '~/components/sharing';

const regSW = async () => {
  try {
    await navigator.serviceWorker.register('/sw.js');
    // eslint-disable-next-line no-console
    console.log('SW registered');
  } catch (error) {
    console.error('SW registration failed: ', error);
  }
};

const Index = () => {
  const color = useColor();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      regSW();
    }
  }, []);

  return (
    <Wrapper hexColor={color}>
      <GlobalStyle />
      <Meta hexColor={color} />
      <Head>
        <title>{color} - What Color Is It?</title>
      </Head>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: color ? 1 : 0 }}>
        <h1>{color}</h1>
        <Sharing hexColor={color} />
      </motion.div>
    </Wrapper>
  );
};

export default Index;

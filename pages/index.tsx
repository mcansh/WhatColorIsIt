import React, { useEffect } from 'react';
import { Spring, animated } from 'react-spring';
import Head from 'next/head';
import GlobalStyle from '~/components/global-style';
import Wrapper from '~/components/wrapper';
import useColor from '~/lib/useColor';
import Meta from '~/components/meta';
import getColor from '~/lib/getColor';

const regSW = async () => {
  try {
    await navigator.serviceWorker.register('/sw.js');
    console.log('SW registered');
  } catch (error) {
    console.log('SW registration failed: ', error);
  }
};

interface Props {
  initialColor: string;
}

const Index = ({ initialColor }: Props) => {
  const color = useColor(initialColor);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      regSW();
    }
  }, []);

  return (
    <Wrapper color={color}>
      <GlobalStyle />
      <Meta color={color} />
      <Head>
        <title>{color} - What Color Is It?</title>
      </Head>
      <Spring native from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {styles => <animated.h1 style={styles}>{color}</animated.h1>}
      </Spring>
    </Wrapper>
  );
};

Index.getInitialProps = () => {
  const initialColor = getColor();

  return { initialColor };
};

export default Index;
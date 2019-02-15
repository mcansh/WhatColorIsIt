import React from 'react';
import Head from 'next/head';
import HexColor from '~/types/hex-color';
import { iconSizes } from '~/config';

const Meta = ({ hexColor }: HexColor) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width, viewport-fit=cover"
      />
      <link rel="stylesheet" href="/static/fonts/fonts.css" />
      <link rel="preload" href="/static/fonts/fonts.css" as="style" />
      <link rel="manifest" href="/manifest.webmanifest" />
      <link rel="mask-icon" href="/static/logo/safari.svg" color={hexColor} />
      <meta name="theme-color" content={hexColor} />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <link rel="shortcut icon" href="/static/logo/logo.png" />
      <link rel="shortcut icon" href="/static/logo/logo.ico" />
      {iconSizes.map(icon => {
        const size = `${icon}x${icon}`;
        return (
          <link
            key={size}
            rel="apple-touch-icon-precomposed"
            sizes={size}
            href={`/static/logo/logo-${icon}.png`}
          />
        );
      })}
    </Head>
  );
};

export default Meta;

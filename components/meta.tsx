import React from 'react';
import Head from 'next/head';

const Meta = ({ color }: { color: string }) => {
  const icons = [228, 195, 152, 144, 128, 120, 96, 72, 57, 32];

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width, viewport-fit=cover"
      />
      <link rel="manifest" href="/manifest.webmanifest" />
      <link rel="mask-icon" href="/static/logo/safari.svg" color={color} />
      <meta name="theme-color" content={color} />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <link rel="shortcut icon" href="/static/logo/logo.png" />
      <link rel="shortcut icon" href="/static/logo/logo.ico" />
      {icons.map(icon => {
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
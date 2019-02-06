import { IncomingMessage, ServerResponse } from 'http';
import getColor from './getColor';

export default (_req: IncomingMessage, res: ServerResponse) => {
  const color = getColor();

  const manifest = {
    name: 'What Color Is It?',
    short_name: 'WCII',
    description: 'What color is it?!',
    start_url: '/?homescreen=1',
    background_color: color,
    theme_color: color,
    display: 'standalone',
    icons: [
      {
        src: '/static/images/logo/logo-72.png',
        sizes: '72x72',
      },
      {
        src: '/static/images/logo/logo-96.png',
        sizes: '96x96',
      },
      {
        src: '/static/images/logo/logo-128.png',
        sizes: '128x128',
      },
      {
        src: '/static/images/logo/logo-144.png',
        sizes: '144x144',
      },
      {
        src: '/static/images/logo/logo-256.png',
        sizes: '256x256',
      },
      {
        src: '/static/images/logo/logo-512.png',
        sizes: '512x512',
      },
    ],
  };

  res.writeHead(200, { 'Content-Type': 'application/manifest+json' });
  res.end(JSON.stringify(manifest));
};

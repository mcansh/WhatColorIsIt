import { IncomingMessage, ServerResponse } from 'http';
import getColor from './getColor';
import { iconSizes } from '../config';

const manifest = (_req: IncomingMessage, res: ServerResponse) => {
  const color = getColor();

  const json = {
    name: 'What Color Is It?',
    short_name: 'WCII',
    description: 'What color is it?!',
    start_url: '/?homescreen=1',
    background_color: color,
    theme_color: color,
    display: 'standalone',
    icons: iconSizes.map(icon => ({
      src: `/static/logo/logo-${icon}.png`,
      sizes: `${icon}x${icon}`,
    })),
  };

  res.writeHead(200, { 'Content-Type': 'application/manifest+json' });
  res.end(JSON.stringify(json));
};

export default manifest;

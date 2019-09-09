import { NextApiRequest, NextApiResponse } from 'next';
import getColor from '~/lib/getColor';
import { iconSizes } from '~/config';

const manifest = (_req: NextApiRequest, res: NextApiResponse) => {
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

  res.json(json);
};

export default manifest;

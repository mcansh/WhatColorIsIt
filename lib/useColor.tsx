import { useState, useEffect } from 'react';

import getColor from './getColor';

const useColor = () => {
  const [color, setColor] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const timeColor = getColor();

      setColor(timeColor);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return color;
};

export default useColor;

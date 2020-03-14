import React from 'react';

import getColor from './getColor';

function useInterval(callback: VoidFunction, delay: number) {
  const savedCallback = React.useRef<any>();

  React.useEffect(() => {
    savedCallback.current = callback;
  });

  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

const useColor = () => {
  const [color, setColor] = React.useState('');
  useInterval(() => {
    setColor(getColor());
  }, 1000);

  return color;
};

export { useColor, useInterval };

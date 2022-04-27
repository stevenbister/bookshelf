const { useState, useEffect } = require('react');
import useLocalStorageState from 'use-local-storage-state';

const useDarkTheme = () => {
  const [preferredTheme, setPreferedTheme] = useLocalStorageState(
    'preferredTheme',
    { defaultValue: undefined },
  );
  const [deviceTheme, setDeviceTheme] = useState(undefined);
  const LIGHT_MODE = 'light';
  const DARK_MODE = 'dark';

  useEffect(() => {
    const matchMediaLight = window.matchMedia('(prefers-color-scheme: light)');
    const matchMediaDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Set initial theme based on device preference
    if (!preferredTheme && matchMediaLight.matches) {
      setDeviceTheme(LIGHT_MODE);
    }
    if (!preferredTheme && matchMediaDark.matches) {
      setDeviceTheme(DARK_MODE);
    }

    // Watch for changes to device theme
    matchMediaLight.addEventListener('change', (e) => {
      !preferredTheme ? setDeviceTheme(LIGHT_MODE) : false;
    });

    matchMediaDark.addEventListener('change', (e) => {
      !preferredTheme ? setDeviceTheme(DARK_MODE) : false;
    });

    // Handle toggling the class
    if (
      (!preferredTheme && deviceTheme === DARK_MODE) ||
      preferredTheme === DARK_MODE
    ) {
      document.documentElement.classList.add(DARK_MODE);
    } else {
      document.documentElement.classList.remove(DARK_MODE);
    }
  }, [deviceTheme, preferredTheme]);

  return [deviceTheme, preferredTheme, setPreferedTheme];
};

export default useDarkTheme;

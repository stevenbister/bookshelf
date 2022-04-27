import { useEffect } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import useDarkTheme from '@/hooks/useDarkTheme';

const ThemeSwitcher = () => {
  const [deviceTheme, preferredTheme, setPreferedTheme] = useDarkTheme();
  const handleClick = () =>
    (!preferredTheme && deviceTheme === 'light') || preferredTheme === 'light'
      ? setPreferedTheme('dark')
      : setPreferedTheme('light');

  useEffect(() => {
    console.log('theme changed to', preferredTheme);
  }, [preferredTheme, deviceTheme]);

  return (
    <button className="theme-switcher" onClick={handleClick}>
      {preferredTheme === 'light' || deviceTheme === 'light' ? (
        <BsSunFill />
      ) : (
        <BsMoonFill />
      )}
      <span className="sr-only">Switch colour theme</span>
    </button>
  );
};
export default ThemeSwitcher;

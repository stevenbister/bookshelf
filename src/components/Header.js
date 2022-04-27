import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const router = useRouter();

  return (
    <header className="header">
      {router.asPath === '/' ? (
        <h1 className="fs-4 fw-400">
          <Link href="/">
            <a aria-current="page">Bookshelf</a>
          </Link>
        </h1>
      ) : (
        <Link href="/">
          <a className="fs-3">Bookshelf</a>
        </Link>
      )}

      <ThemeSwitcher />
    </header>
  );
};

export default Header;

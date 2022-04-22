import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <header className="header">
      <Link href="/">
        <a
          className={router.asPath === '/' ? 'fs-4' : 'fs-3'}
          aria-current={router.asPath === '/' ? 'page' : ''}
        >
          Bookshelf
        </a>
      </Link>
    </header>
  );
};

export default Header;

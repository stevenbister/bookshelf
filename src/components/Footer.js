const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <a href="https://stevenbister.com/">&copy;{year} Steven Bister</a>
      <a href="https://github.com/stevenbister/bookshelf">GitHub</a>
    </footer>
  );
};

export default Footer;

import Link from 'components/Link';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <span className="footer__date">
      {`© ${new Date().getFullYear()} Autobuysell.`}
    </span>
    <Link secondary className="footer__link" href="#" target="_self">
      Your Trusted Partner In Automated Trading
    </Link>
  </footer>
);

export default Footer;

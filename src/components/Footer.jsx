import "./Footer.css"
import { FaGithub, FaEnvelope } from 'react-icons/fa'; // FontAwesome Icons

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/basti-1982" target="_blank" rel="noopener noreferrer" className="footer-icon">
        <FaGithub />
      </a>
      <a href="mailto:s.lonczyk@outlook.com" className="footer-icon">
        <FaEnvelope />
      </a>
    </footer>
  );
}

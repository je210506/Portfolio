import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
      <footer className="footer">
        <div> 
        <a href="https://github.com/je210506" target="_blank" rel="noopener noreferrer" >
          <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
        </a>
        <a href="www.linkedin.com/in/jenny-lalanne" target="_blank" rel="noopener noreferrer" >
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />
        </a>
        </div>
      </footer>
    );
  }
  
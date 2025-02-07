export default function Nav() {
  return (
    <nav className="NavDiv">
      <h1>Jenny's Portfolio</h1>
      <ul>
      <li><Link to="/">About Me</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
    </ul>
    </nav>
  );
}

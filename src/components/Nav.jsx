import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="NavDiv" id= 'navbar'>
      <h1>Jenny's Portfolio</h1>
      <ul>
        <NavLink to= "/" className={'navLink'}>About Me</NavLink>
        <NavLink to= "/Contact" className={'navLink'}>Contact Me</NavLink>
        <NavLink to= "/Portfolio" className={'navLink'}>Portfolio</NavLink>
        <NavLink to= "/Resume" className={'navLink'}>Resume</NavLink>
    </ul>
      
    </nav>
  );
}

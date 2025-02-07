import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="NavDiv">
      <h1>Jenny's Portfolio</h1>
      <ul>
        <NavLink to= "/">About Me</NavLink>
        <NavLink to= "/Contact">Contact Me</NavLink>
        <NavLink to= "/Portfolio">Portfolio</NavLink>
        <NavLink to= "/Resume">Resume</NavLink>
    </ul>
      
    </nav>
  );
}

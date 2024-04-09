import { SiGithub, SiGmail } from "react-icons/si";
import { FiSun, FiMoon } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar bg-primary text-primary-content'>
      <div className='navbar-start'>
        <strong className='text-lg mr-2'>Luan Coelho</strong>
        <strong className="mr-2">•</strong>
        <strong className="mr-2 underline underline-offset-2"><NavLink to="/">Início</NavLink></strong>
        <strong className="underline underline-offset-2"><NavLink to="/projetos">Projetos</NavLink></strong>
      </div>
      <div className='navbar-end'>
        <label className="swap swap-rotate mr-4">
          <input type="checkbox" className="theme-controller" value="sunset" />

          <FiSun className="swap-off" size="27px" />

          <FiMoon className="swap-on" size="27px" />
        </label>
        <a href="mailto:luancgoes100@gmail.com" className="mr-4"><SiGmail size="27px" /></a>
        <a href="https://github.com/luannn000" className="mr-4"><SiGithub size="27px" /></a>
      </div>
    </div>
  );
}

export default Navbar;
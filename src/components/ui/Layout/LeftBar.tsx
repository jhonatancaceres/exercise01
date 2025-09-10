import { useState, type JSX } from "react";
import type React from "react";
import { HiCog, HiHome, HiMiniArrowLeftEndOnRectangle, HiMiniArrowRightEndOnRectangle, HiMiniInformationCircle } from "react-icons/hi2";
import { NavLink, type NavLinkProps } from "react-router-dom";

interface LocalNavLinkProps extends NavLinkProps {
  label: string;
  icon: JSX.Element;
  isExpanded: boolean;
}
const LocalNavLink: React.FC<LocalNavLinkProps> = ({ label, icon, isExpanded, ...props }) => {
  return <NavLink    {...props} >
    <div className="flex">
      {icon}
      {isExpanded && <span className="ml-2">{label}</span>}
    </div>
  </NavLink>
};

const LeftBar: React.FC = () => {

  const commonNavLinkClassName = "p-2 my-2 rounded-lg hover:bg-gray-700";
  const [isExpanded, setIsExpanded] = useState(false);

  return <div className={"bg-gray-800 text-white p-2 flex flex-col items-center "}>
    <a className="p-2" onClick={() => setIsExpanded(prev => !prev)}>
      {isExpanded ? <HiMiniArrowLeftEndOnRectangle size={24} /> : <HiMiniArrowRightEndOnRectangle size={24} />}
    </a>
    <div className="flex-1 flex flex-col items-center">
      <LocalNavLink to="/" label="Home" icon={<HiHome size={24} />} className={commonNavLinkClassName} isExpanded={isExpanded} />
      <LocalNavLink to="/login" label="Login" icon={<HiHome size={24} />} className={commonNavLinkClassName} isExpanded={isExpanded} />
    </div>
    <div className="flex-2 flex flex-col items-center">
      <LocalNavLink to="/about" label="About" icon={<HiMiniInformationCircle size={24} />} className={commonNavLinkClassName} isExpanded={isExpanded} />
      <LocalNavLink to="/settings" label="Settings" icon={<HiCog size={24} />} className={commonNavLinkClassName} isExpanded={isExpanded} />
    </div>
  </div>
};

export default LeftBar;

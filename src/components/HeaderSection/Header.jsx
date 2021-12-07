import { useState } from 'react';

export default function Header({ children }) {
    const [isToggled, setToggled] = useState(false);

    const toggleHandler = () => {
        setToggled(!isToggled);
    }

    return (
      <div className="container">
            <div id="MagicMenu" className="nav-header">
                <div className="container">
                    <div className="logo float-left">
                        <a href="#one"><img src="logo.svg" alt="logo" /></a>
                    </div>
                    <div className="menu-toggle float-right">
                        <img onClick={toggleHandler} src="menu.svg" alt="Menu" />
                    </div>
                </div>
            </div>
            { children(isToggled, toggleHandler) }
      </div>
    )
}

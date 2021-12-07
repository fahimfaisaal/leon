import { useState } from 'react';
import Nav from './Nav';

export default function Header() {
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
            
            <Nav
                isToggled={isToggled}
                onClickHandler={toggleHandler}
            />
      </div>
    )
}

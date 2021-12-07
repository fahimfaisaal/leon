function Nav({ isToggled, onClickHandler }) { 
    return (
        <nav style={isToggled ? {right: 0} : {}}>
            <div className="menu-toggle inner-btn float-left">
                <img onClick={onClickHandler} src="x.svg" alt="Menu" />
            </div>
            <ul>
                <h3>Menu</h3>
                <li><a href="#one">Home</a></li>
                <li><a href="#two">Services</a></li>
                <li><a href="#three">Portfolio</a></li>
                <li><a href="#four">About</a></li>
            </ul>
            <ul className="lower-menu">
                <h3>Get in Touch</h3>
                <li><a href="#five">Contact Me</a></li>
            </ul>
            <ul className="lower-menu">
                <h3>Get Social</h3>
                <li><a href="#one">Behance</a></li>
                <li><a href="#tow">Dribble</a></li>
                <li><a href="#three">Twitter</a></li>
            </ul>
            <h5>© Leon 2021</h5>
        </nav>
    )
}

export default Nav;
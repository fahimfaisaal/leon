import Header from './Header';
import Nav from './Nav';

export default function Hero() {
    return (
        <header id="one">
            <Header>
            {
                (isToggled, toggleHandler) => (
                <Nav
                    isToggled={isToggled}
                    onClickHandler={toggleHandler}
                />
                )
            }
            </Header>
            <div className="hero">
                <h1>Hello There!</h1>
                <h2>
                    We are Leon - Super Creative & Minimal<br />Agency Web Template.
                </h2>
            </div>
      </header>
    )
}

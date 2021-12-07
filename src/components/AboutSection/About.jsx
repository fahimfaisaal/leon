import SectionHeadLine from "../SectionHeadLine";

export default function About() {
    return (
        <section className="about" id="four">
            <div className="container">
                <SectionHeadLine
                    heading="About"
                    description="Less is more work"
                />
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12 about-img">
                        {/* <img src="img/about.jpg" alt="" /> */}
                        <div className="shape shape-about"></div>
                        <div className="shape shape-l"></div>
                        <div className="shape shape-l shape-l-hor"></div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 about-text">
                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed
                            do eiusmod tempor incididunt ut labore et dolore<br />magna
                            aliqua. Ut enim ad minim veniam, quis nostrud <br />exercitation
                            ullamco laboris nisi ut aliqui
                        </h4>
                        <div className="separator"></div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor<br />incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud<br />exercitation ullamco
                            laboris nisi ut aliqu
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
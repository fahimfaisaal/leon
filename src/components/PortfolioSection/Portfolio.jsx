/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import SectionHeadLine from "../SectionHeadLine";
import Project from "./Project";

const projects = {
    digitalRoot: {
        title: "Digital Root Calculator",
        description: "A simple calculator that calculates the digital root of a number",
        image: "digitalRoot.png",
        alt: "Digital Root Calculator",
        link: "https://digitalrootcalculator.netlify.app/"
    },
    jadoo: {
        title: "Jadoo - A Travel Agency",
        description: "A travel agency website built for a better user experience",
        image: "jadooworld.png",
        alt: "Jadoo World travel agency",
        link: "https://jadooworld.netlify.app/"
    },
}

export default function Portfolio() {
    const [isHidden, setIsHidden] = useState(true);

    const toggleProject = () => {
        setIsHidden(!isHidden);
    }

    const { digitalRoot, jadoo } = projects;

    return (
        <section className="portfolio" id="three">
            <div className="container">
                <SectionHeadLine
                    heading="Portfolio"
                    description="If you do it right, it will last forever"
                />

                <div className="row">
                    <Project
                        image={digitalRoot.image}
                        alt={digitalRoot.alt}
                        title={digitalRoot.title}
                        description={digitalRoot.description}
                        link={digitalRoot.link}
                    />
                    <Project
                        image={jadoo.image}
                        alt={jadoo.alt}
                        title={jadoo.title}
                        description={jadoo.description}
                        link={jadoo.link}
                    />
                    <Project
                        image={digitalRoot.image}
                        alt={digitalRoot.alt}
                        title={digitalRoot.title}
                        description={digitalRoot.description}
                        link={digitalRoot.link}
                    />
                    <Project
                        image={jadoo.image}
                        alt={jadoo.alt}
                        title={jadoo.title}
                        description={jadoo.description}
                        link={jadoo.link}
                    />
                    <Project
                        image={digitalRoot.image}
                        alt={digitalRoot.alt}
                        title={digitalRoot.title}
                        description={digitalRoot.description}
                        link={digitalRoot.link}
                    />
                    <Project
                        image={jadoo.image}
                        alt={jadoo.alt}
                        title={jadoo.title}
                        description={jadoo.description}
                        link={jadoo.link}
                    />
                </div>

                <div className={isHidden && "hidden-gallery"}>
                    <div className="row">
                        <Project
                            image={jadoo.image}
                            alt={jadoo.alt}
                            title={jadoo.title}
                            description={jadoo.description}
                            link={jadoo.link}
                        />
                        <Project
                            image={digitalRoot.image}
                            alt={digitalRoot.alt}
                            title={digitalRoot.title}
                            description={digitalRoot.description}
                            link={digitalRoot.link}
                        />
                        <Project
                            image={jadoo.image}
                            alt={jadoo.alt}
                            title={jadoo.title}
                            description={jadoo.description}
                            link={jadoo.link}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="show-more-btn">
                        <div className="btn-wrap">
                            <a href="javascript:void(0);" onClick={toggleProject} className="button2">{isHidden ? "Show Me More" : "Close" }</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
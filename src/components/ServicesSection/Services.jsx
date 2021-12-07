import SectionHeadLine from "../SectionHeadLine"
import Service from "./Service"

export default function Services() {
    return (
        <div>
            <section className="services" id="two">
                <div className="container">
                    <SectionHeadLine
                        heading="Services"
                        description="Don't be busy, be productive"
                    />
                    <div className="row">
                        <div class="col-lg-4 col-sm-4 col-xs-12">
                            <Service
                                iconClass="fa fa-pencil"
                                title="Graphic Design"
                                description="Graphic design is the process of visual communication and problem-solving using one or more of typography,photography and illustration."
                            />
                            <Service
                                iconClass="fa fa-link"
                                title="Web Design"
                                description="Web design encompasses many different skills and disciplines in the production and maintenance of websites."
                            />
                        </div>
                        <div class="col-lg-4 col-sm-4 col-xs-12">
                            <Service
                                iconClass="fa fa-sliders"
                                title="UI & UX"
                                description="Process of enhancing user satisfaction with a product by improving the usability, accessibility, and pleasure provided in the interaction."
                            />
                            <Service
                                iconClass="fa fa-laptop"
                                title="Web Development"
                                description="Web development is a broad term for the work involved in developing a web site for the Internet or an intranet."
                            />
                        </div>
                        <div class="col-lg-4 col-sm-4 col-xs-12">
                            <div class="service-img">
                                {/* TODO: have to add service picture */}
                                {/* <img src="img/service.jpg" alt="" /> */}
                                <div class="shape"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

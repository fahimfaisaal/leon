import Info from "./Info"

export default function Infos() {
    return (
        <section className="container-fluid info-squares">
            <div className="row no-gutter">
                <Info
                    iconClass="fa fa-magic"
                    title="Tell Us Your Idea"
                    description={
                        <>
                            Lorem ipsum dolor sit amet, consectetur <br />
                            adipiscing elit, sed do eiusmod tempor <br />
                            incididunt ut lab
                        </>
                    }
                />
                <Info
                    iconClass="fa fa-diamond"
                    title="We Will Do All The Work"
                    description={
                        <>
                            Lorem ipsum dolor sit amet, consectetur<br />
                            adipiscing elit, sed do eiusmod tempor <br />
                            incididunt ut lab
                        </>
                    }
                />
                <Info
                    iconClass="fa fa-globe"
                    title="Your Product is Worldwide"
                    description={
                        <>
                            Lorem ipsum dolor sit amet, consectetur <br />
                            adipiscing elit, sed do eiusmod tempor <br />
                            incididunt ut lab
                        </>
                    }
                />
            </div>
        </section>
    )
}

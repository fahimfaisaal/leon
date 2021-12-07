import SectionHeadLine from "../SectionHeadLine";

export default function Contact() {
    return (
        <section className="contact" id="five">
            <div className="container">
                <SectionHeadLine
                    heading="Contact"
                    description="I was born to create"
                />

                <div className="row">
                    <div class="contact-info">
                        <h1>Feel free to drop us a line at:</h1>
                        <h1>leonagency@mail.com</h1>
                        <p>Find us on social networks:</p>
                        <ul>
                            <li>
                                <a href="https://www.github.com/fahimfaisaal">
                                    <i class="fa fa-github" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/fahimfaisaal">
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/FahimFaisaal">
                                    <i class="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
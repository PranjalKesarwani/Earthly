import React from "react";

const Footer = ()=>{
    return(
        <React.StrictMode>
        <footer>
            <div id="footCards">
                <div className="footCard">
                    <h1>Earthly</h1>
                </div>
                <div className="footCard">
                    <h1>Explore</h1>
                    <ul>
                        <li> <a href="https://earthly.org/climate-solutions" target="_blank" rel="noreferrer">Getting Started</a></li>
                        <li> <a href="https://earthly.org/products" target="_blank" rel="noreferrer">Products</a></li>
                        <li> <a href="https://earthly.org/projects" target="_blank" rel="noreferrer">Projects</a></li>
                        <li> <a href="https://earthly.org/project-assessment" target="_blank" rel="noreferrer">Project Scoring</a></li>
                    </ul>
                </div>
                <div className="footCard">
                    <h1>Connect</h1>
                    <ul>
                        <li> <a href="https://earthly.org/contacts" target="_blank" rel="noreferrer">Contact Us</a></li>
                        <li> <a href="https://earthly.org/customers" target="_blank" rel="noreferrer">Customers</a></li>
                        <li> <a href="https://earthly.org/events" target="_blank" rel="noreferrer">Events</a></li>
                        <li> <a href="https://earthly.org/why-earthly" target="_blank" rel="noreferrer">Why Earthly?</a></li>
                    </ul>
                </div>
                <div className="footCard">
                    <h1>Resources</h1>
                    <ul>
                        <li> <a href="https://earthly.org/carbon-accounting-and-your-business-footprint" target="_blank" rel="noreferrer">Carbon Accounting</a></li>
                        <li> <a href="https://earthly.org/what-is-carbon-offsetting" target="_blank" rel="noreferrer">Carbon Offsetting</a></li>
                        <li> <a href="https://earthly.org/faqs" target="_blank" rel="noreferrer">FAQ</a></li>
                        <li> <a href="https://earthly.org/news-views" target="_blank" rel="noreferrer">Blog</a></li>
                    </ul>
                </div>
              
            </div>
            <hr />
            <div id="socialMedia">
                <a href="/"><i className="fa-brands fa-twitter"></i></a>
                <a href="/"><i className="fa-brands fa-facebook"></i></a>
                <a href="/"><i className="fa-brands fa-linkedin"></i></a>
                <a href="/"><i className="fa-brands fa-instagram"></i></a>
            </div>
        </footer>
        </React.StrictMode>
    )
}

export default Footer;
export default function HeroSection(){
    return(
        <section id ="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title"> Fast-paced, skillful</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title-color">Futsal</span>{" "}
                        <br />
                    Academy
                    </h1>
                    <p className="hero--section--description">
                        
                        <br />
                    </p>
                </div>
                <button className="btn-primary btn">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src='../imgs/image1.png' alt="This is Profile" width={"400px"}></img>
            </div>
        </section>
    )
}
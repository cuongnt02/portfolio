import ProfileImage from "@assets/profile.jpg"
import "@styles/variables.css"
import "@styles/layout.css"
import "@styles/animations.css"
import "./Hero.css"
import HomeData from '@data/home.json'
import ClipReveal from "@components/ClipReveal.jsx";

const Hero = () => {
    return (
        <section className="hero">
            <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 profile">
                    <ClipReveal onLoad={true} delay={200}>
                        <HeroImage image={ProfileImage}/>
                    </ClipReveal>
                    <SocialLinks/>
                </div>
            </div>
        </section>
    )
}

const HeroImage = ({image}) => {
    return (
        <div className={`image`}>
            <img src={image} alt="ProfileImage" className="hero-image"/>
        </div>
    )
}

const SocialLinks = () => {
    const socialLinks = HomeData["social-links"]
    return (
            <ClipReveal onLoad={true} delay={200} behavior={'clip-hidden-left'} classNames={"social-links"}>
                <ul>
                    {socialLinks.map((link, index) => {
                        return (
                            <li key={index} onClick={() => window.open(`https://${link.url}`)}>{link.name}</li>
                        )
                    })}
                </ul>
            </ClipReveal>
    )
}


export default Hero;
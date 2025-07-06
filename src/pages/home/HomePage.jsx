import './HomePage.css'
import Hero from "@pages/home/Hero.jsx";

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="container">
                <div className="page-wrapper">
                    <Hero/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
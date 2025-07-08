import './HomePage.css'
import Hero from "@pages/home/Hero.jsx";
import '@styles/variables.css'
import '@styles/layout.css'

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
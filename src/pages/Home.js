import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Pictures from "../components/Pictures";

const Home = () => {
    return (
        <div className='home'>
            <Logo />
            <Navigation />
            <Pictures />
        </div>
    );
};

export default Home;
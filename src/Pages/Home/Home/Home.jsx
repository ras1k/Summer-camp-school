import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter/NewsLetter";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Cascade School Of Music | Home</title>
            </Helmet>
            <Banner />
            <PopularClasses/>
            <NewsLetter/>
        </div>
    );
};

export default Home;
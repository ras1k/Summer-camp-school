import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Cascade School Of Music | Home</title>
            </Helmet>
            <Banner />
            <NewsLetter/>
        </div>
    );
};

export default Home;
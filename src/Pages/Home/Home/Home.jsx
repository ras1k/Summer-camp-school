import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Cascade School Of Music | Home</title>
            </Helmet>
            <Banner />
            <p>Hi</p>
        </div>
    );
};

export default Home;
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter/NewsLetter";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Cascade School Of Music | Home</title>
            </Helmet>
            <Banner />
            <PopularClasses/>
            <PopularInstructors/>
            <NewsLetter/>
        </div>
    );
};

export default Home;
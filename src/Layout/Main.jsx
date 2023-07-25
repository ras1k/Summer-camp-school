import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import { useContext } from "react";
import ThemeContext from "../Components/ThemeProvider/ThemeContext";


const Main = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className={`home ${theme}`}>
            <Header toggleTheme={toggleTheme}></Header>
            <div className="p-2">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
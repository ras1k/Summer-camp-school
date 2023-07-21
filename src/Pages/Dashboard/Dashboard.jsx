import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
    FaHome,
    FaPersonBooth,
    FaPencilRuler,
    FaWallet,
    FaUsers,
    FaChalkboardTeacher,
    FaClipboard,
    FaMusic
} from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { Fade } from "react-awesome-reveal";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
            {isLoading ? (
                <Fade delay={1e1} damping={1e-1} >
                    <div className="lg:text-[80px] text-black md:text-[70px] text-[30px] m-24 flex items-center justify-center">L<span><FaMusic /></span>ADING...</div>
                </Fade>
            ) : (
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
                            <FaAlignJustify></FaAlignJustify>
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-base-content text-white">
                            <li className="hover:bg-teal-400 hover:rounded-lg">
                                <NavLink to={"/"}>
                                    <FaHome></FaHome> Home
                                </NavLink>
                            </li>
                            {isAdmin && (
                                <>
                                    <li className="hover:bg-teal-400 hover:rounded-lg">
                                        <NavLink to={"/dashboard/manageUsers"}>
                                            <FaUsers></FaUsers> Manage Users
                                        </NavLink>
                                    </li>
                                    <li className="hover:bg-teal-400 hover:rounded-lg">
                                        <NavLink to={"/dashboard/manageClasses"}>
                                            <FaUsers></FaUsers> Manage Classes
                                        </NavLink>
                                    </li>
                                </>
                            )}
                            {!isAdmin && !isInstructor && (
                                <>
                                    <li className="hover:bg-teal-400 hover:rounded-lg">
                                        <NavLink to={"/dashboard/myClasses"}>
                                            <FaPersonBooth></FaPersonBooth> My Selected Classes
                                        </NavLink>
                                    </li>
                                    <li className="hover:bg-teal-400 hover:rounded-lg">
                                        <NavLink to={"/dashboard/myEnrolledClasses"}>
                                            <FaPencilRuler></FaPencilRuler> My Enrolled Classes
                                        </NavLink>
                                    </li>
                                    <li className="hover:bg-teal-400 hover:rounded-lg">
                                        <NavLink to={"/dashboard/payment"}>
                                            <FaWallet></FaWallet> PAYMENT
                                        </NavLink>
                                    </li>
                                </>
                            )}
                            {isInstructor && (
                                <>
                                    <li className="hover:bg-teal-400 hover:rounded-lg">
                                        <NavLink to={"/dashboard/instructor"}>
                                            <FaChalkboardTeacher></FaChalkboardTeacher> Instructor
                                        </NavLink>
                                    </li>
                                    <li className="hover:bg-teal-400 hover:rounded-lg">
                                        <NavLink to={"/dashboard/addClass"}>
                                            <FaClipboard></FaClipboard> Add A Class
                                        </NavLink>
                                    </li>
                                    <li className="hover:bg-teal-400 hover:rounded-lg">
                                        <NavLink to={"/dashboard/myClass"}>
                                            <FaUsers></FaUsers> My Class
                                        </NavLink>
                                    </li>
                                </>

                            )}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;

import { Link } from "react-router-dom";
import logo from '../../../assets/CSM+LOGO.png';

const Header = () => {
    const user = 1;
    const navItems = <>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to='/'>Instructors</Link>
        </li>
        <li>
            <Link to='/'>Classes</Link>
        </li>
        {user?.email ? <>
            <li><Link to='/'>Dashboard</Link></li>
        </> :
            <li><Link to='/'></Link></li>}
    </>
    return (
        <div>
            <div className="navbar flex items-center bg-black text-white p-3 rounded-b-lg top-0 mb-4">
            <div className="navbar-start flex">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" ><img src={logo} className='w-[100px]' alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.displayName && (
                    <p>{user.displayName}</p>
                )}
                {user?.photoURL && (

                    <img className="w-12 h-12 mx-3 rounded-full" src={user.photoURL} alt="user profile" />
                )}
                {user?.email ? <>
                    <button className="btn btn-outline btn-neutral" /*onClick={handleLogOut}*/>Logout</button>
                </> :
                    <Link to='/login'><button className="btn btn-sm md:btn-md btn-outline text-white btn-neutral">Login</button></Link>}
            </div>
        </div>
        </div>
    );
};

export default Header;
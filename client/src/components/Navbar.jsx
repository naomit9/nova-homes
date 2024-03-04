import { IconButton } from "@mui/material";
import { Search, Person, Menu } from "@mui/icons-material";
import variables from "../styles/variables.scss";
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import "../styles/navbar.scss";
import {Link, useNavigate} from "react-router-dom";
import {setLogout} from "../redux/state";

export const Navbar = () => {
    const [dropdownMenu, setDropDownMenu] = useState(false);
    
    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();

    return (
        <div className='navbar'>
            <a href='/'>
                <img src='/assets/logo.png' alt='logo' />
            </a>

            <div className='navbar_search'>
                <input
                    placeholder='Search...'
                    type="text"
                />
                <IconButton>
                    <Search sx={{ color: variables.pinkred }} />
                </IconButton>
            </div>

            <div className='navbar_right'>
                {user ? (
                    <a href='/create-listing' className="host">Become A Host</a>
                ) : (
                    <a href='/login' className="host">Become A Host</a>
                )}

                <button className='navbar_right_account' onClick={() => setDropDownMenu(true)}>
                        <Menu sx={{ color: variables.darkGrey }} />
                    {!user ? (
                        <Person sx={{ color: variables.darkGrey }} />
                       ) : (
                            <img 
                                src={`http://localhost:3000/${user.profileImagePath.replace(
                                    "public", 
                                "")}`} 
                                alt='profile photo' 
                                style={{ objectFit: "cover", borderRadius:"50%" }} 
                            />
                        )
                    }

                </button>

                {dropdownMenu && !user && (
                    <div className="navbar_right_accountmenu">
                        <Link to="/login">Log In</Link>
                        <Link to="/register">Sign Up</Link>
                    </div>
                )}

                {dropdownMenu && user && (
                    <div className="navbar_right_accountmenu">
                        <Link to="">Trip List</Link>
                        <Link to="">Wish List</Link>
                        <Link to="">Property List</Link>
                        <Link to="">Reservation List</Link>
                        <Link to="">Become A Host </Link>

                        <Link to="/login" onClick={() => {
                            dispatch(setLogout);
                        }}>Log Out</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
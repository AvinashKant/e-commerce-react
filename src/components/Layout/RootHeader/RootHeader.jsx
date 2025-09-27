import headerstyles from "./RootHeader.module.css";

import { NavLink } from "react-router";
export default function RootHeader() {
    return (
        <header>
            <nav>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li> <NavLink
                        key="Login"
                        to="Login"
                        className="text-sm/6 font-semibold text-gray-900"
                    >
                        Login
                    </NavLink></li>
                    <li> 
                        <NavLink
                        key="Singup"
                        to="singup"
                        className="text-sm/6 font-semibold text-gray-900"
                    >
                        Singup
                    </NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    )
}
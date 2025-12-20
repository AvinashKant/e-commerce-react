import { NavLink } from "react-router";
export default function RootHeader() {
    return (
        <header className="bg-white p-3 shadow-sm">
            <div className="flex justify-between items-center  ml-5 mr-5">
                <div>
                    <NavLink
                        key="Home"
                        to="/"
                        className="text-sm/6 font-semibold text-gray-900"
                    >Login
                    </NavLink>
                </div>
                <div>
                    <nav>
                        <ul className="flex">
                            <li>
                                <NavLink
                                    key="Login"
                                    to="Login"
                                    className="text-sm/6 font-semibold text-gray-900"
                                >
                                    Login
                                </NavLink>
                            </li>
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
                </div>
                <div>
                    <ul className="flex">
                        <li>
                            <NavLink
                                key="contact-us"
                                to="contact-us"
                                className="text-sm/6 font-semibold text-gray-900"
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
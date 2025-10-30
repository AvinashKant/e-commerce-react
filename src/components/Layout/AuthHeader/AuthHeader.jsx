import { NavLink } from "react-router";

export default function AuthHeader() {
    return (
        <>
            <li>
                <NavLink
                    key="Home"
                    to="/dashboard"
                    className="text-sm/6 font-semibold text-gray-900"
                >
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink
                    key="Issues"
                    to="issues"
                    className="text-sm/6 font-semibold text-gray-900"
                >
                    Issues
                </NavLink>
            </li>
            <li>
                <NavLink
                    key="Boards"
                    to="boards"
                    className="text-sm/6 font-semibold text-gray-900"
                >
                    Boards
                </NavLink>
            </li>
        </>
    )
}
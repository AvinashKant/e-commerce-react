import { NavLink } from 'react-router';
export default function RootHeader() {
  return (
    <>
      <li>
        <NavLink key="Home" to="/" className="text-sm/6 font-semibold text-gray-900">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink key="Login" to="Login" className="text-sm/6 font-semibold text-gray-900">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink key="Singup" to="singup" className="text-sm/6 font-semibold text-gray-900">
          Singup
        </NavLink>
      </li>
      <li>
        <NavLink key="contact-us" to="contact-us" className="text-sm/6 font-semibold text-gray-900">
          Contact Us
        </NavLink>
      </li>
    </>
  );
}

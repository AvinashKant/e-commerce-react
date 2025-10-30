import AuthHeader from "./AuthHeader/AuthHeader";
import RootHeader from "./RootHeader/RootHeader";
import { useTheme } from '../../context/ThemeContext';

export default function HeaderWapper() {
    const login = true;
    const { theme, toggleTheme } = useTheme();
    return (
        <>
            <header className="bg-white p-3 shadow-sm w-full dark:bg-gray-900 dark:text-gray-100bg-gray-50 text-gray-900 dark:text-gray-100">
                <div className="ml-14 mr-14">
                    <nav className=" ">
                        <ul className="flex items-center justify-center gap-4">
                            {login ? <AuthHeader /> : <RootHeader />}
                            <li>
                                <button
                                    onClick={toggleTheme}
                                    className="dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
                                >
                                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header >
        </>
    );
}
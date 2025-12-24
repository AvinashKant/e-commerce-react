import AuthHeader from "./AuthHeader/AuthHeader";
import RootHeader from "./RootHeader/RootHeader";
import { useTheme } from '../../context/ThemeContext';

export default function HeaderWapper() {
    const login = true;
    const { theme, toggleTheme } = useTheme();
    return (
        <>
            <header className="p-3">
                <div className="ml-14 mr-14">
                    <nav className=" ">
                        <ul className="flex items-center justify-center gap-4">
                            {login ? <AuthHeader /> : <RootHeader />}
                            <li>
                                <button
                                    onClick={toggleTheme}
                                    className="bg-white border dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded p-1"
                                >
                                    {theme === 'light' ? 'Dark' : 'Light'}
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header >
        </>
    );
}
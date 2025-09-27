
import { Outlet } from "react-router";
import HeaderWapper from './HeaderWapper';
export default function Layout() {

    return (
        <>
            <HeaderWapper />
            <div>
                <Outlet />
            </div>
        </>
    );

}
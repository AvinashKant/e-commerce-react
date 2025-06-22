
import { Outlet } from "react-router";
import HeaderWapper from './HeaderWapper';
export default function Layout() {

    return (
        <>
            <HeaderWapper />
            <div style={{top: '80px',position: 'relative'}} className="">
                <Outlet />
            </div>
        </>
    );

}
import AuthHeader from "./AuthHeader/AuthHeader";
import RootHeader from "./RootHeader/RootHeader";

export default function HeaderWapper() {
    const login = false;
    return (
        <>
            {
                login ? <AuthHeader /> : <RootHeader />
            }
        </>
    )
}
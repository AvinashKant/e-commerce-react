
export default function Login() {
    return (
        <>
            <div className="bg-amber-50 flex flex-col items-center justify-center min-h-screen">
                <div>
                    Login
                </div>
                <div>
                    <div>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div>
                        <input type="password" placeholder="Password" />
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}
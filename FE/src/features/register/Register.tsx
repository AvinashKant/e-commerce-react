export default function Register() {
  return (
    <>
      <div className="bg-amber-50 flex flex-col items-center justify-center min-h-screen">
        <div>Singup</div>
        <div>
          <div>
            <input type="text" placeholder="Username" />
          </div>
          <div>
            <input type="email" placeholder="Email" />
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
  );
}

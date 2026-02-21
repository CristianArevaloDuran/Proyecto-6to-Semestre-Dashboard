import LoginForm from "./LoginForm";
import Image from "next/image";

export const metadata = {
  title: "Login",
  description: "Login dashboard yogures de anita",
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Login() {    

    return(
        <main id="login">
            <div className="login-container">
                <div className="title">
                    <Image src='/icon.png' width={100} height={100} alt="Logo" draggable='false' />
                    <h1>Inicia Sesión</h1>
                </div>

                <LoginForm API_URL={API_URL} />

            </div>
        </main>
    )
}
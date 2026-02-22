'use client';

import { useRef } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LoginForm({API_URL}) {

    const emailRef = useRef('');
    const passRef = useRef('');
    const router = useRouter();
    
    const login = async (e) => {
        e.preventDefault();

        const data = {
            email: emailRef.current.value,
            password: passRef.current.value
        };
        
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            
            if(response.ok) {
                const result = await response.json()

                Cookies.set('session', result.access_token, {secure: true});

                localStorage.setItem('token', result.access_token);

                router.push('/dashboard');
            }
        } catch(error) {
            console.log(error); 
        }
    }
    return (
        <form className="login-form" method="post" onSubmit={(e)=> login(e)}>
            <div className="input">
                <label htmlFor='email'>Email</label>
                <input ref={emailRef} type="email" id="email" />
            </div>
            <div className="input">
                <label htmlFor='pass'>Password</label>
                <div className="password">
                    <input ref={passRef} type="password" id="pass" />
                </div>
            </div>
            <input type="submit" value='Iniciar Sesión' />
        </form>
    )
}
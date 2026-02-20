'use client';

import { useRef } from "react";

export default function LoginForm({API_URL}) {
    
    const emailRef = useRef('');
    const passRef = useRef('');
    
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
                body: JSON.stringify(data),
                credentials: 'include'
            })

            const result = await response.json()

            if(response.ok) {
                window.location.href = '/dashboard';
            }
        } catch(error) {
            console.log(error); 
        }
    }
    return (
        <form className="login-form" method="post">
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
            <input type="submit" value='Iniciar Sesión' onClick={(e)=> login(e)} />
        </form>
    )
}
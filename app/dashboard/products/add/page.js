'use client';

import BackButton from "@/app/components/BackButton"
import { useRouter } from "next/navigation";
import { useRef } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function AddProduct() {

    const router = useRouter();

    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const priceRef = useRef(null);
    const fileRef = useRef(null);

    const addProduct = async (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append('name', nameRef.current.value);
        data.append('price', priceRef.current.value);
        data.append('description', descriptionRef.current.value);

        if(fileRef.current.files[0]) {
            data.append('image', fileRef.current.files[0]);
        }

        try {
            const token = localStorage.getItem('token');

            const response = await fetch(`${API_URL}/upload`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: data
            })

            if(response.ok) {
                router.push('/dashboard/products');
            }

        } catch(error) {
            console.log(error);
        }

    };
    
    return(
        <div id="add-product">
            <BackButton text='Productos' to='/dashboard/products' />
            <h1>Agrega un producto</h1>
            <form method="POST" className="add-product-form" onSubmit={(e)=>addProduct(e)}>
                <div className="input">
                    <label htmlFor="name">Nombre</label>
                    <input id="name" ref={nameRef} type="text" />
                </div>
                <div className="input">
                    <label htmlFor="price">Precio</label>
                    <input id="price" ref={priceRef} type="number" />
                </div>
                <div className="input">
                    <label htmlFor="description">Descripción</label>
                    <textarea id="description" ref={descriptionRef} type="text" />
                </div>
                <div className="img-upload">
                    <label htmlFor="img">Imagen</label>
                    <input id="img" ref={fileRef} type="file" />
                </div>
                <input type="submit" value='Agregar' />
            </form>
        </div>
    )
}
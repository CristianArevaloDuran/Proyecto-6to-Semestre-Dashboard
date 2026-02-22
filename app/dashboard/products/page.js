'use client';
import { useProducts } from "@/hooks/useProducts";
import TableRowLoader from "@/app/components/TableRowLoader";
import BackButton from "@/app/components/BackButton";
import { icons } from "@/app/lib/constants";
import Link from "next/link";
import Actions from "@/app/components/Actions";
import Alert from "@/app/components/Alert";
import { useState } from "react";

export default function Products() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const {products, loading} = useProducts(API_URL);

    const [productToDelete, setProductToDelete] = useState(null);
    const [modal, setModal] = useState(false);
    
    return (
        <div id="products-page">
            <BackButton text='Inicio' to='/dashboard' />
            <Link href='/dashboard/products/add' className="add-button">
                <div dangerouslySetInnerHTML={{__html:icons.plus}} />
                <p>Añadir</p>
            </Link>
            <table className="products">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                {
                    loading ? <TableRowLoader /> :
                    products.map((p)=> (
                        <tbody key={p.id}>
                            <tr>
                                <td>
                                    <p>{p.name}</p>
                                </td>
                                <td>
                                    <p>{p.description}</p>
                                </td>
                            
                                <td>
                                    <p>{p.price}</p>
                                </td>
                            
                                <td>
                                    <div>
                                        <img draggable='false' src={p.img_url} />
                                    </div>
                                </td>
                                <td>
                                    <Actions id={p.id} setProductToDelete={()=>setProductToDelete(p)} setModal={()=>setModal(true)} />
                                </td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
            <Alert modal={modal} setModal={setModal} product={productToDelete} API_URL={API_URL} />
        </div>
    )
}
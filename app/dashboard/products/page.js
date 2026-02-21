'use client';
import { icons } from "@/app/lib/constants"
import { useProducts } from "@/hooks/useProducts";
import TableRowLoader from "@/app/components/TableRowLoader";


export default function Products() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const {products, loading} = useProducts(API_URL);

    const back = () => {
        window.history.back();
    }
    return (
        <div id="products-page">
            <button className="back-button" onClick={back} dangerouslySetInnerHTML={{__html: icons.back}} />
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
                                    a
                                </td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
            
        </div>
    )
}
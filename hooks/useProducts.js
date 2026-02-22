import { useEffect, useState } from "react";

export function useProducts(API) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${API}/products`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })

                if(!response.ok) {
                    throw new Error('Error al cargar los productos');
                }
                
                
                
                const result = await response.json();
                
                setProducts(result);

            } catch(error) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false);
            }
            
        }

        fetchProducts();
    }, [API]);

    return {products, loading, error};
}
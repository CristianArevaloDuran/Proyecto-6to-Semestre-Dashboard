import { useRouter } from "next/navigation";

export default function Alert({product, modal, setModal, API_URL}) {
    
    const router = useRouter();

    const deleteProduct = async () => {
        try {
            
            const token = localStorage.getItem('token');

            const response = await fetch(`${API_URL}/delete`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({'id': product.id})
            });

            if(!response.ok) {
                throw response;
            } 

            window.location = '/dashboard/products';

        } catch(error) {
            console.log(error);
        }   
    }

    const closeModal = () => {
        setModal(false);
    }

    return (
        <div className={`modal-container ${modal ? `flex` : `hidden`}`}>
            <div className="modal-content">
                <p>¿Segur@ que quiere eliminar este producto(<span className="highlight">{product?.name}</span>)?</p>
                <div className="options">
                    <button className="cancel" onClick={closeModal} >
                        Cancelar
                    </button>
                    <button className="confirmation" onClick={deleteProduct}>
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
}
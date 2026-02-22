import Link from "next/link"
import { icons } from "../lib/constants"

export default function Actions({id, setProductToDelete, setModal}) {

    const openModal = () => {
        setProductToDelete();
        setModal();
    }

    return (
        <div className="actions">
            <Link href='#' className="edit" dangerouslySetInnerHTML={{__html:icons.edit}} />
            <button className="trash" dangerouslySetInnerHTML={{__html:icons.trash}} onClick={openModal} />
        </div>
    )
}
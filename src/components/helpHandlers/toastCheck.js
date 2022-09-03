import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


export function toastCheack(res, menssage) {
    if (res === 'success') {
        toast.success(menssage, {
            position: toast.POSITION.TOP_RIGHT
        })
    } else {
        toast.error(menssage, {
            position: toast.POSITION.TOP_RIGHT
        })
    }
}
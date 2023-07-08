import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const successAlert = (msg) => toast.success(msg);
const failAlert = (msg) => toast.error(msg);


export { successAlert,failAlert};

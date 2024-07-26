import { useContext, useState } from "react"
import styles from "./Footeer.module.css"
import { GlobalContext } from "../../context/Globalcontext";


function Footeer() {
const {logo1, logo2} = useContext(GlobalContext);

    const [imagen, setImagen] = useState(`${logo1}`);

    const cambiarLogo1 = () => {
        imagen === `${logo1}` ? setImagen(`${logo2}`) : setImagen(`${logo1}`);
        //setLogo(!logo)

    }

    return (
        <div className={styles.container} onMouseOver={cambiarLogo1}>
            
            <img className={styles.logo} src={`./img/${imagen}.png`} alt="Logo"/>

        </div>
    )
}
export default Footeer
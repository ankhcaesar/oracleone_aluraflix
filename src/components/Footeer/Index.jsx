import { useState } from "react"
import styles from "./Footeer.module.css"




function Footeer({ img }) {


    const [imagen, setImagen] = useState(`${img}`);


    

    const cambiarLogo1 = () => {
        imagen === `${img}` ? setImagen(`jconiv`) : setImagen(`${img}`);
        //setLogo(!logo)

    }


    return (
        <div className={styles.container} onMouseOver={cambiarLogo1}>
            
            <img className={styles.logo} src={`./img/${imagen}.png`} alt="Logo"/>

        </div>
    )
}
export default Footeer
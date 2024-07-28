import styles from "./Footeer.module.css"
import { useContext, useState } from "react"
import { GlobalContext } from "../../context/Globalcontext";

function Footeer() {
    const { logo1, logo2 } = useContext(GlobalContext);

    const [imagen, setImagen] = useState(`${logo1}`);

    const cambiarLogo = () => {
        imagen === `${logo1}` ? setImagen(`${logo2}`) : setImagen(`${logo1}`);
    }

    return (
        <section className={styles.container} onMouseOver={cambiarLogo}>
            <img className={styles.logo} src={`./img/${imagen}.png`} alt="Logo" />
        </section>
    )
}
export default Footeer
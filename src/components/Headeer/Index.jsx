import { useContext } from "react"
import styles from "./Headeer.module.css"
import { Link } from "react-router-dom"
import { GlobalContext } from "../../context/Globalcontext"

function Headeer() {
    const { botonHome, botonNuevoVideo, logo1} = useContext(GlobalContext)


    return (
        <header>
            <Link to="/">
                <img className={styles.logoAluraflix} src={`./img/${logo1}.png`} alt="Logo" />
            </Link>

            <nav>
                <Link to="/">
                    <button className={botonHome ? styles.botonActivo : styles.botonPasivo}> HOME </button>
                </Link>
                <Link to="/NuevoVideo">
                    <button className={botonNuevoVideo ? styles.botonActivo : styles.botonPasivo} > NUEVO VIDEO </button>
                </Link>


            </nav>
        </header>
    )
}

export default Headeer
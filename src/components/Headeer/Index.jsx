import { useContext } from "react"
import styles from "./Headeer.module.css"
import { Link } from "react-router-dom"
import { GlobalContext } from "../../context/Globalcontext"

function Headeer({img}) {
    const { botonHome, setBotonHome, botonNuevoVideo, setBotonNuevoVideo } = useContext(GlobalContext)


    const cambiarHome = () => {
        setBotonHome(!botonHome)
        setBotonNuevoVideo(!botonNuevoVideo)
    }
    const cambiarNuevoVideo = () => {
        setBotonNuevoVideo(!botonNuevoVideo)
        setBotonHome(!botonHome)
    }

    return (
        <header className={styles.headeer}>

            <Link to="/">
                <img src={`./img/${img}.png`} alt="Logo" />
            </Link>
            <nav>
                <Link to="/">
                    <button className={botonHome ? styles.botonActivo : styles.botonPasivo} onClick={cambiarHome}> HOME </button>
                </Link>
                <Link to="/NuevoVideo">
                    <button className={botonNuevoVideo ? styles.botonActivo : styles.botonPasivo} onClick={cambiarNuevoVideo} > NUEVO VIDEO </button>
                </Link>
            </nav>
        </header>
    )
}

export default Headeer
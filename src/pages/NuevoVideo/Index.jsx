import { useContext, useEffect } from "react"
import Formulario from "../../components/Formulario/Index"
import styles from "./NuevoVideo.module.css"
import { GlobalContext } from "../../context/Globalcontext"

function NuevoVideo() {

    const { setBotonNuevoVideo, setBotonHome} = useContext(GlobalContext)

    useEffect(() => {
        setBotonNuevoVideo(true);
        setBotonHome(false);

    }, [])

    return (
        <section className={styles.container} >
            <div className={styles.tituloPrincipal}>
                <h3>NUEVO VIDEO</h3>
                <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
                <h2 className={styles.subtitulo}>Crear tarjeta</h2>
            </div>
            <Formulario />
        </section>
    )
}
export default NuevoVideo
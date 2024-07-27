import { useContext } from "react";
import styles from "./Destacado.module.css"
import { GlobalContext } from "../../../context/Globalcontext";

GlobalContext

function Destacado(destacado) {

    const { dataCategorias } = useContext(GlobalContext)

    /**color de la categoria */
    const [color] = dataCategorias.filter(res => res.titulo === destacado.categoria)

    /** tranformar data */
    const videoUrl = `https://www.youtube.com/embed/${destacado.id_yt}`;


    return (
        <div className={styles.container_video} >
            <iframe className={styles.video}
                src={videoUrl}
                title={destacado.titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
            <div className={styles.borde}
                style={{ boxShadow: `inset  0px 0px 10px 4px rgb(${color.color})`, borderColor: `rgb(${color.color})` }}
            ></div>
        </div>

    )
}

export default Destacado
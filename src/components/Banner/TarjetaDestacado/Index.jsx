import styles from "./TarjetaDestacado.module.css"
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/Globalcontext";

function TarjetaDestacado(destacado) {

    const { dataCategorias,
        colorDestacado, setColorDestacado
     } = useContext(GlobalContext)



/*
    useEffect(() => {
        const [colore] = dataCategorias.filter(res => res.titulo === destacado.categoria)
        setColorDestacado(colore.color)
})
        */


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
                style={{ boxShadow: `inset  0px 0px 10px 4px rgb(${colorDestacado})`, borderColor: `rgb(${colorDestacado})` }}
            ></div>
        </div>

    )

}
export default TarjetaDestacado

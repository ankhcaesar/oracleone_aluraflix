import { useContext, useEffect } from "react";
import styles from "./TarjetaVideo.module.css"
import { GlobalContext } from "../../context/Globalcontext";
import { Link } from "react-router-dom";

function TarjetaVideo(video) {

    const { dataCategorias } = useContext(GlobalContext)

    const categoriasFilter = dataCategorias.filter(res => res.titulo === video.categoria)
    const [color]=categoriasFilter



    const videoUrl = `https://www.youtube.com/embed/${video.id_yt}`;
    const imagenS = `https://img.youtube.com/vi/${video.id_yt}/hqdefault.jpg`;




    return (
        <>
            <div className={styles.container} style={{boxShadow:`inset  0px 0px 10px 4px rgb(${color.color}) `}}>

                <img
                    src={imagenS}
                    alt={video.titulo}
                    className={styles.cotainer_video}
                />
            </div>
        </>
    )

}
    export default TarjetaVideo
import { useContext, useEffect } from "react";
import styles from "./TarjetaVideo.module.css"
import { GlobalContext } from "../../context/Globalcontext";
import { Link } from "react-router-dom";

function TarjetaVideo(video, color) {

    const { } = useContext(GlobalContext)


    console.log(color);

    const videoUrl = `https://www.youtube.com/embed/${video.id_yt}`;
    const imagenS = `https://img.youtube.com/vi/${video.id_yt}/hqdefault.jpg`;




    return (
        <>
            <div className={styles.container}>

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
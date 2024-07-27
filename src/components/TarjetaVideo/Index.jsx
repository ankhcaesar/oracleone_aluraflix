import { useContext } from "react";
import styles from "./TarjetaVideo.module.css"
import { GlobalContext } from "../../context/Globalcontext";

function TarjetaVideo(video) {

    const { dataCategorias } = useContext(GlobalContext)

    const [color] = dataCategorias.filter(res => res.titulo === video.categoria)


    /** tranformar data */
    const videoUrl = `https://www.youtube.com/embed/${video.id_yt}`;

    return (
        <section>

            <div className={styles.container_video} >
                <iframe className={styles.video}
                    src={videoUrl}
                    title={video.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
                <div className={styles.borde}
                    style={{ boxShadow: `inset  0px 0px 10px 4px rgb(${color.color})`, borderColor: `rgb(${color.color})` }}
                ></div>
            </div>


        </section>
    )

}
export default TarjetaVideo

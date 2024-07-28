import styles from "./TarjetaVideo.module.css"
import iconoBORRAR from "./tachito_blanco.svg"
import iconoEDITAR from "./lapiz.svg"
import { useContext } from "react";
import { GlobalContext } from "../../context/Globalcontext";
import Botones from "./Botones/Index"


function TarjetaVideo(video) {

    const { dataCategorias, borrarVideo } = useContext(GlobalContext)

    const [color] = dataCategorias.filter(res => res.titulo === video.categoria)


    /** tranformar data */
    const videoUrl = `https://www.youtube.com/embed/${video.id_yt}`;

    return (
        <>

            <section className={styles.container_video} >
                <iframe className={styles.video}
                    src={videoUrl}
                    title={video.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
                            <div className={styles.container_botones}>
                <Botones
                    action={borrarVideo}
                    video={video}
                    img={iconoBORRAR}
                >BORRAR
                </Botones>

                <Botones
                    action={""}
                    video={video}
                    img={iconoEDITAR}
                >EDITAR
                </Botones>
            </div>
                <div className={styles.borde}
                    style={{ boxShadow: `inset  0px 0px 10px 4px rgb(${color.color})`, borderColor: `rgb(${color.color})` }}
                ></div>
            </section>




        </>
    )

}
export default TarjetaVideo

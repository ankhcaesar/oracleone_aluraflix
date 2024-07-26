import styles from "./Categorias.module.css"
import TituloCategoria from "../../TituloCategoria/Index"
import TarjetaVideo from "../../TarjetaVideo/Index"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../../context/Globalcontext"


function Categorias(categoria) {

    const { dataVideos } = useContext(GlobalContext);





    const videoFilter = dataVideos.filter(video => video.categoria === categoria.titulo)



    return (
        <div className={styles.container}>
            <TituloCategoria
                titulo={categoria.titulo}
                color={categoria.color}
            />
            <div className={styles.tarjetas}>
                {videoFilter.map((video) => {
                    return (
                        <TarjetaVideo
                        
                            key={video.id}
                            {...video}
                        />
                    )
                })}
            </div>
        </div>
    )

}

export default Categorias
import styles from "./Banner.module.css"
import { useContext } from "react"
import { GlobalContext } from "../../context/Globalcontext"
import TituloDestacado from "./Destacado/TituloDestacado/Index"
import TarjetaDestacado from "./Destacado/TarjetaDestacado/Index"

function Banner() {

    const { datadestacados } = useContext(GlobalContext)

    return (
        <>
            {datadestacados.map((destacado) => {
                return (
                    <section key={destacado.id}>
                        <div className={styles.imgFondo}
                            style={{ backgroundImage: `url(https://img.youtube.com/vi/${destacado.id_yt}/maxresdefault.jpg)` }}
                        >
                            <div className={styles.grardiente}>
                            </div>
                            <section className={styles.titulo_descripcion_y_video}>
                                <div className={styles.titulo_descripcion}>
                                    <TituloDestacado
                                        titulo={destacado.categoria}
                                        
                                        
                                    />
                                    <div className={styles.descripcion}>{destacado.descripcion}</div>
                                </div>
                                <TarjetaDestacado
                                    {...destacado}
                                />
                            </section>
                        </div>
                    </section>
                )
            })}
        </>
    )
}


export default Banner
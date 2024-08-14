import styles from "./Banner.module.css"
import { useContext } from "react"
import { GlobalContext } from "../../context/Globalcontext"
import TituloDestacado from "./TituloDestacado/Index"
import TarjetaDestacado from "./TarjetaDestacado/Index"

function Banner() {

    const { datadestacados
    } = useContext(GlobalContext)

    return (
        <>
            {datadestacados.map((destacado) => {
                return (
                    <section key={destacado.id}>
                        <div className={styles.container_destacado}
                            style={{ backgroundImage: ` linear-gradient( rgba(3, 9, 16, 0.5), rgba(34, 113, 209, 0.5)), url(https://img.youtube.com/vi/${destacado.id_yt}/maxresdefault.jpg)` }} >
                            <div className={styles.descripcion_container}>
                                <TituloDestacado
                                    titulo={destacado.categoria}
                                />
                                <h2 className={styles.titulo_descripcion}>{destacado.titulo}</h2>
                                <p className={styles.texto_descripcion} >{destacado.descripcion}</p>
                            </div>
                            <TarjetaDestacado
                                {...destacado}
                            />
                        </div>
                    </section>
                )
            })}
        </>
    )
}

export default Banner
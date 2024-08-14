import styles from "./TituloDestacado.module.css"
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../context/Globalcontext";


function TituloDestacado({ titulo }) {
    const { dataCategorias,
        colorDestacado, setColorDestacado,
        

    } = useContext(GlobalContext)


    useEffect(() => {
        let [colore] = dataCategorias.filter(res => res.titulo === titulo)
        setColorDestacado(colore.color)
    })

    return (
        <section className={styles.container}>
            <div className={styles.titulos} style={{ backgroundColor: `rgb(${colorDestacado})` }} >
                <h2 className={styles.titulo_categoria} >{titulo}</h2>
            </div>
        </section>
    )
}
export default TituloDestacado
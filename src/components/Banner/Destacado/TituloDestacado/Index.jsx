import styles from "./TituloDestacado.module.css"
import { useContext} from "react";
import { GlobalContext } from "../../../../context/Globalcontext";

function TituloDestacado({titulo}) {
    const { dataCategorias } = useContext(GlobalContext)
    const [color] = dataCategorias.filter(res => res.titulo === titulo)

    console.log(titulo);
    return (
        <section className={styles.container}>
            <div className={styles.titulos} style={{ backgroundColor: `rgb(${color.color})` }} >
                <h2 className={styles.titulo_categoria} >{titulo}</h2>
            </div>
        </section>
    )
}
export default TituloDestacado
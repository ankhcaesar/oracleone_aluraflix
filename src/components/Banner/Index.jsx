import { useContext } from "react"
import styles from "./Banner.module.css"
import { GlobalContext } from "../../context/Globalcontext"
import Destacado from "./Destacado/Index"

function Banner() {

    const { datadestacados } = useContext(GlobalContext)

    return (
        <>
            {datadestacados.map((destacado) => {
                return (
                    <div className={styles.imgFondo}
                        style={{ backgroundImage: `url(https://img.youtube.com/vi/${destacado.id_yt}/maxresdefault.jpg)` }}
                        key={destacado.id}
                    >
                        <div className={styles.grardiente}>
                        </div>
                    </div>
                )
            })}
            <Destacado />
        </>
    )
}


export default Banner
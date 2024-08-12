
import { useContext } from "react"
import { GlobalContext } from "../../context/Globalcontext"
import Categorias from "../CategoriasYVideos/Categorias/Index"
import PopUp from "../PopUp/index"


function CategoriasYVideos() {
    const { dataCategorias,
            popUp

    } = useContext(GlobalContext)


    return (
        <>
            {dataCategorias.map((categoria) => {
                return (
                    <Categorias
                        key={categoria.id}
                        {...categoria}
                    />
                )
            })}
            {popUp.show && <PopUp mensaje={popUp.mensaje} tipo={popUp.tipoMensaje} />}

        </>
    )
}

export default CategoriasYVideos

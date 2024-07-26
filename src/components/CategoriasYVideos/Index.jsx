
import { useContext } from "react"
import { GlobalContext } from "../../context/Globalcontext"
import Categorias from "../CategoriasYVideos/Categorias/Index"

function CategoriasYVideos() {
    const { dataCategorias,

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
        </>
    )
}

export default CategoriasYVideos

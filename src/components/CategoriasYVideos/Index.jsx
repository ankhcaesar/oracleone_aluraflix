import { useContext } from "react"
import { GlobalContext } from "../../context/Globalcontext"
import Categorias from "../CategoriasYVideos/Categorias/Index"
import PopUp from "../PopUp/index"
import Modal from "../Modal/Index"


function CategoriasYVideos() {
    const { dataCategorias,
        popUp,
        videoSeleccionado,
        setVideoSeleccionado

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
            <Modal video={videoSeleccionado} cerrarModal={() => { setVideoSeleccionado(null) }} />
            {popUp.show && <PopUp mensaje={popUp.mensaje} tipo={popUp.tipoMensaje} />}

        </>
    )
}

export default CategoriasYVideos

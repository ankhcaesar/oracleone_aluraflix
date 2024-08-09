import CategoriasYVideos from "../../components/CategoriasYVideos/Index"
import Banner from "../../components/Banner/Index"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context/Globalcontext"
import PopUp from "../../components/PopUp"


function Inicio() {
const {setBotonNuevoVideo, setBotonHome, popUp}=useContext(GlobalContext)

useEffect(() => {
    setBotonNuevoVideo(false);
    setBotonHome(true);

}, [])

    return (
        <>
            <Banner />
            <CategoriasYVideos />
            {popUp.Show && <PopUp mensaje={popUp.mensaje} tipo={popUp.tipoMensaje} />}

        </>
    )
}
export default Inicio
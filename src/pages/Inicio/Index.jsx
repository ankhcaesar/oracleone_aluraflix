import CategoriasYVideos from "../../components/CategoriasYVideos/Index"
import Banner from "../../components/Banner/Index"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context/Globalcontext"

function Inicio() {
const {setBotonNuevoVideo, setBotonHome}=useContext(GlobalContext)

useEffect(() => {
    setBotonNuevoVideo(false);
    setBotonHome(true);

}, [])

    return (
        <>
            <Banner />
            <CategoriasYVideos />
        </>
    )
}
export default Inicio
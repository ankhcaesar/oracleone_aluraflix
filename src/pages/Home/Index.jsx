import { Outlet } from "react-router-dom"
import GlobalContextProvider from "../../context/Globalcontext"
import Headeer from "../../components/Headeer/Index"
import Footeer from "../../components/Footeer/Index"

function Home() {
    return (
        <main>
            <GlobalContextProvider>
                <Headeer img="logo_aluraflix"/>

                <Outlet />
                <Footeer img="logo_aluraflix"/>
            </GlobalContextProvider>
        </main>
    )
}
export default Home
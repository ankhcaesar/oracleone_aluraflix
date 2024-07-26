import { Outlet } from "react-router-dom"
import GlobalContextProvider from "../../context/Globalcontext"
import Headeer from "../../components/Headeer/Index"
import Footeer from "../../components/Footeer/Index"
import Container from "../../components/Container/Index"
import Banner from "../../components/Banner/Index"

function Home() {
    return (
        <main>
            <GlobalContextProvider>
                <Headeer />
                <Banner />
                <Container>
                    <Outlet />
                </Container>
                <Footeer img="logo_aluraflix" />
            </GlobalContextProvider>
        </main>
    )
}
export default Home
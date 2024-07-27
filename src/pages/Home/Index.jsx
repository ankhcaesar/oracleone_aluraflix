import { Outlet } from "react-router-dom"
import GlobalContextProvider from "../../context/Globalcontext"
import Headeer from "../../components/Headeer/Index"
import Footeer from "../../components/Footeer/Index"
import Container from "../../components/Container/Index"

function Home() {
    return (
        <main>
            <GlobalContextProvider>
                <Headeer />
                <Container>
                    <Outlet />
                </Container>
                <Footeer />
            </GlobalContextProvider>
        </main>
    )
}
export default Home
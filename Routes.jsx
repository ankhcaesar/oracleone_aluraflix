import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home/Index"
import Inicio from "./src/pages/Inicio/Index"
import E404 from "./src/pages/E404/Index"

function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<Inicio/>}/>
                    <Route path="*" element={<E404/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute
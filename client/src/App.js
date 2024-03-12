// import "antd/dist/antd.css";
// import "../node_modules/antd/dist/antd.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ItemPage from "./pages/ItemPage";
import DefaultLayout from "../src/components/DefaultLayout";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route  path="/" element={<Homepage />}/>
                    <Route path="/items" element={<ItemPage />} />
                    <Route path="/default" element={<DefaultLayout />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

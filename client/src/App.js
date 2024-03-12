// import "antd/dist/antd.css";
// import "../node_modules/antd/dist/antd.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ItemPage from "./pages/ItemPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route  path="/" element={<Homepage />}/>
                    <Route path="/items" element={<ItemPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

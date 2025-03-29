import { Routes, Route } from "react-router-dom";
import Blog from "./Blog";
import Home from "./Home";

const Routers = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blog />} />
        </Routes>
    );
}

export default Routers;

import { Route, Routes } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <div>
        <Header />
        {children}
    </div>;
}

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Wrapper><App /></Wrapper>} />
        </Routes>
    )
}

export default Router;

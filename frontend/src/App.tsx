import {HashRouter, Route, Routes} from "react-router-dom";
import Root from "./routes/Root";
import OrganizationOfWorkRoot from "./routes/OrganizationOfWorkRoot";
import Layout from "./Layout";
import "./index.css"
import {FAMILY_ATTACHMENT, ROOT} from "./routes/const";

const App = () => {
    const routes = [{
        path: ROOT,
        element: <Root/>
    }, {
        path: FAMILY_ATTACHMENT,
        element: <OrganizationOfWorkRoot/>
    }]
    return (
        <HashRouter>
            <Routes><Route element={<Layout/>}>
                {routes.map((route,index) => <Route key={index} path={route.path} element={route.element}/>)}
            </Route></Routes>
        </HashRouter>
    );
};

export default App;

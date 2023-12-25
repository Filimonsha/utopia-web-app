import {HashRouter, Route, Routes} from "react-router-dom";
import Root from "./routes/Root";
import {ROUTES} from "./routes/const";
import OrganizationOfWorkRoot from "./routes/OrganizationOfWorkRoot";
import Layout from "./Layout";
import "./index.css"

const App = () => {
    const routes = [{
        path: ROUTES.ROOT,
        element: <Root/>
    }, {
        path: ROUTES.ORGANIZATION_OF_WORK,
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

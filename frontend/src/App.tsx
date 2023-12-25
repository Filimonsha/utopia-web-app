import {HashRouter, Route, Routes} from "react-router-dom";
import Root from "./routes/Root.tsx";
import {ROUTES} from "./routes/const.ts";
import OrganizationOfWork from "./routes/OrganizationOfWork.tsx";
import Layout from "./Layout.tsx";

const App = () => {
    const routes = [{
        path: ROUTES.ROOT,
        element: <Root/>
    }, {
        path: ROUTES.ORGANIZATION_OF_WORK,
        element: <OrganizationOfWork/>
    }]
    return (
        <HashRouter>
            <Routes><Route element={<Layout/>}>
                {routes.map(route => <Route path={route.path} element={route.element}/>)}
            </Route></Routes>
        </HashRouter>
    );
};

export default App;

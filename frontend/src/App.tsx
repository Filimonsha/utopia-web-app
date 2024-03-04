import {HashRouter, Route, Routes} from "react-router-dom";
import Root from "./routes/Root";
import OrganizationOfWorkRoot from "./routes/OrganizationOfWorkRoot";
import Layout from "./Layout";
import "./index.css"
import {FAMILY_ATTACHMENT, POLITICAL_MANAGEMENT, REPORTS, ROOT, SITUATION_MONITORING} from "./routes/const";
import PoliticalManagementRoot from "./routes/PoliticalManagementRoot";
import ReportsRoot from "./routes/ReportsRoot";

const App = () => {
    const routes = [{
        path: ROOT,
        element: <Root/>
    }, {
        path: FAMILY_ATTACHMENT,
        element: <OrganizationOfWorkRoot/>
    }, {
        path: SITUATION_MONITORING,
        element: <PoliticalManagementRoot/>
    }, {
        path: REPORTS,
        element: <ReportsRoot/>
    },]
    return (
        <HashRouter>
            <Routes><Route element={<Layout/>}>
                {routes.map((route, index) => <Route key={index} path={route.path} element={route.element}/>)}
            </Route></Routes>
        </HashRouter>
    );
};

export default App;

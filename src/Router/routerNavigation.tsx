import { Route, Routes } from "react-router-dom"
import pagesData from "./routerPagesData"

const RouterNavigation = () => {
    interface routerTypes {
        path: string,
        component: JSX.Element,
        title: string,
    }
    const pageRoutes = pagesData.map(({path,title,component}:routerTypes)=> {
        return <Route path={path} element={component} key={title} />
    })
    return <Routes>{pageRoutes}</Routes>
}
export default RouterNavigation
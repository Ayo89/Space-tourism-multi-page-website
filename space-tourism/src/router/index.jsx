import { createBrowserRouter, } from "react-router-dom"
import Root from "../layout"
import DesktopHome from "../Pages/DesktopHome/DesktopHome"


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <DesktopHome/>
            }
        ]
    }
])

export default router
import { createBrowserRouter, } from "react-router-dom"
import Root from "../layout"
import DesktopHome from "../Pages/DesktopHome/DesktopHome"
import DesktopDestination from "../Pages/DesktopDestination/DesktopDestination"


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <DesktopHome/>
            },
            {
                path: '/destination',
                element: <DesktopDestination/>
            }
        ]
    }
])

export default router
import { Outlet } from "react-router-dom"
import Layout from "../components/Layout"

const App = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    )
}

export const routes = [
    {
        path: '/app',
        element: <App />,
        children: [
        ]
    }
]
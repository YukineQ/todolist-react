import { useRoutes } from "react-router-dom"
import { publicRoutes } from "./public"
import { routes } from "./protected"

export const AppRoutes = () => {
    const element = useRoutes([...publicRoutes, ...routes])

    return <>{element}</>
}
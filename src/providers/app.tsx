import { BrowserRouter as Route } from "react-router-dom"

type AppProviderProps = {
    children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <Route>{children}</Route>
    )
} 

export default AppProvider
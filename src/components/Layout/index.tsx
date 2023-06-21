import useToggle from "../../hooks/useToggle"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const { isOpen, toggle } = useToggle()

    const appendClass = isOpen ? 'ml-[320px]' : 'ml-0'

    return (
        <>
            <Navbar toggle={toggle} />
            <div className="w-full h-full">
                <Sidebar isOpen={isOpen} />
                <main
                    className={`
                        flex-1 
                        relative 
                        overflow-y-auto 
                        pt-11 
                        h-full 
                        ease-in-out 
                        duration-200 
                        ${appendClass}
                    `}
                >
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
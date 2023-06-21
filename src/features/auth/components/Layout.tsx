type LayoutProps = {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex justify-center items-center h-full w-full">
            {children}
        </div>
    )
}

export default Layout
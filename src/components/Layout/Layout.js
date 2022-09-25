import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <main style={{ padding: "1rem 0" }}>
            <Outlet />
        </main>
    )
}

export default Layout;
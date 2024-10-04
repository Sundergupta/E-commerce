import { Outlet } from "react-router-dom"
import NavBar from "../NavBar";
import Footer from "../Footer/footer";

const RootLayout = () => {

    return <>
        <NavBar />
        <Outlet />
        <Footer />
    </>
}
export default RootLayout;
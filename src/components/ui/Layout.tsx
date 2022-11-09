import "./Layout.css"
import MainNavigation from "../layout/MainNavigation";
interface LayoutProps {
    children: React.ReactNode;
  }

export const Layout = (props:LayoutProps) => {
return (
    <div>
        <MainNavigation />
        <main className="main">
             {props.children}
        </main>
    </div>
)
} 

export default Layout; 
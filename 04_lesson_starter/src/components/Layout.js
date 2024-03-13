import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && "Loading..."}
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

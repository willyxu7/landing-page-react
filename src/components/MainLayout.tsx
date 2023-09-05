import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import {Container, Content, Footer, Header} from "rsuite";


const MainLayout = () => {
  return (
    <Container>
        <Header>
            <NavBar />
        </Header>
        <Content>
            <Outlet />
        </Content>
        <Footer></Footer>
    </Container>
  );
};

export default MainLayout;

import React from "react";
import './App.css';
import {Navbar, AppShell} from '@mantine/core';
import {Brand} from "./components/Navbar/brand";
import {MainLinks} from "./components/Navbar/mainLinks";
import {User} from "./components/Navbar/user";
import {Routes, Route} from "react-router-dom";
import {ROUTES} from "./routes";
import HomePage from "./pages/HomePage/Homepage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Shop from "./pages/Shop/Shop";
import Basket from "./pages/Basket/basket";


const AppShellComponent = ({children}) => {
    return (
        <AppShell
            padding="md"
            navbar={<Navbar hidden={false} height={"auto"} p="xs" width={{base:"auto"}}>

                <Navbar.Section mt="xs">
                    <Brand/>
                </Navbar.Section>
                <Navbar.Section grow mt="md">
                    <MainLinks/>
                </Navbar.Section>
                <Navbar.Section>
                    <User/>
                </Navbar.Section>
            </Navbar>}
        >
            {children}
        </AppShell>
    )
}

function App() {
    return (
        <AppShellComponent>
            <Routes>
                <Route path={""} element={<HomePage/>}/>
                <Route path={ROUTES.HOME} element={<HomePage/>}/>
                <Route path={ROUTES.ABOUTE} element={<About/>}/>
                <Route path={ROUTES.CONTACT} element={<Contact/>}/>
                <Route path={ROUTES.SHOP} element={<Shop/>}/>
                <Route path={ROUTES.BASKET} element={<Basket/>}/>
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
        </AppShellComponent>
    );
}

export default App;

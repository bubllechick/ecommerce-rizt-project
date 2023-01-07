
import React, { useState, useEffect } from 'react'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import { Logout } from '@mui/icons-material';


const SideBar = () => {

    const [user, setUser] = useState([]);
    const navigate = useNavigate();


    var token = localStorage.getItem("tokens");
    const fetchDataNav = async () => {
        var j = JSON.parse(token);
        var x = j["token"];
        var bearer = 'Bearer ' + x;
        return await fetch("http://localhost:3001/auth/for-user-info", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${bearer}`, // notice the Bearer before your token
            }
        })
            .then((response) => response.json())
            .then((data) => setUser(data));
    }

    useEffect(() => {
        const data = setInterval(() => {
            fetchDataNav();
        }, 3000);
        return () => clearInterval(data) // eslint-disable-next-line
        // eslint-disable-next-line
        // setTimeout(() => this.fetchDataNav(), 5000);
    }, [])


    const logOut = async (e) => {
        e.preventDefault();
        try {
            localStorage.clear();

            navigate('/login')
            document.location.replace();
            window.location.reload();
        } catch (error) {

        };
    }

    return (
        <>
            {/* <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}> */}
            <CDBSidebar textColor="#fff" backgroundColor="green">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/adminDashboard" className="text-decoration-none" style={{ color: 'inherit' }}>
                        <Image src={user.foto} roundedCircle style={{ alignSelf: 'start', margin: '2px', height: '30px', width: '30px' }} />     Admin Toko
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/adminDashboard" activeClassName="activeClicked">
                            <CDBSidebarMenuItem>
                                <DashboardIcon style={{ marginRight: '15px' }} />
                                Dashboard
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/productAdmin" activeClassName="activeClicked">
                            <CDBSidebarMenuItem>
                                <InventoryIcon style={{ marginRight: '15px' }} />
                                Produk
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/bannerAdmin" activeClassName="activeClicked">
                            <CDBSidebarMenuItem>
                                <ViewCarouselIcon style={{ marginRight: '15px' }} />
                                Banner
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/orderAdmin" activeClassName="activeClicked">
                            <CDBSidebarMenuItem>
                                <ShoppingCartIcon style={{ marginRight: '15px' }} />
                                Order
                            </CDBSidebarMenuItem>
                        </NavLink>

                        {/* <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
                            </NavLink> */}
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'start', padding: '12px' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                        {/* <Image src={user.foto} roundedCircle style={{ alignSelf: 'start', margin: '2px', height: '30px', width: '30px' }} />
                        {user.nama} */}
                        <Button variant='light' hidden={
                            Object.keys(token || 0).length > 0 ? false : true
                        } onClick={event => logOut(event)} href="/login" to="/login">
                            <Logout />
                        </Button>
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
            {/* </div> */}
        </>
    )
}

export default SideBar

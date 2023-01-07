
import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavAdmin } from '../components/NavAdmin';
import SideBar from '../components/SideBar';
import ProductAdmin from './admin/ProductAdmin';

const AdminDashboard = () => {

  return (
    <>
      <Container fluid style={{ marginLeft: '0px', paddingLeft: '0px' }}>
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
          <SideBar style={{ marginLeft: '0px', paddingLeft: '0px' }} />
          <Navbar bg="light" variant="light" style={{ width: '100%', height: '8%' }}>
            <Container style={{ marginLeft: '12px', paddingLeft: '12px' }}>
              <Navbar.Brand>Admin Dashboard</Navbar.Brand>
              <Nav className="me-auto">
              </Nav>
            </Container>
          </Navbar>
        </div>

      </Container>
    </>
  )
}

export default AdminDashboard

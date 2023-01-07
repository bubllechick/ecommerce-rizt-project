import React, { useEffect, useState } from 'react';
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from 'cdbreact';
import { Button } from 'react-bootstrap';
import { Delete, Settings } from '@material-ui/icons';


const BannerContent = () => {
  const [banner, setBanner] = useState([]);

  var token = localStorage.getItem("tokens");

  const fetchDataBanner = async () => {
    return await fetch("http://localhost:3001/banner")
      .then((response) => response.json())
      .then((data) => setBanner(data));
  }
  useEffect(() => {
    const data = setInterval(() => {
      fetchDataBanner();
    }, 3000);
    return () => clearInterval(data) // eslint-disable-next-line
    // eslint-disable-next-line
  }, [])
  // console.log(banner)

  return (
    <>
      <CDBContainer>
        <CDBTable hover responsive striped>
          <CDBTableHeader>
            <tr>
              <th>deskripsi</th>
              <th>Diskon</th>
              <th>foto</th>
              <th>create_at</th>
              <th>update_at</th>
              <th>action</th>
            </tr>
          </CDBTableHeader>
          <CDBTableBody>
            {banner?.map && banner.map(item => {
              return (
                <tr>
                  <td>{item.deskripsi}</td>
                  <td>{item.diskon}</td>
                  <td><img src={item.foto} style={{ height: '50px', width: '50px' }} /></td>
                  <td>{item.create_at}</td>
                  <td>{item.update_at}</td>
                  <td>
                    <Button style={{ margin: '2px' }} variant="outline-success"><Settings /></Button>
                    <Button style={{ margin: '2px' }} variant="outline-danger"><Delete /></Button>
                  </td>
                </tr>
              )
            })}
          </CDBTableBody>
        </CDBTable>
      </CDBContainer>
    </>
  )
}

export default BannerContent
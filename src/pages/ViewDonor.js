import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import dateFormat from "dateformat";
import Donor from './Donor';
import { Link } from 'react-router-dom';


const ViewDonor = () => {
  const [donors, setDonors] = useState([]);

  const getAllDonors = async () => {
    const res = await axios.get("http://localhost:8082/donors/getDonors");
    setDonors(res.data);

  };

  useEffect(() => {
    getAllDonors();
  }, []);

  const styles = {
    title:{
      textAlign:"center",
      backgroundColor: "#ab2830",
      padding: "50px",
      color: "white"
    },
    button: {
      backgroundColor: "#ab2830",
      color: "white",
      padding: "10px",
      borderStyle: "none",
      borderRadius: "5px"
    }
  }

  return (

    <div>
      <h1 style={styles.title}>Donor Details</h1>
      <Table style={{ 
        "borderWidth": "1px", 
        'borderColor': "#aaaaaa", 
        'borderStyle': 'solid', 
        'borderSpacing': '28px',
        'margin': '10px auto'
      }}>
        <thead>
          <tr>
            <th>Donor ID</th>
            <th>NIC</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Address</th>
            <th>District</th>
            <th>Contact</th>
            <th>Blood group</th>
            <th>Last donation</th>
            <th>Weight</th>
            <th>Heamoglobin level</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor) => {
            return (
              <tr>
                <td>{donor.donor_id}</td>
                <td>{donor.national_id}</td>
                <td>{donor.name}</td>
                <td>{dateFormat(donor.dob, "yyyy-mm-dd")}</td>
                <td>{donor.gender}</td>
                <td>{donor.address}</td>
                <td>{donor.district}</td>
                <td>{donor.telephone_number}</td>
                <td>{donor.blood_group}</td>
                <td>{dateFormat(donor.last_donation_date, "yyyy-mm-dd")}</td>
                <td>{donor.weight}</td>
                <td>{donor.hemoglobin_level}</td>
                <td><Link to='/EditDonor' state={{ donor: donor }}><button style={styles.button}>Edit</button></Link></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewDonor;
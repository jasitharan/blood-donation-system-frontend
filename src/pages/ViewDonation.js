import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';


const ViewDonation = () => {
  const [donations, setDonations] = useState([]);

  const getAllDonations = async () => {
    const res = await axios.get("http://localhost:8081/donations/getDonations");
    setDonations(res.data);
  };

  const styles={
    title:{
      textAlign:"center",
      backgroundColor: "#ab2830",
      padding: "50px",
      color: "white"
    },
    table:{
      borderWidth: "1px",
      borderColor: "#aaaaaa",
      borderStyle: 'solid',
      borderSpacing: '28px',
      margin: '10px auto'
    },
    button: {
      backgroundColor: "#ab2830",
      color: "white",
      padding: "10px",
      borderStyle: "none",
      borderRadius: "5px"
    }
  }

  useEffect(() => {
    getAllDonations();
  }, []);
  return (
    <div>
      <h1 style={styles.title}>Donation Details</h1>
      <Table style={styles.table}>
        <thead>
          <tr>
            <th>Donation ID</th>
            <th>Donor ID</th>
            <th>Campaign ID</th>
            <th>Donor condition</th>
            <th>Blood status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => {
            return (
              <tr>
                <td>{donation.donation_id}</td>
                <td>{donation.donor_id}</td>
                <td>{donation.campaign_id}</td>
                <td>{donation.donor_condition}</td>
                <td>{donation.blood_status}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewDonation;
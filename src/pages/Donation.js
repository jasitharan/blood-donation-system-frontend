import React, { useState } from "react";
import axios from "axios";
import { margin } from "@mui/system";

const Donation = () => {
  const [inputs, setInputs] = useState({
    donor_id: "",
    campaign_id: "",
    donor_condition: "",
    blood_status: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      await axios.post("http://localhost:8081/donations/addDonation", inputs, {
        headers,
      });
    } catch (error) {
      console.log(error);
    }
    alert("Donation details added successfully");
  };

  const inputStyle = {
    border: '2px solid grey',
    borderRadius: '15px',
    width: '70%',
    height: '1em',
    textAlign: 'left',
    marginLeft: '1em',
    marginBottom: '1em',
    padding: '1em'
  }

  const selectStyle = {
    border: '2px solid grey',
    borderRadius: '15px',
    width: '72.8%',
    height: '3.4em',
    textAlign: 'left',
    marginLeft: '1em',
    marginBottom: '1em',
    padding: '1em'
  }

  const styles = {
    title: {
      textAlign: "center"
    },
    btngrp: {
      width: "100%"
    },
    button: {
      backgroundColor: "#ab2830",
      marginLeft: "15px",
      border: "none",
      color: "white",
      padding: "10px 30px",
      textAlign: "center",
      width: "160px",
      display: "inline-block",
      fontSize: "16px",
      display: "block",
      cursor: "pointer",
      borderRadius: "10px",
      fontWeight: "800"
    },
  }

  const formstyle = {
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
    padding: "0px 20px"

  }

  return (
    <div>
      <h1 style={{
        textAlign: 'center',
        backgroundColor: "#ab2830",
        padding: "50px",
        color: "white"
      }}>Enter the Donation Details</h1>
      <form style={formstyle} onSubmit={handleSubmit} autoComplete="off">
        <label
          style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Donation id:</label>
        <input
          style={inputStyle}
          type="text"
          name="donation_id"
          value={inputs.donation_id}
          onChange={handleChange}
          required
        />

        <label
          style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Donor id:</label>
        <input
          style={inputStyle}
          type="text"
          name="donor_id"
          value={inputs.donor_id}
          onChange={handleChange}
          required
        />

        <label
          style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Campaign id:</label>
        <input
          style={inputStyle}
          type="text"
          name="campaign_id"
          value={inputs.campaign_id}
          onChange={handleChange}
          required
        />

        <label
          style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Donor condition:</label>
        <input
          style={inputStyle}
          type="text"
          name="donor_condition"
          value={inputs.donor_condition}
          onChange={handleChange}
          required
        />

        <label
          style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Blood status:</label>
        <select
          style={selectStyle}
          name="blood_status"
          value={inputs.status || ""}
          onChange={handleChange}
        >
          <option value="y">Yes</option>
          <option value="n">No</option>
        </select>
        <label></label>
        <input style={styles.button} type="submit" value="Submit" />
      </form>
     

    </div>
  );
};

export default Donation;
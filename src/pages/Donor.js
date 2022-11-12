import React, { useState } from "react";
import axios from "axios";


const inputStyle = { border: '2px solid green', width: '40%', listStyleType: 'none' }

const Donor = () => {
  const [inputs, setInputs] = useState({
    id: "",
    national_id: "",
    name: "",
    dob: "",
    gender: "",
    address: "",
    district: "",
    telephone_number: "",
    blood_group: "",
    last_donation_date: "",
    weight: "",
    hemoglobin_level: "",
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
      var res = await axios.post(
        "http://localhost:8082/donors/addDonor",
        inputs,
        { headers }
      );
      alert("Donor details added successfully");
    } catch (error) {
      console.log(error);
    }
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
      textAlign: "center",
      backgroundColor: "#ab2830",
      padding: "50px",
      color: "white"
    },
    btngrp: {
      width: "100%",
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
      <h1 style={styles.title}>Enter the Donor Details</h1>
      <form style={formstyle} onSubmit={handleSubmit} autoComplete="off">
        <label
          style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Donor National ID:</label>
        <input
          style={inputStyle}
          type="text"
          name="national_id"
          value={inputs.national_id}
          onChange={handleChange}
          required
        />

        <label
          style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Donor name:</label>
        <input
          style={inputStyle}
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          required
        />

        <label
          style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Donor Date of birth:</label>
        <input
          style={inputStyle}
          type="date"
          name="dob"
          value={inputs.dob}
          onChange={handleChange}
          required
        />

        <label
          style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Gender:</label>
        <select style={selectStyle} name="gender" value={inputs.gender} onChange={handleChange}>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>

        <label
          style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Address:</label>
        <input
          style={inputStyle}
          type="text"
          name="address"
          value={inputs.address}
          onChange={handleChange}
          required
        />

        <label
          style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>District:</label>
        <input
          style={inputStyle}
          type="text"
          name="district"
          value={inputs.district}
          onChange={handleChange}
          required
        />

        <label
          style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Telephone number:</label>
        <input
          style={inputStyle}
          type="number"
          name="telephone_number"
          value={inputs.telephone_number}
          onChange={handleChange}
          required
        />

        <label
          style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Blood group:</label>
        <input
          style={inputStyle}
          type="text"
          name="blood_group"
          value={inputs.blood_group}
          onChange={handleChange}
          required
        />

        <label
          style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Last donation Date:</label>
        <input
          style={inputStyle}
          type="Date"
          name="last_donation_date"
          value={inputs.last_donation_date}
          onChange={handleChange}
          required
        />

        <label
          style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Donor Weight:</label>
        <input
          style={inputStyle}
          type="number"
          name="weight"
          value={inputs.weight}
          onChange={handleChange}
          required
        />

        <label
          style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Haemoglobin Level:</label>
        <input
          style={inputStyle}
          type="text"
          name="hemoglobin_level"
          value={inputs.hemoglobin_level}
          onChange={handleChange}
          required
        />

        <label></label>
        <input 
          style={styles.button}
          type="submit" 
          value="Submit" 
        />
      </form>

    </div>
  );
};

export default Donor;
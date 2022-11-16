import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import dateFormat from "dateformat";

const EditDonor = () => {
  const location = useLocation();
  const donor = location.state.donor;
  console.log(donor);

  const [inputs, setInputs] = useState({
    id: donor.donor_id,
    national_id: donor.national_id,
    donor_id: donor.donor_id,
    name: donor.name,
    dob: donor.dob,
    gender: donor.gender,
    address: donor.address,
    district: donor.district,
    telephone_number: donor.telephone_number,
    blood_group: donor.blood_group,
    last_donation_date: donor.last_donation_date,
    weight: donor.weight,
    hemoglobin_level: donor.hemoglobin_level,
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log()
      const headers = {
        "Content-Type": "application/json",
      };
      var res = await axios.put(`http://bds-1974701998.us-east-2.elb.amazonaws.com:8082/donors/updateDonor/${inputs.id}`,
        inputs,
        { headers }
      );
      alert("Updated successfully");
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
      <h1 style={styles.title}>Update the Donor Details</h1>
      <form style={formstyle} onSubmit={handleSubmit} autoComplete="off">
        <label style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Donor National ID:</label>
        <input
          style={inputStyle}
          type="text"
          name="national_id"
          value={inputs.national_id}
          readOnly
        />

        <label style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Donor name:</label>
        <input style={inputStyle} type="text" name="name" value={inputs.name} readOnly />

        <label style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Donor Date of birth:</label>
        <input
          style={inputStyle}
          type="text"
          name="dob"
          value={dateFormat(inputs.dob, "yyyy-mm-dd")}
          readOnly
        />

        <label style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Gender:</label>
        <input style={inputStyle} type="text" name="gender" value={inputs.gender} readOnly />

        <label style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Address:</label>
        <input
          style={inputStyle}
          type="text"
          name="address"
          value={inputs.address}
          onChange={handleChange}
        />

        <label style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>District:</label>
        <input
          style={inputStyle}
          type="text"
          name="district"
          value={inputs.district}
          onChange={handleChange}
        />

        <label style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Telephone number:</label>
        <input
          style={inputStyle}
          type="number"
          name="telephone_number"
          value={inputs.telephone_number}
          onChange={handleChange}
        />

        <label style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Blood group:</label>
        <input
          style={inputStyle}
          type="text"
          name="blood_group"
          value={inputs.blood_group}
          readOnly
        />

        <label style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Last donation Date:</label>
        <input
          style={inputStyle}
          type="text"
          name="last_donation_date"
          value={
            dateFormat(inputs.last_donation_date, "yyyy-mm-dd")}
          onChange={handleChange}
        />

        <label style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Donor Weight:</label>
        <input
          style={inputStyle}
          type="number"
          name="weight"
          value={inputs.weight}
          onChange={handleChange}
        />

        <label style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>Haemoglobin Level:</label>
        <input
          style={inputStyle}
          type="text"
          name="hemoglobin_level"
          value={inputs.hemoglobin_level}
          onChange={handleChange}
        />

        <label></label>
        <input style={styles.button} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default EditDonor;
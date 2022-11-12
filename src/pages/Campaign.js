import React, { useState } from "react";
import axios from "axios";


const Campaign = () => {
  const [inputs, setInputs] = useState({
    name: "",
    location: "",
    date: "",
    time: "",
    status: "",
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
        "http://localhost:8080/campaigns/addCampaign",
        inputs,
        { headers }
      );
      alert("Campaign details added successfully");
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
      textAlign: "center"
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
    padding: "10px 20px"
  }

  return (
    <div>
      <h1 style={{
        textAlign: 'center',
        backgroundColor: "#ab2830",
        padding: "50px",
        color: "white"
      }}>
        Welcome to Blood Donation Campaign
      </h1>
      <form style={formstyle} onSubmit={handleSubmit} autoComplete="off">
        <label
          style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>
          Campaign Name:
        </label>
        <input
          style={inputStyle}
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
          required
        />

        <label
          style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>
          Campaign location:</label>
        <input
          style={inputStyle}
          type="text"
          name="location"
          value={inputs.location || ""}
          onChange={handleChange}
          required
        />

        <label
          style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>
          Campaign date:</label>
        <input
          style={inputStyle}
          type="date"
          name="date"
          value={inputs.date || ""}
          onChange={handleChange}
          required
        />

        <label
          style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>
          Campaign Time:</label>
        <input
          style={inputStyle}
          type="time"
          name="time"
          value={inputs.time || ""}
          onChange={handleChange}
          required
        />

        <label
          style={{ textAlign: 'right', padding: "10px", fontWeight: 700 }}>
          Campaign status:</label>
        <select
          style={selectStyle}
          name="status"
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


export default Campaign;
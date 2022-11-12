import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 style={{
        textAlign: 'center',
        backgroundColor: "#ab2830",
        padding: "50px",
        color: "white"
      }}> Welcome to Our Blood Donation System </h1>

      <div style={styles.btngrp}>
        <button style={styles.button} onClick={() => navigate("/Donor")}>Register Donors</button>
        <button style={styles.button} onClick={() => navigate("/ViewDonor")}>View All Donor Details</button>

        <button style={styles.button} onClick={() => navigate("/Campaign")}>Register Campaigns</button>
        <button style={styles.button} onClick={() => navigate("/ViewCampaign")}>View All Campaign Details</button>

        <button style={styles.button} onClick={() => navigate("/Donation")}>Register Donations</button>
        <button style={styles.button} onClick={() => navigate("/ViewDonation")}>View All Donation Details</button>
      </div>
    </div>
  );
};

const styles = {
  title:{
    textAlign: "center"
  },
  btngrp:{
    width: "100%",
  },
  button: {
    backgroundColor: "#28ABA3",
    margin: "10px auto",
    border: "none",
    color: "white",
    padding: "20px",
    textAlign: "center",
    width: "600px",
    display: "inline-block",
    fontSize: "18px",
    display: "block",
    cursor: "pointer",
    borderRadius: "10px",
    fontWeight: "600"
  },
}

export default About;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import dateFormat from "dateformat";
import { Link } from 'react-router-dom';
import { confirm } from 'react-confirm-box'


const ViewCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);

  const getAllCampaigns = async () => {
    const res = await axios.get("http://localhost:8080/campaigns/getCampaign");
    setCampaigns(res.data);
  };

  const options = {
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel",
    },
  };

  const styles={
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

  const onDelete = async (id) => {
    const result = await confirm("Are you sure to Delete?", options);
    if (result) {
      axios.delete(`http://localhost:8080/campaigns/deleteCampaign/${id}`)
    }
    alert("Deleted successfully");
    window.location.reload();
  };

  useEffect(() => {
    getAllCampaigns();
  }, []);

  return <div>
    <h1 style={styles.title}>Campaign Details</h1>
    <Table style={{
      "borderWidth": "1px",
      'borderColor': "#aaaaaa",
      'borderStyle': 'solid',
      'borderSpacing': '28px',
      'margin': '10px auto'
    }}>
      <thead>
        <tr>
          <th>Campaign ID</th>
          <th>Campaign name</th>
          <th>Location</th>
          <th>Date</th>
          <th>Time</th>
          <th>Status</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {campaigns.map((campaign) => {
          return (
            <tr>
              <td>{campaign.campaign_id}</td>
              <td>{campaign.name}</td>
              <td>{campaign.location}</td>
              <td>{dateFormat(campaign.date, "yyyy-mm-dd")}</td>
              <td>{campaign.time}</td>
              <td>{campaign.status}</td>
              <td><button onClick={() => {
                onDelete(campaign.campaign_id);
              }}>Delete</button></td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  </div>;
};

export default ViewCampaign;








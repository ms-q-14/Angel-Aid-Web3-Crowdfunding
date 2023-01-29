import React, { useState, useEffect } from "react";
import { useStateContext } from "../context";
import { DisplayCampaigns } from "../components";

const Profile = () => {
  const [isloading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
    console.log(campaigns, "user campaigns");
  }, [address, contract]);

  console.log("Home campaigns", campaigns.length);

  return (
    <div>
      <DisplayCampaigns
        title="Active Movements"
        campaigns={campaigns}
        isLoading={isloading}
      />
    </div>
  );
};

export default Profile;

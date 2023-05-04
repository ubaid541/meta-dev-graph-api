import axios from "axios";
import React from "react";

const Campaigns = ({ campaign, token, setCampaign }) => {
  console.log("Campaigns ", campaign);

  const handleClick = async (e, id, name) => {
    e.preventDefault();
    console.log("Campaign id , name: ", id, name);

    try {
      const singleCampaign = await axios.get(
        `https://graph.facebook.com/v16.0/${id}/ads?fields=id,name,adset{id,name,daily_budget},status&date_preset=last_year&limit=1000&access_token=${token}`
      );

      console.log("Single campaign: ", singleCampaign);

      setCampaign([singleCampaign?.data?.data, name, id]);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div>
      <div className="w-full sm:w-1/2 bg-green-200 p-4 rounded-md mb-2 h-[100px] overflow-y-scroll">
        <h3 className="text-xl font-bold" style={{ color: "#DA1F26" }}>
          <b>Campaigns</b>
        </h3>
        {campaign?.length > 0
          ? campaign.map((campaign) => (
              <div>
                <p className="text-xl font-bold">
                  <b>Name</b>
                </p>
                <p className="text-sm">{campaign?.name || "No Name"}.</p>
                <p className="text-xl font-bold">
                  <b>Ads</b>
                </p>
                <p className="text-sm">
                  {campaign?.ads?.data?.length || "No Ads"}.
                </p>
                <p className="text-xl font-bold">
                  <b>Special Ad Category</b>
                </p>
                <p className="text-sm">
                  {campaign?.special_ad_category || "No Category"}.
                </p>

                <button
                  onClick={(e) => handleClick(e, campaign?.id, campaign?.name)}
                >
                  Check single campaign
                </button>
                <hr />
              </div>
            ))
          : "No Campaigns"}
      </div>
    </div>
  );
};

export default Campaigns;

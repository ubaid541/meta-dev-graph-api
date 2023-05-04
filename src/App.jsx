import { useEffect, useState } from "react";

import "./App.css";
import { Link } from "@mui/material";
import axios from "axios";
import Campaigns from "./components/Campaigns";
import Ads from "./components/Ads";
import Adsets from "./components/Adsets";
import SingleCampaign from "./components/singleCampaign/SingleCampaign";

function App() {
  const [fbData, setfbData] = useState();
  const [singleAccountData, setsingleAccountData] = useState(false);
  const [campaign, setcampaign] = useState();
  const [ads, setAds] = useState();
  const [adset, setAdset] = useState();
  const [singleCampaign, setSingleCampaign] = useState(false);

  const token =
    "EAAHLW00DwZCEBAEO3ZBjXbCQndAK3U133sGecW6HHdCkCZApDiLJLGAzEK66XNVc3aHSZBuWegEaSoGgN1hHaRmx2NubJGFuZBDfSMSQk7swUrR9BcqNQ72pm463KHuaXEvJiq1G8ojUY31SXzSnvbAX6FV4VJMFl4rlqsKguMQ8LcZCg20MQ5z5aZB9OAZBHOeXOyD7cOOb9LIdZAhWXeYYTKPwYdeXZCMAOHUZAhwwsenOA8Pfo1hfCAU";

  const FetchFBData = async () => {
    try {
      // const data = await axios.get(`https://graph.facebook.com/v16.0/act_967421490560096/adsets?fields=name,lifetime_budget,daily_budget&access_token=${token}`)
      const data = await axios.get(
        `https://graph.facebook.com/v16.0/me?fields=adaccounts{name,id,business_name}&access_token=${token}`
      );

      setfbData(data);

      console.log("FB data : ", data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleClick = async (e, id, name) => {
    e.preventDefault();

    console.log("ID and Name: ", id, name);

    try {
      const singleAdAccount = await axios.get(
        `https://graph.facebook.com/v16.0/${id}/insights?date_preset=last_year&fields=account_currency,impressions,spend,cpc&access_token=${token}`
      );

      const relative_campaigns = await axios.get(
        `https://graph.facebook.com/v16.0/${id}/campaigns?fields=name,bid_strategy,daily_budget,special_ad_category,ads{name,adset,bid_amount,status}&access_token=${token}`
      );

      const relative_ads = await axios.get(
        `https://graph.facebook.com/v16.0/${id}/ads?fields=name,adlabels,status,bid_amount,conversion_domain&access_token=${token}`
      );

      const relative_adsets = await axios.get(
        `https://graph.facebook.com/v16.0/${id}/adsets?fields=name,status,daily_budget,lifetime_budget,optimization_goal,source_adset,bid_strategy,budget_remaining&access_token=${token}`
      );

      console.log("Insights: ", singleAdAccount);
      console.log("Relative Campaigns: ", relative_campaigns);
      console.log("Relative ads: ", relative_ads);
      console.log("Relative adsets: ", relative_adsets);

      setsingleAccountData([singleAdAccount?.data?.data, name]);
      setcampaign(relative_campaigns?.data?.data);
      setAds(relative_ads?.data?.data);
      setAdset(relative_adsets?.data?.data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    FetchFBData();
  }, []);

  return (
    <>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="p-4">
      <p className="text-2xl font-bold text-red-600">1,234</p>
      <p className="text-sm font-semibold text-gray-700">Fresh Leads</p>
    </div>
  </div>

  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="p-4">
      <p className="text-2xl font-bold text-red-600">567</p>
      <p className="text-sm font-semibold text-gray-700">Hot Leads</p>
    </div>
  </div>

  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="p-4">
      <p className="text-2xl font-bold text-red-600">890</p>
      <p className="text-sm font-semibold text-gray-700">Cold Leads</p>
    </div>
  </div>

  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="p-4">
      <p className="text-2xl font-bold text-red-600">123</p>
      <p className="text-sm font-semibold text-gray-700">Warm Leads</p>
    </div>
  </div>
</div> */}

      {!singleAccountData && (
        <div className="flex flex-row">
          <div className="w-full sm:w-1/2 bg-blue-200 p-4 rounded-md mr-2 mb-2">
            <p className="text-xl font-bold">All Ad Accounts</p> <br />
            {fbData?.data?.adaccounts?.data.length > 0
              ? fbData?.data?.adaccounts?.data.map((accounts) => (
                  <div key={accounts?.id}>
                    {accounts?.business_name && (
                      <p className="text-sm">
                        <b>Business Name</b> {accounts?.business_name}.
                      </p>
                    )}
                    <p className="text-sm">
                      <b>Name</b> {accounts?.name}.
                    </p>
                    <button
                      onClick={(e) =>
                        handleClick(e, accounts?.id, accounts?.name)
                      }
                    >
                      Check single account details
                    </button>

                    <hr />
                  </div>
                ))
              : "No ad accounts"}
          </div>
          {/* <div className="w-full sm:w-1/2 bg-green-200 p-4 rounded-md mb-2">
    <p className="text-xl font-bold">Card 2</p>
    <p className="text-sm">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div> */}
        </div>
      )}

      {/* single account data */}
      {singleAccountData && (
        <div className="flex flex-row">
          <button onClick={() => setsingleAccountData(false)}>Back</button>
          <div className="w-full sm:w-1/2 bg-blue-200 p-4 rounded-md mr-2 mb-2">
            <h1 className="text-xl font-bold">
              Insights of{" "}
              <span style={{ color: "#DA1F26" }}>{singleAccountData[1]}</span>
            </h1>
            {singleAccountData.length > 0
              ? singleAccountData[0]?.map((accounts) => (
                  <div key={accounts?.id}>
                    <p className="text-sm">
                      <b>Account Currency</b>{" "}
                      {accounts?.account_currency || "No Currency"}.
                    </p>
                    <p className="text-sm">
                      <b>Cost Per Click</b> {accounts?.cpc || "No CPC"}.
                    </p>
                    <p className="text-sm">
                      <b>Date Start</b> {accounts?.date_start || "No Date"}.
                    </p>
                    <p className="text-sm">
                      <b>Date Stop</b> {accounts?.date_stop || "No Date"}.
                    </p>
                    <p className="text-sm">
                      <b>Impressions</b>{" "}
                      {accounts?.impressions || "No impressions"}.
                    </p>
                    <p className="text-sm">
                      <b>Amount Spend</b> {accounts?.spend || "No Amount"}.
                    </p>

                    <div style={{ display: "flex", width: "100%" }}>
                      <div
                        style={{
                          height: "300px",
                          overflowY: "scroll",
                          marginRight: "20px",
                        }}
                      >
                        <Campaigns
                          campaign={campaign}
                          setCampaign={setSingleCampaign}
                          token={token}
                        />
                      </div>
                      <div
                        style={{
                          height: "300px",
                          overflowY: "scroll",
                          marginRight: "20px",
                        }}
                      >
                        <Ads ads={ads} />
                      </div>
                      <div style={{ height: "300px", overflowY: "scroll" }}>
                        <Adsets adset={adset} />
                      </div>
                    </div>

                    <hr />

                    <SingleCampaign singleCampaign={singleCampaign} />
                  </div>
                ))
              : "No data for this account."}
          </div>
        </div>
      )}
    </>
  );
}

export default App;

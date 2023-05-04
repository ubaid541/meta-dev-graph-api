import React from "react";

const SingleCampaign = ({ singleCampaign }) => {
  console.log("SingleCampaign: ", singleCampaign);
  return (
    <div>
      <div>
        <h3 className="text-xl font-bold">
          Insights of{" "}
          <span style={{ color: "#DA1F26" }}>{singleCampaign[1]}</span>
        </h3>
        <table style={{ border: "1px solid", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ border: "1px solid", borderCollapse: "collapse" }}>
              <th>id</th>
              <th>Campaign Name</th>
              <th>Status</th>
              <th>Adset</th>
              <th>Daily Budget</th>
            </tr>
          </thead>
          <tbody style={{ border: "1px solid", borderCollapse: "collapse" }}>
            {singleCampaign[0]?.length > 0 &&
              singleCampaign[0]?.map((campaign) => (
                <tr>
                  <td
                    style={{ border: "1px solid", borderCollapse: "collapse" }}
                  >
                    {campaign?.id}
                  </td>
                  <td
                    style={{ border: "1px solid", borderCollapse: "collapse" }}
                  >
                    {campaign?.name}
                  </td>
                  <td
                    style={{ border: "1px solid", borderCollapse: "collapse" }}
                  >
                    {campaign?.status}
                  </td>

                  <td
                    style={{ border: "1px solid", borderCollapse: "collapse" }}
                  >
                    {campaign?.adset?.name}
                  </td>
                  <td
                    style={{ border: "1px solid", borderCollapse: "collapse" }}
                  >
                    {campaign?.adset?.daily_budget}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleCampaign;

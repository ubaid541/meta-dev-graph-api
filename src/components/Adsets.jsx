import React from "react";

const Adsets = ({ adset }) => {
  console.log("Adset: ", adset);
  return (
    <div>
      <div>
        <div className="w-full sm:w-1/2 bg-green-200 p-4 rounded-md mb-2 h-[100px] overflow-y-scroll">
          <h3 className="text-xl font-bold" style={{ color: "#DA1F26" }}>
            <b>Adsets</b>
          </h3>
          {adset?.length > 0
            ? adset.map((adset) => (
                <div>
                  <p className="text-xl font-bold">
                    <b>Name</b>
                  </p>
                  <p className="text-sm">{adset?.name || "No Name"}.</p>
                  <p className="text-xl font-bold">
                    <b>Bid Strategy</b>
                  </p>
                  <p className="text-sm">
                    {adset?.bid_strategy || "No Strategy Domain"}.
                  </p>
                  <p className="text-xl font-bold">
                    <b>Optimization Goal</b>
                  </p>
                  <p className="text-sm">
                    {adset?.optimization_goal || "No Goal"}.
                  </p>
                  <p className="text-xl font-bold">
                    <b>Daily Budget</b>
                  </p>
                  <p className="text-sm">
                    {adset?.daily_budget || "No Budget"}.
                  </p>
                  <p className="text-xl font-bold">
                    <b>Budget Remaining</b>
                  </p>
                  <p className="text-sm">
                    {adset?.budget_remaining || "No Budget"}.
                  </p>
                  <p className="text-xl font-bold">
                    <b>Lifetime Budget</b>
                  </p>
                  <p className="text-sm">
                    {adset?.lifetime_budget || "No Budget"}.
                  </p>
                  <p className="text-xl font-bold">
                    <b>Status</b>
                  </p>
                  <p className="text-sm">{adset?.status || "No Status"}.</p>
                  <hr />
                </div>
              ))
            : "No Campaigns"}
        </div>
      </div>
    </div>
  );
};

export default Adsets;

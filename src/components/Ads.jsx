import React from "react";

const Ads = ({ ads }) => {
  console.log("Ads: ", ads);
  return (
    <div>
      <div>
        <div className="w-full sm:w-1/2 bg-green-200 p-4 rounded-md mb-2 h-[100px] overflow-y-scroll">
          <h3 className="text-xl font-bold" style={{ color: "#DA1F26" }}>
            <b>Ads</b>
          </h3>
          {ads?.length > 0
            ? ads.map((ads) => (
                <div>
                  <p className="text-xl font-bold">
                    <b>Name</b>
                  </p>
                  <p className="text-sm">{ads?.name || "No Name"}.</p>
                  <p className="text-xl font-bold">
                    <b>Conversion Domain</b>
                  </p>
                  <p className="text-sm">
                    {ads?.conversion_domain || "No Conversion Domain"}.
                  </p>
                  <p className="text-xl font-bold">
                    <b>Status</b>
                  </p>
                  <p className="text-sm">{ads?.status || "No Category"}.</p>
                  <hr />
                </div>
              ))
            : "No Campaigns"}
        </div>
      </div>
    </div>
  );
};

export default Ads;

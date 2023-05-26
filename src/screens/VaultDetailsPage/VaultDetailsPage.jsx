import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./VaultDetailsPage.css";

function VaultDetailsPage() {
  const [details, setDetails] = useState(null);

  const Location = useLocation();

  useEffect(() => {
    console.log(Location.state.details);
    setDetails(Location.state.details[0]);
  }, [Location.state.details]);

  return (
    <div className="main__container">
      <a href="/" className="back__btn">
        Home
      </a>
      <div className="details__container">
        <span>
          <b>Reference Number: </b>
          {details && details.referenceNumber}
        </span>
        <span>
          <b>Name Of Depositor: </b>
          {details && details.nameOfDepositor}
        </span>
        <span>
          <b>Address: </b>
          {details && details.address}
        </span>
        <span>
          <b>Next Of Kin: </b>
          {details && details.nextOfKin}
        </span>
        <span>
          <b>Date Of Deposit: </b>
          {details && details.dateOfDeposit}
        </span>
        <span>
          <b>Items Deposited: </b>
          {details && details.itemsDeposited}
        </span>
        <span>
          <b>Weight: </b>
          {details && details.weight}
        </span>
        <span>
          <b>Purpose Of Deposit: </b>
          {details && details.purposeOfDeposit}
        </span>
        <span>
          <b>Charge Per Month: </b>
          {details && details.chargePerMonth}
        </span>
      </div>
    </div>
  );
}

export default VaultDetailsPage;

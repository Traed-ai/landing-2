import React from "react";
import "./BusinessBox.scss"
const BusinessBox = () => {
  return (
    <div className="frame">
      <div className="div">
        <div className="frame-wrapper">
          <div className="div-2">
            <img className="img" alt="Div" src="div.svg" />
            <div className="div-3">
              <div className="text-wrapper">INVOICE DISCOUNTING</div>
              <p className="p">
                a financing method where a business sells its unpaid invoices to
                a third party at a discount to access immediate cash flow.
              </p>
            </div>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="div-2">
            <img className="img" alt="Div" src="image.svg" />
            <div className="div-3">
              <div className="text-wrapper">DEALS MANAGING</div>
              <p className="p">
                overseeing and optimizing various aspects of business
                transactions, from negotiation and documentation to tracking and
                performance analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="IOS">
        <div className="div-4">
          <div className="business-matchmaking">BUSINESS MATCHMAKING</div>
          <p className="p">
            {" "}
            a financial arrangement where a buyer facilitates early payments to
            their suppliers through a third-party financing provider
          </p>
          <div className="i-phones">
            <div className="overlap-group">
              <div className="body">
                <div className="body-2" />
              </div>
              <div className="buttons">
                <div className="button" />
                <div className="button-2" />
                <div className="silence-button" />
                <div className="power-button" />
              </div>
              <img
                className="screen-replace-here"
                alt="Screen replace here"
                src="screen-replace-here.png"
              />
              <div className="dinamy-island" />
            </div>
          </div>
        </div>
      </div>
      <div className="div">
        <div className="frame-wrapper">
          <div className="div-2">
            <img className="img" alt="Div" src="div-2.svg" />
            <div className="div-5">
              <div className="text-wrapper">FACTORING</div>
              <p className="p">
                a financial service that allows businesses to sell their
                accounts unpaid invoices to a factoring company in exchange for
                fast cash.
              </p>
            </div>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="div-2">
            <img className="img" alt="Div" src="div-3.svg" />
            <div className="div-3">
              <div className="text-wrapper">REVERSE FACTORING</div>
              <p className="p">
                a financial arrangement where a buyer facilitates early payments
                to their suppliers through a third-party financing provider
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessBox;

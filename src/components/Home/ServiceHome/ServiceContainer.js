import React, { Fragment } from "react";
import { CommercialServices } from "../../../assets/data/CommercialServices";
import { DomesticServices } from "../../../assets/data/DomesticServices";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import "./ServiceContainer.css";
const ServiceContainer = () => {
  return (
    <Fragment>
      <div className="ServiceContainer">
        <div className="DomesticService">
          <h1 className="offerTitle">Services Being Offered</h1>
          <hr className="Underline" />
          <h1 className="offerSubTitle">Maintainance</h1>
          <hr className="Underline1" />
          <div className="ServiceCardContainer">
            {DomesticServices.map(({ name, id, description, image }) => {
              return (
                <ServiceCard
                  name={name}
                  id={id}
                  description={description}
                  image={image}
                />
              );
            })}
          </div>
        </div>
        <div className="ButtonContainer">
        <Link className="OfferedButton" to="/constactus">
          CONTACT US
        </Link>
      </div>
        {/* <div className="CommercialService">
          <h1 className="ServiceTitle">COMMERCIAL SERVICES</h1>
          <hr className="Underline" />
          <div className="ServiceCardContainer">
            {CommercialServices.map(({ name, id, description, image }) => {
              return (
                <ServiceCard
                  name={name}
                  id={id}
                  description={description}
                  image={image}
                />
              );
            })}
          </div>
        </div> */}
      </div>
    </Fragment>
  );
};

export default ServiceContainer;

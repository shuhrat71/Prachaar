import React from "react";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import speaker from "./Components/img/speaker.svg";
import offer from "./Components/img/offer.svg";
import connectTeam from "./Components/img/connectTeam.svg";
import stockAlerts from "./Components/img/stockAlerts.svg";
type Props = {};

function Feature({}: Props) {
  return (
    <>
      <section className="features-page" id="feature">
        <Container maxWidth="xl">
          <div className="feature__body">
            <div className="feature__title">
              <h1>Our Features you can get </h1>
              <div className="feature__text">
                <p>
                  We offer a variety of interesting features that can help
                  increase your sales and manage your productivity{" "}
                </p>
                <div className="get_start_btn">
                  <Button
                    variant="contained"
                    sx={{
                      background: "rgba(64, 138, 126, 1)",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "rgba(51, 110, 100, 1)",
                      },
                    }}
                  >
                    Get Started now
                  </Button>
                </div>
              </div>
            </div>
            <div className="feature_card__wrapper">
              <div className="card-body">
                <div className="card_img">
                  <img src={speaker} alt="" />
                </div>
                <div className="card_title">
                  <h1>Personalised broadcast campaigns</h1>
                  <div className="card_text">
                    <p>Add media and create interactive messages</p>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="card_img">
                  <img src={offer} alt="" />
                </div>
                <div className="card_title">
                  <h1>Offers, Discounts & Promotions</h1>
                  <div className="card_text">
                    <p>Send timely information about offers and discounts.</p>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="card_img">
                  <img src={stockAlerts} alt="" />
                </div>
                <div className="card_title">
                  <h1>Stock Alerts & New Product Recommendations</h1>
                  <div className="card_text">
                    <p>
                      Let your customers know what’s in stock. You can even give
                      them information about new products that they might be
                      interested in.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="card_img">
                  <img src={connectTeam} alt="" />
                </div>
                <div className="card_title">
                  <h1>Connect Your Product Catalog</h1>
                  <div className="card_text">
                    <p>
                      Connect your product catalog to WhatsApp and start selling
                      through the platform
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Feature;

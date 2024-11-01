import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import Header from "./Components/header";
import speaker from "./Components/img/speaker.svg";
import offer from "./Components/img/offer.svg";
import connectTeam from "./Components/img/connectTeam.svg";
import stockAlerts from "./Components/img/stockAlerts.svg";
import home from "./Components/img/home.svg";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Divider from "@mui/material/Divider";

function Home() {
  return (
    <>
      <section className="home_page__wrapper">
        <Container maxWidth="xl">
          <Header />
          <div className="home-page__contend">
            <div className="main__text__wrapper">
              <div className="home__title">
                <h1>
                  With the help of <span>Prachaar+</span> it's now easier to
                  turn messaging into a <span>Powerful tool</span> for growing
                  your sales
                </h1>
              </div>
              <Divider textAlign="left" orientation="horizontal" />
              <div className="home__text">
                <p>
                  Utilize the potential of chatbots through simple messaging to
                  boost your sales and provide excellent customer experiences.
                </p>
              </div>
              <div className="home_btn">
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
                  Start free trail now
                </Button>
              </div>
            </div>
            <div className="home__img">
              <img src={home} alt="" />
            </div>
          </div>
        </Container>
      </section>
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
      <section className="free_trail_page">
        <Container maxWidth="xl">
          <div className="trail-title">
            <h1>
              We are offering <span>free trial</span> for you
            </h1>
            <div className="trail-text">
              <p>
                We're confident that you'll love what we have to offer, and we
                can't wait for you to give it a try. So why wait? Sign up now
                for your free trial and discover the power of our product or
                service for yourself!
              </p>
            </div>
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
          <div className="trail_plan__wrapper">
            <div className="plan_title">
              <h1>Choose Your Plan</h1>
            </div>
            <div className="month_or_year_btn__wrapper">
              <Button
                variant="text"
                sx={{
                  color: "#408A7E",
                  "&:hover": {
                    backgroundColor: "rgba(64, 138, 126, 0.08)",
                    color: "#408A7E",
                  },
                }}
              >
                Month
              </Button>
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
                Yearly
              </Button>
            </div>
            <div className="trail_crad__wrapper">
              <div className="standart-trail_card_body basic_card">
                <div className="trail_card_title green_color">
                  <h1>Basic </h1>
                  <div className="card_text">
                    <p>Have a go and test your superpowers</p>
                  </div>
                </div>
                <div className="trail_payment green_color">
                  <p>$</p>
                  <span>0</span>
                </div>
                <div className="news_card">
                  <div className="card_list">
                    <CheckCircleOutlineIcon
                      sx={{
                        color: "#408A7E",
                      }}
                    />
                    <span>Campaign Click Tracking</span>
                  </div>
                  <div className="card_list">
                    <CheckCircleOutlineIcon
                      sx={{
                        color: "#408A7E",
                      }}
                    />
                    <span>Unlimited Agent Logins</span>
                  </div>
                  <div className="card_list">
                    <CheckCircleOutlineIcon
                      sx={{
                        color: "#408A7E",
                      }}
                    />
                    <span>Smart Audience Segmention</span>
                  </div>
                  <div className="card_list">
                    <CheckCircleOutlineIcon
                      sx={{
                        color: "#408A7E",
                      }}
                    />
                    <span>Broadcasting & Retargeting</span>
                  </div>
                  <div className="card_list">
                    <CheckCircleOutlineIcon
                      sx={{
                        color: "#408A7E",
                      }}
                    />
                    <span>Template Message APIs</span>
                  </div>
                  <div className="card_list">
                    <CheckCircleOutlineIcon
                      sx={{
                        color: "#408A7E",
                      }}
                    />
                    <span>1000 Free Conversations/month</span>
                  </div>
                  <div className="card_list">
                    <CheckCircleOutlineIcon
                      sx={{
                        color: "#408A7E",
                      }}
                    />
                    <span>Upto 20 Custom Attributes</span>
                  </div>
                  <div className="coming_soon_btn__wrapper">
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#408a7e",
                        borderColor: "#408a7e",
                        "&:hover": {
                          backgroundColor: "rgba(51, 110, 100, 1)",
                          color: "#fff",
                        },
                      }}
                    >
                      Start free trial
                    </Button>
                  </div>
                </div>
              </div>
              <div className="standart-trail_card_body">
                <div className="background-egg"></div>
                <div className="trail_card_title white_color">
                  <h1>Standard </h1>
                  <div className="card_text">
                    <p>Experiment the power of infinite possibilities</p>
                  </div>
                </div>
                <div className="trail_payment">
                  <p>$</p>
                  <span>1234</span>
                </div>
                <div className="news_card">
                  <div className="card_list">
                    <CheckCircleOutlineIcon
                      sx={{
                        color: "#408A7E",
                      }}
                    />
                    <span>Campaign Click Tracking</span>
                  </div>
                  <div className="card_list">
                    <CheckCircleOutlineIcon
                      sx={{
                        color: "#408A7E",
                      }}
                    />
                    <span>Unlimited Agent Logins</span>
                  </div>
                  <div className="card_list">
                    <CheckCircleOutlineIcon
                      sx={{
                        color: "#408A7E",
                      }}
                    />
                    <span>Smart Audience Segmention</span>
                  </div>
                  <div className="card_list">
                    <CheckCircleOutlineIcon
                      sx={{
                        color: "#408A7E",
                      }}
                    />
                    <span>Broadcasting & Retargeting</span>
                  </div>
                  <div className="card_list">
                    <CheckCircleOutlineIcon
                      sx={{
                        color: "#408A7E",
                      }}
                    />
                    <span>Template Message APIs</span>
                  </div>
                  <div className="card_list">
                    <CheckCircleOutlineIcon
                      sx={{
                        color: "#408A7E",
                      }}
                    />
                    <span>1000 Free Conversations/month</span>
                  </div>
                  <div className="card_list">
                    <CheckCircleOutlineIcon
                      sx={{
                        color: "#408A7E",
                      }}
                    />
                    <span>Upto 20 Custom Attributes</span>
                  </div>
                  <div className="coming_soon_btn__wrapper">
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
                      Coming Soon
                    </Button>
                  </div>
                </div>
              </div>
              <div className="standart-trail_card_body advanced_card ">
                <div className="trail_card_title green_color">
                  <h1>Advanced </h1>
                  <div className="card_text">
                    <p>Experiment the power of infinite possibilities</p>
                  </div>
                </div>
                <div className="trail_payment green_color">
                  <p>$</p>
                  <span>1234</span>
                </div>
                <div className="news_card">
                  <div className="card_list">
                    <span>
                      <CheckCircleOutlineIcon
                        sx={{
                          color: "#408A7E",
                        }}
                      />
                    </span>
                    <span>Campaign Click Tracking</span>
                  </div>
                  <div className="card_list">
                    <span>
                      <CheckCircleOutlineIcon
                        sx={{
                          color: "#408A7E",
                        }}
                      />
                    </span>
                    <span>Unlimited Agent Logins</span>
                  </div>
                  <div className="card_list">
                    <span>
                      <CheckCircleOutlineIcon
                        sx={{
                          color: "#408A7E",
                        }}
                      />
                    </span>
                    <span>Smart Audience Segmention</span>
                  </div>
                  <div className="card_list">
                    <span>
                      <CheckCircleOutlineIcon
                        sx={{
                          color: "#408A7E",
                        }}
                      />
                    </span>
                    <span>Broadcasting & Retargeting</span>
                  </div>
                  <div className="card_list">
                    <span>
                      <CheckCircleOutlineIcon
                        sx={{
                          color: "#408A7E",
                        }}
                      />
                    </span>
                    <span>Template Message APIs</span>
                  </div>
                  <div className="card_list">
                    <span>
                      <CheckCircleOutlineIcon
                        sx={{
                          color: "#408A7E",
                        }}
                      />
                    </span>
                    <span>1000 Free Conversations/month</span>
                  </div>
                  <div className="card_list">
                    <span>
                      <CheckCircleOutlineIcon
                        sx={{
                          color: "#408A7E",
                        }}
                      />
                    </span>
                    <span>Upto 20 Custom Attributes</span>
                  </div>
                  <div className="coming_soon_btn__wrapper">
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#408a7e",
                        borderColor: "#408a7e",
                        "&:hover": {
                          backgroundColor: "rgba(51, 110, 100, 1)",
                          color: "#fff",
                        },
                      }}
                    >
                      Coming Soon
                    </Button>
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

export default Home;

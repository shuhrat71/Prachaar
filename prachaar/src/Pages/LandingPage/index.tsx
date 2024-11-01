import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import Header from "./Components/header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import home from "./Components/img/home.svg";

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
    </>
  );
}

export default Home;

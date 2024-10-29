import Header from "./Components/header";
import home from "./Components/img/home.png";

import Divider from "@mui/material/Divider";
type Props = {};

function Home({}: Props) {
  return (
    <>
      <section>
        <Header />
        <div className="home-page__contend">
          <div className="home__title">
            <h1>
              With the help of <span>Prachaar+</span> it's now easier to turn
              messaging into a <span>Powerful tool</span> for growing your sales
            </h1>
          </div>
          <div className="home__text"></div>
          <Divider textAlign="left" orientation="horizontal" />
          <div className="home_btn">
            <button>Start free trail now</button>
          </div>
        </div>
        <div className="home__img">
          <img src={home} alt="" />
        </div>
      </section>
    </>
  );
}

export default Home;

import logo from "./img/logo.png";
import home from "./img/home.png";
import logoIcon from "./img/logoIcon.svg";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
type Props = {};

function Header({}: Props) {
  return (
    <>
      <header>
        <div className="home-page__wrapper">
          <Container maxWidth="xl">
            <div className="header__wrapper">
              <div className="header-logo__wrapper">
                <div className="logo__wrapper">
                  <img src={logo} alt="" />
                  <img src={logoIcon} alt="" />
                </div>
                <h1>Prachaar +</h1>
              </div>
              <div className="header__link">
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Features </a>
                  </li>
                  <li>
                    <a href="">Pricing</a>
                  </li>
                  <li>
                    <a href="">Blogs</a>
                  </li>
                  <li>
                    <a href="">About us</a>
                  </li>
                </ul>
                <div className="log-in-btn__wrapper">
                  <button>Login</button>
                  <button>Sign up</button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
}

export default Header;

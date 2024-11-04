import logo from "./img/logo.png";
import logoIcon from "./img/logoIcon.svg";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
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
                    <a href="#feature">Features </a>
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
                  <Button
                    variant="text"
                    sx={{
                      color: "rgba(140, 140, 140, 1)",
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      background: "rgba(64, 138, 126, 1)",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "rgba(51, 110, 100, 1)",
                      },
                    }}
                  >
                    Sign up
                  </Button>
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

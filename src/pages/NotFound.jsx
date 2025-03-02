import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"
import { BiHome } from "react-icons/bi";

import notFoundLogo from '../assets/leap-wallet.svg'

function NotFound() {
  return (
    <div>
      <Container>
        <h2>Hmm...</h2>
        <p>Looks like you lost the page!</p>
        <div className="notFoundCover">
          <img src={notFoundLogo} alt="not found frog" />
        </div>

        <Link to="/" className="homeBtn">
          <BiHome id="btn-icon" aria-labelledby="Home button"/>
        </Link>
      </Container>
    </div>
  )
}

export default NotFound
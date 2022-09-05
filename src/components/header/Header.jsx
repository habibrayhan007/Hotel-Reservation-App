import { faBed, faCar, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerLitsItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerLitsItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerLitsItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                </div>
                <div className="headerLitsItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerLitsItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxisss</span>
                </div>
            </div>
            <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
            <p className="headerDesc">Get rewards for your travels - unlock instant savings of 10% or more with a free deBooking account</p>
            <button className="headerBtn">Sign in / Register</button>
        </div>
    </div>
  )
}

export default Header;
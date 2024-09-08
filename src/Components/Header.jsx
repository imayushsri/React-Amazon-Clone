import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar">
            <div className="nav-logo">
                <div className="logo"></div>
            </div>
            <div className="nav-address">
                <p className="address-f m-0">Deliver to</p>
                <div className="address-icon">
                <FontAwesomeIcon icon={faLocationDot}  className='i'/>
                    <p className="address-s">India</p>
                </div>
            </div>
            <div className="nav-search">
                <select className="search-select">
                    <option>All</option>
                </select>
                <input placeholder="Search Amazon" className="search-input"/>
                <div className="search-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </div>
            </div>
            {/* <div className="Language">
                <select className="lang-select ">
                    <option><img src="images/download.png" height="10px" />English</option>
                    <option><img src="images/download.png" height="10px" />Hindi</option>
                </select>
            </div> */}
            <div className="nav-signin ">
                <p className='m-0'><span>Hello, sign in</span></p>
                <select className="lang-select nav-second">
                    <option>Account & Lists</option>
                </select>
            </div>
            <div className="nav-return ">
                <p className='m-0'><span>Returns</span></p>
                <p className="lang-select nav-second m-0">& Orders</p>
            </div>
            <div className="nav-cart me-4">
                <FontAwesomeIcon icon={faCartShopping} className='i2'/>
                Cart
            </div>
            <div className="menu">
                <i className="fa-solid fa-bars"></i>
            </div>
        </nav>
        <div className="panel">
            <div className="panel-all">
                <i className="fa-solid fa-bars &nbsp;"></i>
                All
            </div>
            <div className="panel-ops">
                <p>Today's Deals</p>
                <p>Customer Service</p>
                <p>Registry</p>
                <p>Gift Cards</p>
                <p>Sell</p>
            </div>
            <div className="panel-deals">
                Shop deals in Electronics
            </div>
        </div>
    </header>
    </>
  )
}

export default Header

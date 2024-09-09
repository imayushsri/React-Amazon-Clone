import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMagnifyingGlass, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="nav-logo border1">
                        <div className="logo" />
                    </div>
                    <div className="nav-address border1 px-2">
                        <p className="address-f m-0">Deliver to</p>
                        <div className="address-icon">
                            <FontAwesomeIcon icon={faLocationDot} style={{transform:"translateY(-0.5vw)"}}/>
                            <p className="address-s">India</p>
                        </div>
                    </div>
                    <div className="nav-search">
                        <select className="search-select">
                            <option>All</option>
                        </select>
                        <input placeholder="Search Amazon" className="search-input" />
                        <div className="search-icon">
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </div>
                    </div>
                    {/* <div class="Language">
          <select class="lang-select border">
              <option><img src="images/download.png" height="10px" />English</option>
              <option><img src="images/download.png" height="10px" />Hindi</option>
          </select>
      </div> */}
                    <div className="nav-signin border1">
                        <p className='m-0'>
                            <span>Hello, sign in</span>
                        </p>
                        <select className="lang-select nav-second">
                            <option>Account &amp; Lists</option>
                        </select>
                    </div>
                    <div className="nav-return border1">
                        <p className='m-0'>
                            <span>Returns</span>
                        </p>
                        <p className="lang-select nav-second m-0">&amp; Orders</p>
                    </div>
                    <div className="nav-cart border1 me-3 px-2 py-2">
                        <FontAwesomeIcon icon={faCartShopping} className='i2'/>
                        Cart
                    </div>
                    <div className="menu">
                        <FontAwesomeIcon icon={faBars} className='.bars'/>
                    </div>
                </nav>
                <div className="panel">
                    <div className="panel-all">
                        <FontAwesomeIcon icon={faBars} className='me-2'/>
                        All
                    </div>
                    <div className="panel-ops">
                        <p>Today's Deals</p>
                        <p>Customer Service</p>
                        <p>Registry</p>
                        <p>Gift Cards</p>
                        <p>Sell</p>
                    </div>
                    <div className="panel-deals">Shop deals in Electronics</div>
                </div>
            </header>

        </>
    )
}

export default Header

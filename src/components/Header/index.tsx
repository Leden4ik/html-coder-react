import "./style.scss"

const Header = () => {
    return (
        <header className="hc__header">
            <input type="checkbox" id="MenuMobile" className='hc__header--mb-check' name='hc__menu--mobile'/>
            <div className="hc__header--box">
                <label className='hc__header--mb-burger' htmlFor='MenuMobile'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <div className="hc__header--top">
                    <div className="hc__header--logo">
                        <a className="hc__header--logo-link" href="/" title="LOGO">LOGO</a>
                    </div>
                    <div className="hc__header--search">
                        <div className="hc__header--search-box">
                            <form className="hc__header--search-form">
                                <button className="hc-icon--search hc-icon--search-dims hc__header--search-button" />
                                <input className="hc__header--search-input" placeholder="Product SKU, Name…" type="text" />
                            </form>
                        </div>
                    </div>
                    <div className="hc__header--menu">
                        <div className="hc__header--menu-list hc__header--menu-top">
                            <div className="hc__header--menu-item">
                                <a className="hc__header--menu-link" href="#" title="Request a Sample">Request a Sample</a>
                            </div>
                            <div className="hc__header--menu-item">
                                <a className="hc__header--menu-link" href="#" title="Help">Help</a>
                            </div>
                            <div className="hc__header--menu-item">
                                <a className="hc__header--menu-link" href="#" title="Contact">Contact</a>
                            </div>
                        </div>
                        <div className="hc__header--menu-list">
                            <div className="hc__header--menu-item">
                                <a className="hc__header--menu-link hc-icon--list hc-icon--list-dims" href="#" title="Lists">
                                    <div className="hc__header--menu-text">Lists</div>
                                </a>
                            </div>
                            <div className="hc__header--menu-item">
                                <a className="hc__header--menu-link hc-icon--account hc-icon--account-dims" href="#" title="Account">
                                    <div className="hc__header--menu-text">Account</div>
                                </a>
                            </div>
                            <div className="hc__header--menu-item">
                                <a className="hc__header--menu-link hc-icon--order hc-icon--order-dims" href="#" title="Quick Order">
                                    <div className="hc__header--menu-text">Quick Order</div>
                                </a>
                            </div>
                            <div className="hc__header--menu-item hc__header--menu-item">
                                <a className="hc__header--menu-link hc-icon--cart hc-icon--cart-dims" href="#" title="Cart" data-cart-qut={34}>
                                    <div className="hc__header--menu-text">Cart</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hc__header--nav">
                    <div className="hc__header--nav-list">
                        <div className="hc__header--nav-item">
                            <a className="hc__header--nav-link" href="#" title="Products">Products</a>
                        </div>
                        <div className="hc__header--nav-item">
                            <a className="hc__header--nav-link" href="#" title="Resources">Resources</a>
                        </div>
                        <div className="hc__header--nav-item">
                            <a className="hc__header--nav-link" href="#" title="Services">Services</a>
                        </div>
                        <div className="hc__header--nav-item">
                            <a className="hc__header--nav-link" href="#" title="Locations">Locations</a>
                        </div>
                        <div className="hc__header--nav-item">
                            <a className="hc__header--nav-link" href="#" title="Careers">Careers</a>
                        </div>
                        <div className="hc__header--nav-item">
                            <a className="hc__header--nav-link" href="#" title="Support">Support</a>
                        </div>
                        <div className="hc__header--nav-item hc__header--phone">
                            <a className="hc__header--nav-link" href="tel:+(844) 434-672">
                                <span className="hc-icon--phone hc-icon--phone-dims" />
                                <span className="hc__header--nav-text">+(844) 434-672</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;
import "./style.scss"

const Footer = () => {
    return (
        <footer className="hc__footer">
            <div className="hc__footer--box">
                <div className="hc__footer--menu">
                    <div className="hc__footer--menu-box">
                        <div className="hc__footer--menu-title">Helpful Links</div>
                        <div className="hc__footer--menu-list">
                            <div className="hc__footer--menu-item">
                                <a className="hc__footer--menu-link" href="#" title="Buyer’s Guides">Buyer’s Guides</a>
                            </div>
                            <div className="hc__footer--menu-item">
                                <a className="hc__footer--menu-link" href="#" title="Calculators">Calculators</a>
                            </div>
                            <div className="hc__footer--menu-item">
                                <a className="hc__footer--menu-link" href="#" title="All Brands">All Brands</a>
                            </div>
                            <div className="hc__footer--menu-item">
                                <a className="hc__footer--menu-link" href="#" title="Catalg Updates">Catalg Updates</a>
                            </div>
                        </div>
                    </div>
                    <div className="hc__footer--menu-box">
                        <div className="hc__footer--menu-title">Customer Services</div>
                        <div className="hc__footer--menu-list">
                            <div className="hc__footer--menu-item">
                                <a className="hc__footer--menu-link" href="#" title="Express Delivery">Express
                                    Delivery</a>
                            </div>
                            <div className="hc__footer--menu-item">
                                <a className="hc__footer--menu-link" href="#" title="Privacy Statement">Privacy
                                    Statement</a>
                            </div>
                            <div className="hc__footer--menu-item">
                                <a className="hc__footer--menu-link" href="#" title="Terms of Use">Terms of Use</a>
                            </div>
                            <div className="hc__footer--menu-item">
                                <a className="hc__footer--menu-link" href="#" title="Pricing Policy">Pricing Policy</a>
                            </div>
                            <div className="hc__footer--menu-item">
                                <a className="hc__footer--menu-link" href="#" title="Returns and Refunds">Returns and
                                    Refunds</a>
                            </div>
                            <div className="hc__footer--menu-item">
                                <a className="hc__footer--menu-link" href="#" title="Help and FAQ">Help and FAQ</a>
                            </div>
                            <div className="hc__footer--menu-item">
                                <a className="hc__footer--menu-link" href="#" title="Return Points">Return Points</a>
                            </div>
                            <div className="hc__footer--menu-item">
                                <a className="hc__footer--menu-link" href="#" title="Returns and Orders">Returns and
                                    Orders</a>
                            </div>
                        </div>
                    </div>
                    <div className="hc__footer--menu-box">
                        <div className="hc__footer--menu-title">Support</div>
                        <div className="hc__footer--menu-list">
                            <div className="hc__footer--menu-item">
                                <a className="hc__footer--menu-link" href="#" title="Contact Us">Contact Us</a>
                            </div>
                            <div className="hc__footer--menu-item">
                                <a className="hc__footer--menu-link" href="#" title="FAQ">FAQ</a>
                            </div>
                            <div className="hc__footer--menu-item">
                                <a className="hc__footer--menu-link" href="#" title="Feedback">Feedback</a>
                            </div>
                            <div className="hc__footer--menu-item">
                                <a className="hc__footer--menu-link" href="#" title="Live Chat">Live Chat</a>
                            </div>
                            <div className="hc__footer--menu-item">
                                <a className="hc__footer--menu-link" href="#" title="My Account">My Account</a>
                            </div>
                            <div className="hc__footer--menu-item">
                                <a className="hc__footer--menu-link hc-icon--phone-footer hc-icon--phone-footer-dims hc__footer--menu-phone"
                                   href="tel:+(844) 434-672">+(844) 434-672</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hc__footer--subscribe">
                    <div className="hc__footer--subscribe-box">
                        <div className="hc__footer--subscribe-title">Subscribe to our mailing list to receive exclusive
                            offers and the latest product updates
                        </div>
                        <form className="hc__footer--subscribe-form">
                            <label className="hc__footer--subscribe-label">
                                <input className="hc__footer--subscribe-input" placeholder="Your E-mail" type="text"/>
                                <button className="hc__button__default hc__footer--subscribe-button">Subscribe</button>
                            </label>
                        </form>
                    </div>
                    <picture className="hc__footer--picture-pay">
                        <source srcSet="img/footer-pay.avif" type="image/avif"/>
                        <source srcSet="img/footer-pay.webp" type="image/webp"/>
                        <img alt="Pay" className="hc__footer--img-pay" src="img/footer-pay.png"/>
                    </picture>
                </div>
                <div className="hc__footer--coppyriter">© «Brand» 2022, All Rights Reserved</div>
            </div>
        </footer>

    )
}
export default Footer;
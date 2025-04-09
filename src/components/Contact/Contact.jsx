import React from 'react'
import './Contact.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
const Contact = () => {
    return (
        <>
            <Navbar />

            <section className="contact_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact_wrapper__content">
                                <h1>Get in touch</h1>
                                <div className="contact_info">
                                    <div className="contact_info__details">
                                        <h6>Phone:</h6>
                                        <a href="tel:+919876543210">+91 9876543210</a>
                                    </div>
                                    <div className="contact_info__details">
                                        <h6>Email:</h6>
                                        <a href="mailto:info@vrdigital.com">info@chintu.com</a>
                                    </div>
                                    <div className="contact_info__details">
                                        <h6>Address:</h6>
                                        <p>P.O. Box 283 8562 Fusce Rd. Frederick Nebraska 20620</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact_form">
                                <form>
                                    <div className="contact_form__info">
                                        <div className="contact_input">
                                            <input type="text" placeholder="Name" />
                                        </div>
                                        <div className="contact_input">
                                            <input type="email" placeholder="Email" />
                                        </div>
                                        <div className="contact_input">
                                            <input type="number" placeholder="Phone Number" />
                                        </div>
                                        <div className="contact_input">
                                            <textarea rows="4" placeholder="Message"></textarea>
                                        </div>
                                        <div className="send-btn">
                                            <button className="global_btn" type="submit">Send Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map_wrapper">
                <div className="container">
                    <div className="map_wrapper__iframe">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.163673254145!2d77.08022522207696!3d28.621041796514344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04ba6b064d0f%3A0xf609cdf712fe603e!2sJanakpuri%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1725257617395!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Location Map"
                        ></iframe>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Contact
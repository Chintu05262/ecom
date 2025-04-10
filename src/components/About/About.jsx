import React from 'react'
import './About.css'
import Header from '../Navbar/Navbar'
import About1 from '../../assets/about1.png'
import mission from '../../assets/mission.webp'


const About = () => {
    return (
        <>
            <Header />
            <section className='breadcrumb_wrapper'>
                <div className="container">
                    <div className="breadcrumb_wrapper__content">
                        <h2>About us</h2>
                    </div>
                </div>
            </section>
            <section className="about_us global_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="about_img">
                                <img src={About1} className='img-fluid' loading='lazy' alt="about_img" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6">
                            <div className="about_content">
                                <h2>About us</h2>
                                <p>Khub Chand Sawhney was born in Srinagar and grew up in both Srinagar and Haripur Hazara, a city in the North West Frontier Province of Pakistan. The Pakistan attack on 22nd October 1947 on Srinagar provoked his family’s migration to Delhi. He was 24 years old at the time. Growing up in Kashmir he had developed a basic understanding of shawl-making from his father. He followed his heart’s passion to create an emporium for the most exclusive Kashmiri shawls and craftsmanship in Delhi. With the assistance for migrants from the Government he established an emporium at 94 Main Market, Janpath New Delhi in 1950.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil temporibus saepe earum libero repellat maiores laudantium, molestias eos? Veritatis doloremque rem dolores ipsam, illo officiis? Dolor porro rerum id sit!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mission_vision global_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="mission_vision__img">
                                <img src={mission} className='img-fluid' loading='lazy' alt="mission" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mission_vision__content">
                                <h2>Our Mission</h2>
                                <p>At Saatvikei, we aim to redefine ethnic wear by offering stylish, versatile, and breathable garments that empower women with confidence and comfort. We are committed to preserving the authenticity of Indian textiles while making them wearable across all seasons. Our mission is to create ensembles that resonate with modern women—effortlessly elegant, deeply rooted in tradition, and adaptable to their dynamic lifestyles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default About
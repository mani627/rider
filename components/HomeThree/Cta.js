import React from 'react'

export default function Cta() {
  return (
     <section className="cta-banner-wrapper fw500">
        <div className="container">
            <div className="cta-banner-white-wrap">
                <div className="cta-banner style-3 text-white">
                    <div className="row">
                        <div className="col-xl-6 text-center mt-5 mt-xl-0 order-2 order-xl-1">
                            <div className="mb-5">
                                <img src="/img/the_story.png" alt="" />
                            </div>
                        </div>
                        <div className="text-center text-xl-start col-xl-6 order-1 order-xl-2">
                            <div className="cta-contents pe-lg-5">
                                <h2 className="wow fadeInUp">Elevate your ride with Rider: Where Convenience Meets Confidence!</h2>
                                <p className="wow fadeInUp" data-wow-delay=".3s">Empower your journey with Rider: Where Safety Meets Comfort, and Every Ride Feels Like a VIP Experience!</p>
                                <p className="wow fadeInUp mt-3" data-wow-delay=".3s"><b className='text-white'>Rider: Unleash the Power of Seamless Journeys – Your Way, Your Ride, Your Adventure!</b></p>
                                <a href="#" className="app-download-btn wow fadeInUp" data-wow-delay=".6s"><img src="/img/apple.png" alt="" /></a>
                                <a href="#" className="app-download-btn wow fadeInUp" data-wow-delay=".6s"><img src="/img/android.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

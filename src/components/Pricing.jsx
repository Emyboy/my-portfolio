import React from 'react';

export default () => {
    return (
        <div className="section pricing" id="section-pricing">
            <div className="content">

                <div className="titles">
                    <div className="title">Pricing</div>
                    <div className="subtitle">My Plans</div>
                </div>

                <div className="content-carousel">
                    <div className="owl-carousel owl-loaded owl-drag" data-slidesView="2" data-slidesview_mobile="1">


                        <div className="owl-stage-outer">
                            <div className="owl-stage"
                                 style={{transform: "translate3d(0px, 0px, 0px)", transition: "all 0s ease 0s", width: "593px"}}>
                                <div className="owl-item active" style={{width: "256.113px", marginRight: "40px"}}>
                                    <div className="item">
                                        <div className="pricing-item">
                                            <div className="icons"><i className="fas fa-star"></i></div>
                                            <div className="name">Basic</div>
                                            <div className="amount">
										<span className="number">
											<span className="dollar">$</span>
											<span>39</span>
											<span className="period">hour</span>
										</span>
                                            </div>
                                            <div className="feature-list">
                                                <ul>
                                                    <li>Web Development</li>
                                                    <li>Advetising</li>
                                                    <li>Game Development</li>
                                                    <li className="disable">Music Writing</li>
                                                    <li className="disable">Photography</li>
                                                </ul>
                                            </div>
                                            <a href="#" className="btn">
                                                <span
                                                    className="animated-button"><span><em>B</em><em>u</em><em>y</em><em> </em><em>N</em><em>o</em><em>w</em></span></span>
                                                <i className="icon fas fa-chevron-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item active" style={{width: "256.113px", marginRight: "40px"}}>
                                    <div className="item">
                                        <div className="pricing-item">
                                            <div className="icons"><i className="fas fa-rocket"></i></div>
                                            <div className="name">Premium</div>
                                            <div className="amount">
										<span className="number">
											<span className="dollar">$</span>
											<span>59</span>
											<span className="period">hour</span>
										</span>
                                            </div>
                                            <div className="feature-list">
                                                <ul>
                                                    <li>Web Development</li>
                                                    <li>Advetising</li>
                                                    <li>Game Development</li>
                                                    <li>Music Writing</li>
                                                    <li>Photography <strong>new</strong></li>
                                                </ul>
                                            </div>
                                            <a href="#" className="btn">
                                                <span
                                                    className="animated-button"><span><em>B</em><em>u</em><em>y</em><em> </em><em>N</em><em>o</em><em>w</em></span></span>
                                                <i className="icon fas fa-chevron-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-nav disabled">
                            <button type="button" role="presentation" className="owl-prev"><span
                                aria-label="Previous">‹</span></button>
                            <button type="button" role="presentation" className="owl-next"><span
                                aria-label="Next">›</span></button>
                        </div>
                        <div className="owl-dots disabled"></div>
                    </div>

                    <div className="navs">
                        <span className="prev fas fa-chevron-left"></span>
                        <span className="next fas fa-chevron-right"></span>
                    </div>

                </div>

            </div>
        </div>
    )
}

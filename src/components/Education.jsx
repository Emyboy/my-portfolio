import React from 'react';

export default () => {
    return (
        <div className="section resume" id="section-education">
            <div className="content">

                <div className="titles">
                    <div className="title">Education</div>
                    <div className="subtitle">Studied at</div>
                </div>

                <div className="content-carousel">
                    <div className="owl-carousel owl-loaded owl-drag" data-slidesView="2" data-slidesview_mobile="1">


                        <div className="owl-stage-outer">
                            <div className="owl-stage"
                                 style={{transform: "translate3d(0px, 0px, 0px)", transition: "all 0s ease 0s", width: "1185px"}}>
                                <div className="owl-item active" style={{width: "256.113px", marginRight: "40px"}}>
                                    <div className="item">
                                        <div className="resume-item active">
                                            <div className="date">2011-2012</div>
                                            <div className="name">Art University <br/>New York</div>
                                            <div className="single-post-text">
                                                <p>
                                                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
                                                    fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item active"  style={{width: "256.113px", marginRight: "40px"}}>
                                    <div className="item">
                                        <div className="resume-item">
                                            <div className="date">2010-2011</div>
                                            <div className="name">Programming Course <br/>Paris</div>
                                            <div className="single-post-text">
                                                <p>
                                                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
                                                    fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item active"  style={{width: "256.113px", marginRight: "40px"}}>
                                    <div className="item">
                                        <div className="resume-item">
                                            <div className="date">2009-2010</div>
                                            <div className="name">Web Design Course <br/>London</div>
                                            <div className="single-post-text">
                                                <p>
                                                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
                                                    fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item"  style={{width: "256.113px", marginRight: "40px"}}>
                                    <div className="item">
                                        <div className="resume-item">
                                            <div className="date">2012-2014</div>
                                            <div className="name">Art Course <br/>London</div>
                                            <div className="single-post-text">
                                                <p>
                                                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
                                                    fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                                                </p>
                                            </div>
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

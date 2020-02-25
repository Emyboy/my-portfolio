import React from 'react';

export default () => {
    return (
        <div className="section resume" id="section-experience">
            <div className="content">

                <div className="titles">
                    <div className="title">Experience</div>
                    <div className="subtitle">Working with</div>
                </div>

                <div className="content-carousel">
                    <div className="owl-carousel owl-loaded owl-drag" data-slidesView="2" data-slidesview_mobile="1">


                        <div className="owl-stage-outer">
                            <div className="owl-stage"
                                 style={{transform: "translate3d(0px, 0px, 0px)", transition: "all 0s ease 0s", width: "1185px"}}>
                                <div className="owl-item active" style={{width: "256.113px", marginRight: "40px"}}>
                                    <div className="item">
                                        <div className="resume-item active">
                                            <div className="date">Present</div>
                                            <div className="name">The Turin <br/>Olympics</div>
                                            <div className="single-post-text">
                                                <p>
                                                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
                                                    fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item active" style={{width: "256.113px", marginRight: "40px"}}>
                                    <div className="item">
                                        <div className="resume-item">
                                            <div className="date">2016-2018</div>
                                            <div className="name">Red <br/>Drifting</div>
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
                                            <div className="date">2014-2016</div>
                                            <div className="name">World <br/>Economy</div>
                                            <div className="single-post-text">
                                                <p>
                                                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
                                                    fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item" style={{width: "256.113px", marginRight: "40px"}}>
                                    <div className="item">
                                        <div className="resume-item">
                                            <div className="date">2012-2014</div>
                                            <div className="name">Art Director <br/>Facebook</div>
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

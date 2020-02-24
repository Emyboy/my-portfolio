import React from 'react';


export default () => {
    return (
        <header className="header">

            <div className="logo">
                <a href="#">
                    <img className="logo-img" src="images/logo.png" alt=""/>
                        <span className="logo-lnk">Ifeora<br/>Chukwuemeka</span>
                </a>
            </div>

            <a href="#" className="menu-btn"><span></span></a>

            <a href="#" className="btn download-cv-btn">
                <span
                    className="animated-button"><span><em>D</em><em>o</em><em>w</em><em>n</em><em>l</em><em>o</em><em>a</em><em>d</em><em> </em><em>C</em><em>V</em></span></span>
                <i className="icon fas fa-download"></i>
            </a>

            <div className="header-sidebar">

                <div className="top-menu">
                    <div className="top-menu-nav">
                        <div className="menu-topmenu-container">
                            <ul className="menu">
                                <li className="menu-item current-menu-item menu-item-has-children">
                                    <a href="#section-started">
                                        <span className="animated-button"><span><em>H</em><em>o</em><em>m</em><em>e</em></span></span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li className="menu-item current-menu-item"><a href="index.html">Home 1</a></li>
                                        <li className="menu-item"><a href="index-2.html">Home 2</a></li>
                                        <li className="menu-item"><a href="index-3.html">Home 3</a></li>
                                        <li className="menu-item"><a href="index-slider.html">Home Slider</a></li>
                                        <li className="menu-item"><a href="index-video.html">Home Video</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <a href="#section-about">
                                        <span className="animated-button"><span><em>A</em><em>b</em><em>o</em><em>u</em><em>t</em></span></span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="#section-experience">
                                        <span className="animated-button"><span><em>R</em><em>e</em><em>s</em><em>u</em><em>m</em><em>e</em></span></span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="#section-portfolio">
                                        <span className="animated-button"><span><em>P</em><em>o</em><em>r</em><em>t</em><em>f</em><em>o</em><em>l</em><em>i</em><em>o</em></span></span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="#section-contacts">
                                        <span className="animated-button"><span><em>C</em><em>o</em><em>n</em><em>t</em><em>a</em><em>c</em><em>t</em></span></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </header>
    )
}

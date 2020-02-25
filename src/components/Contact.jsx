import React from 'react';

export default () => {
    return (
        <div className="section contacts" id="section-contacts">
            <div className="content">

                <div className="titles">
                    <div className="title">Contact</div>
                    <div className="subtitle">Let's talk</div>
                </div>

                <div className="contact-form">
                    <form id="cform" method="post" noValidate="novalidate">
                        <div className="group-val">
                            <div className="label">Full name <strong>*</strong></div>
                            <input type="text" name="name" placeholder="ej.: Genoveva Lian Hullt"/>
                        </div>
                        <div className="group-val">
                            <div className="label">Email address <strong>*</strong></div>
                            <input type="email" name="email" placeholder="example@domain.com"/>
                        </div>
                        <div className="group-val">
                            <div className="label">Message <strong>*</strong></div>
                            <textarea name="message" placeholder="To Write"></textarea>
                        </div>
                        <div className="group-bts">
                            <button type="submit" className="btn">
                                <span
                                    className="animated-button"><span><em>S</em><em>e</em><em>n</em><em>d</em><em> </em><em>M</em><em>e</em><em>s</em><em>s</em><em>a</em><em>g</em><em>e</em></span></span>
                                <i className="icon fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </form>
                    <div className="alert-success">
                        <p>Thanks, your message is sent successfully.</p>
                    </div>
                </div>

                <div className="contact-info">
                    <div className="name">Ifeora Chukwuemeka</div>
                    <div className="subname">Consultant &amp; Mentor</div>
                    <div className="info-list">
                        <ul>
                            <li><strong>Age:</strong> 24</li>
                            <li><strong>Residence:</strong> USA</li>
                            <li><strong>Freelance:</strong> Available</li>
                            <li><strong>Address:</strong> San Francisco</li>
                            <li><strong>Phone:</strong> +1 256 254 84 56</li>
                            <li><strong>E-mail:</strong> alejandroa@gmail.com</li>
                        </ul>
                    </div>
                    <div className="author">Joe Wilson</div>
                </div>

                <div className="clear"></div>
            </div>
        </div>
    )
}

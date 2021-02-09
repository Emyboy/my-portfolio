import React from 'react';

export default () => {
    return (
        <div className="section about" id="section-about">
            <div className="content">

                <div className="titles">
                    <div className="title">About Me</div>
                    <div className="subtitle">My story</div>
                </div>

                <div className="cols">
                    {/*<div className="col">*/}
                    {/*    <div className="single-post-text">*/}
                    {/*        <p>*/}
                    {/*            Few years ago I started out as a 3D artist creating stunning visual effect and motion graphics*/}
                    {/*            for Films and commercials, down the line I fell in love with software in general and always wondered how they worked.*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="col">*/}
                    {/*    <div className="single-post-text">*/}
                    {/*        <p>*/}
                    {/*            After two years of working in the wold of visual effects I was introduced to python by a friend after I asked him*/}
                    {/*            what will be the language of choice when it came to writing desktop applications.*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="col col-full">
                        <div className="single-post-text">
                            <p>
                                Hi there, I am a self-taught as you will see I have hands-on experience building scalable, dynamic, and
                                secure web applications. My strengths are building beautiful and interactive user interfaces and, amazing user experience.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="info-list">
                    <ul>
                        <li><strong>Age:</strong> 24</li>
                        <li><strong>Residence:</strong> NG</li>
                        <li><strong>Freelance:</strong> Available</li>
                        <li><strong>Address:</strong> Bayo Oyewale Street</li>
                        <li><strong>Phone:</strong> +234 8081008437</li>
                        <li><strong>E-mail:</strong> chukwuemekaifeora@gmail.com</li>
                    </ul>
                </div>

                <div className="clear"></div>
            </div>
        </div>
    )
}

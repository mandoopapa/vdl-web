import React from "react";

function Content() {
    return (
        <div>
            <div className="container content">
                <div className="row">
                    <div className="col-sm-3 talk">
                        <h1>Virtual Dynamics Labs</h1>
                        <br />
                        <h6 className="bold-four">
                        We are responsible for the dynamism of the cryptocurrency market. We constantly research, investigate and analyse to share insights into the cryptocurrency market.
                    </h6>
                        <br />
                    </div>
                    <div className="col-sm-9 showcase-img">
                    </div>
                </div>
            </div>

            <section class="features-icons bg-light text-center det-ails">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-screen-desktop m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>Presentation</h5>
                                <p class="lead mb-0">We hold regular Presentation every Thursday at Korea University</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-layers m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>Crypto Research</h5>
                                <p class="lead mb-0">Our talented team members publish research papers in their areas of expertise</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-chart m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>Portfolio</h5>
                                <p class="lead mb-0">We do crypto investing ourselves. We want to support and invest in promising and talented projects and contribute to the overall development of the industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Content;
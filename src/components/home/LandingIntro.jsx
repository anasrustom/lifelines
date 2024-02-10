import React from "react";

const LandingIntro = () => {
  return (
    <section id="section-intro" className="no-top no-bottom">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <i className="bg-color-2 i-boxed icon_shield"></i>
              <div className="text">
                <h4 className="">Security</h4>
                <p>
                We take pride in securing our journalist's identity and place of work by keeping information anonymous by default whilst still maintaining the collection of factually accurate information
                </p>
              </div>
              <i className="wm icon_shield"></i>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <i className="bg-color-2 i-boxed icon_cloud-upload_alt"></i>
              <div className="text">
                <h4 className="">Freedom</h4>
                <p>
                We do not limit any of our journalists or news outlets in anyway and do not require them to have a certain viewpoint.
                </p>
              </div>
              <i className="wm icon_cloud-upload_alt"></i>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <i className="bg-color-2 i-boxed icon_question">
                
              </i>
              <div className="text">
                <h4 className="">Facts</h4>
                <p>We maintain the presence of factually correct information via our strict criterea for misinformation  with the help of fellow users of the app that flag incorrect information for us to review.
                </p>
              </div>
              <i className="wm icon_question"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingIntro;

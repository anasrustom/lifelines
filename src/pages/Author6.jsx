import React, { useState, useEffect } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import { Link } from "react-router-dom";
import author1 from "../images/author6.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons';

const Author = () => {
  const [follow, setFollow] = useState(false);
  const [followers, setFollowers] = useState(1705);
  function followUser() {
    setFollow((prev) => !prev);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrapper">
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>

          <section
            id="profile_banner"
            aria-label="section"
            className="text-light"
            data-bgimage="url(images/author_banner.jpg) top"
            style={{ background: `url(${AuthorBanner}) top` }}
          ></section>

          <section aria-label="section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="d_profile de-flex">
                    <div className="de-flex-col">
                      <div className="profile_avatar">
                        <img src={author1} alt="" />

                        <i className="fa fa-check"></i>
                        <div className="profile_name">
                          <h4>
                          Carlson Wilson
                            <span className="profile_username">
                              @carlsonwilsonbinsonjing
                            </span>
                            <span className="TIP">
                            <FontAwesomeIcon icon={faCheckToSlot} className="checkslot"/>
                              Total Integrity Points: <span style={{color: 'gold'}}>597</span>
                            </span>
                          </h4>
                        </div>
                        
                      </div>
                      
                    </div>
                    <div className="profile_follow de-flex">
                      <div className="de-flex-col">
                        <div className="profile_follower">
                          {follow ? (
                            <>{followers + 1} </>
                          ) : (
                            <> {followers} </>
                          )}
                          followers
                        </div>
                        <Link to="#" className="btn-main" onClick={followUser}>
                          {follow ? <>Following</> : <>Follow</>}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <h5 className="boopboop">Carlson Wilson (@carlsonwilsonbinsonjing), with a certification in Journalism from a renowned university, is known for their in-depth analysis and credible reporting in the field.</h5>
              </div>
            </div>
          </section>
        </div>
      
    </div>
  );
};

export default Author;

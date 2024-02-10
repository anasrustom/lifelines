import React, { useState, useEffect } from "react";

import AuthorBanner from "../images/author_banner.jpg";
import { Link } from "react-router-dom";
import author1 from "../images/author1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons';

const Author = () => {
  const [follow, setFollow] = useState(false);
  const [followers, setFollowers] = useState(1240);
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
                            Marita Moloney
                            <span className="profile_username">
                              @mm23041843
                            </span>
                            <span className="TIP">
                            <FontAwesomeIcon icon={faCheckToSlot} className="checkslot"/>
                              Total Integrity Points: <span style={{color: 'gold'}}>560</span>
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
                <h5 className="boopboop">A distinguished journalist with a strong background in media and communication. She is known for her in-depth reporting and analytical skills, which are underpinned by her certifications in journalism with al Jazeera and possibly other related fields such as digital media or broadcasting. Her work reflects a commitment to accuracy and integrity, showcasing her expertise across various platforms and subjects.</h5>
              </div>
            </div>
          </section>
        </div>
      
    </div>
  );
};

export default Author;

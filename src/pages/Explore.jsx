import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret, faGlobe } from '@fortawesome/free-solid-svg-icons';
import SubHeader from "../images/bb.jpg";
import ExploreItems from "../components/explore/ExploreItems";
import ExploreItems2 from "../components/explore/ExploreItems2";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({

  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false, 
  disableMutationObserver: false, 
  debounceDelay: 50, 
  throttleDelay: 99,
  

  
  offset: 120,
  delay: 50, 
  duration: 800, 
  easing: 'ease',
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 

});

const Explore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
const [isPublic, setIsPublic] = useState(false);

const toggleMode = () => {
  setIsPublic(!isPublic);
};

  return (
    <div id="wrapper" style={{ backgroundColor: isPublic ? 'black' : 'white' }}>
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="subheader"
          className="text-light"
          style={{ background: `url("${SubHeader}") top`, height: "250px"}}
        >

        </section>

        <div className="toggle-container">
          <div className="toggle-label">
            {isPublic ? <FontAwesomeIcon icon={faUserSecret} className='faicon'/> : <FontAwesomeIcon icon={faGlobe} className='faicon'/>}
            {isPublic ? ' Anonymous Articles' : ' Public Articles'}
          </div>
          <div className="toggle-button" onClick={toggleMode}>
            <div className={`slider ${isPublic ? 'slide' : ''}`}></div>
          </div>
        </div>

        <div className="date-container" style={{ textAlign: 'right' }}>
          <p>Saturday, 10 February</p>
        </div>
      
        <section aria-label="section">
          <div className="container">
            <div className="row">
              {isPublic ? <ExploreItems /> : <ExploreItems2 />}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Explore;

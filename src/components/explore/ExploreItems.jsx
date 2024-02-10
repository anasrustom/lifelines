import { Link } from "react-router-dom";
import profilePic from '../../images/anonymous.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckToSlot, faX } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';

const ExploreItems = () => {

  return (
    <>

      <div className="col-md-6" data-aos="fade-up">
        <div className="nft__item">
          <div className="author_list_pp">
              <img className="lazy" src={profilePic} alt="Profile" />
              <i className="fa fa-check"></i>
          </div>

          <div className="nft__item_wrap">
            <Link to={`/`}>
              <img
                src={img1}
                className="lazy nft__item_preview"
                alt=""
              />
            </Link>
          </div>
          <div className="nft__item_info">
            <Link to="/">
              <h4>Israel-Gaza war: Netanyahu orders military to plan evacuations from Rafah</h4>
            </Link>
            <div className="nft__item_price">Rafaah, Palestine</div>
            <div className="nft__item_like">
              <FontAwesomeIcon icon={faCheckToSlot} className="checkslot"/>
              <span>63</span>
            </div>
            <div className="nft__item_lik">
              <i className="fa fa-eye"></i>
              <span>2049</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6" data-aos="fade-up">
        <div className="nft__item">
          <div className="author_list_pp">
              <img className="lazy" src={profilePic} alt="Profile" />
              <i className="fa fa-check"></i>
          </div>

          <div className="nft__item_wrap">
            <Link to={`/`}>
              <img
                src={img2}
                className="lazy nft__item_preview"
                alt=""
              />
            </Link>
          </div>
          <div className="nft__item_info">
            <Link to="/">
              <h4>
Rival parties each claim edge in Pakistan election</h4>
            </Link>
            <div className="nft__item_price">Pakistan</div>
            <div className="nft__item_like">
              <FontAwesomeIcon icon={faCheckToSlot} className="checkslot"/>
              <span>10</span>
            </div>
            <div className="nft__item_lik">
              <i className="fa fa-eye"></i>
              <span>547</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6" data-aos="fade-up">
        <div className="nft__item">
          <div className="author_list_pp">
              <img className="lazy" src={profilePic} alt="Profile" />
              <i className="fa fa-check"></i>
          </div>

          <div className="nft__item_wrap">
            <Link to={`/`}>
              <img
                src={img3}
                className="lazy nft__item_preview"
                alt=""
              />
            </Link>
          </div>
          <div className="nft__item_info">
            <Link to="/">
              <h4>Tucker Carlson interview: Fact-checking Putin's 'nonsense' history</h4>
            </Link>
            <div className="nft__item_price">Asia</div>
            <div className="nft__item_like">
              <FontAwesomeIcon icon={faCheckToSlot} className="checkslot"/>
              <span>31</span>
            </div>
            <div className="nft__item_lik">
              <i className="fa fa-eye"></i>
              <span>1191</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6" data-aos="fade-up">
        <div className="nft__item">
          <div className="author_list_pp">
              <img className="lazy" src={profilePic} alt="Profile" />
              <i className="fa fa-check"></i>
          </div>

          <div className="nft__item_wrap">
            <Link to={`/`}>
              <img
                src={img4}
                className="lazy nft__item_preview"
                alt=""
              />
            </Link>
          </div>
          <div className="nft__item_info">
            <Link to="/">
              <h4>Three detainees appear in a video posted online by an IDF soldier
Israeli soldier videos from Gaza could breach international law, experts say</h4>
            </Link>
            <div className="nft__item_price">Gaza, Palestine</div>
            <div className="nft__item_lik">
              <FontAwesomeIcon icon={faX} className="xicon"/>
              <span>1</span>
            </div>
            <div className="nft__item_like">
              <FontAwesomeIcon icon={faCheckToSlot} className="checkslot"/>
              <span>196</span>
            </div>
            <div className="nft__item_lik">
              <i className="fa fa-eye"></i>
              <span>3316</span>
            </div>
          </div>
        </div>
      </div>




      <div className="col-md-12 text-center">

          <Link
            to=""
            id="loadmore"
            className="btn-main lead"
            onClick={() => alert("This feature has not been implemented yet")}
          >
            Load more
          </Link>
        
      </div>
    </>

  );
}

export default ExploreItems;
import { Link } from "react-router-dom";
import author1 from '../../images/author1.jpg';
import author2 from '../../images/author2.png';
import author3 from '../../images/author3.jpg';
import author4 from '../../images/author4.jpeg';
import author5 from '../../images/author5.jpg';
import author6 from '../../images/author6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons';
import img7 from '../../images/img7.png';
import img8 from '../../images/img8.png';
import img9 from '../../images/img9.jpg';
import img10 from '../../images/img10.jpg';
import img11 from '../../images/img11.png';
import img12 from '../../images/img12.png';


const ExploreItems = () => {

  return (
    <>

      <div className="col-md-6" data-aos="fade-up">
        <div className="nft__item">
          <div className="author_list_pp">
            <Link to={'/author1'}>
              <img className="lazy" src={author1} alt="Profile" />
              <i className="fa fa-check"></i>
            </Link>
          </div>

          <div className="nft__item_wrap">
            <Link to={`/`}>
              <img
                src={img7}
                className="lazy nft__item_preview"
                alt=""
              />
            </Link>
          </div>
          <div className="nft__item_info">
            <Link to="/item-details">
              <h4>Democrats rally around Biden as report raises age concerns</h4>
            </Link>
            <div className="nft__item_price">USA & Canada</div>
            <div className="nft__item_like">
              <FontAwesomeIcon icon={faCheckToSlot} className="checkslot"/>
              <span>11</span>
            </div>
            <div className="nft__item_lik">
              <i className="fa fa-eye"></i>
              <span>843</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6" data-aos="fade-up">
        <div className="nft__item">
          <div className="author_list_pp">
            <Link to={`/author2`}>
              <img className="lazy" src={author2} alt="Profile" />
              <i className="fa fa-check"></i>
            </Link>
          </div>

          <div className="nft__item_wrap">
            <Link to={`/`}>
              <img
                src={img8}
                className="lazy nft__item_preview"
                alt=""
              />
            </Link>
          </div>
          <div className="nft__item_info">
            <Link to="/item-details">
              <h4>Prince Harry settles phone-hacking claim with Mirror group</h4>
            </Link>
            <div className="nft__item_price">United Kingdom</div>
            <div className="nft__item_like">
              <FontAwesomeIcon icon={faCheckToSlot} className="checkslot"/>
              <span>31</span>
            </div>
            <div className="nft__item_lik">
              <i className="fa fa-eye"></i>
              <span>1132</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6" data-aos="fade-up">
        <div className="nft__item">
          <div className="author_list_pp">
            <Link to={`/author3`}>
              <img className="lazy" src={author3} alt="Profile" />
              <i className="fa fa-check"></i>
            </Link>
          </div>

          <div className="nft__item_wrap">
            <Link to={`/`}>
              <img
                src={img9}
                className="lazy nft__item_preview"
                alt=""
              />
            </Link>
          </div>
          <div className="nft__item_info">
            <Link to="/item-details">
              <h4>The Year of the Dragon is upon us and there are some things you shouldn't do</h4>
            </Link>
            <div className="nft__item_price">China</div>
            <div className="nft__item_like">
              <FontAwesomeIcon icon={faCheckToSlot} className="checkslot"/>
              <span>13</span>
            </div>
            <div className="nft__item_lik">
              <i className="fa fa-eye"></i>
              <span>449</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6" data-aos="fade-up">
        <div className="nft__item">
          <div className="author_list_pp">
            <Link to={`/author4`}>
              <img className="lazy" src={author4} alt="Profile" />
              <i className="fa fa-check"></i>
            </Link>
          </div>

          <div className="nft__item_wrap">
            <Link to={`/`}>
              <img
                src={img10}
                className="lazy nft__item_preview"
                alt=""
              />
            </Link>
          </div>
          <div className="nft__item_info">
            <Link to="/item-details">
              <h4>FCC votes to ban scam robocalls that use AI-generated voices</h4>
            </Link>
            <div className="nft__item_price">USA</div>
            <div className="nft__item_like">
              <FontAwesomeIcon icon={faCheckToSlot} className="checkslot"/>
              <span>78</span>
            </div>
            <div className="nft__item_lik">
              <i className="fa fa-eye"></i>
              <span>1703</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6" data-aos="fade-up">
        <div className="nft__item">
          <div className="author_list_pp">
            <Link to={`/author5`}>
              <img className="lazy" src={author5} alt="Profile" />
              <i className="fa fa-check"></i>
            </Link>
          </div>

          <div className="nft__item_wrap">
            <Link to={`/`}>
              <img
                src={img11}
                className="lazy nft__item_preview"
                alt=""
              />
            </Link>
          </div>
          <div className="nft__item_info">
            <Link to="/item-details">
              <h4>Microsoft says AI is getting deployed 'at scale'</h4>
            </Link>
            <div className="nft__item_price">Europe</div>
            <div className="nft__item_like">
              <FontAwesomeIcon icon={faCheckToSlot} className="checkslot"/>
              <span>129</span>
            </div>
            <div className="nft__item_lik">
              <i className="fa fa-eye"></i>
              <span>5325</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6" data-aos="fade-up">
        <div className="nft__item">
          <div className="author_list_pp">
            <Link to={`/author6`}>
              <img className="lazy" src={author6} alt="Profile" />
              <i className="fa fa-check"></i>
            </Link>
          </div>

          <div className="nft__item_wrap">
            <Link to={`/`}>
              <img
                src={img12}
                className="lazy nft__item_preview"
                alt=""
              />
            </Link>
          </div>
          <div className="nft__item_info">
            <Link to="/item-details">
              <h4>Ukraine's missing children tracked down in Russia by digital sleuths</h4>
            </Link>
            <div className="nft__item_price">Europe</div>
            <div className="nft__item_like">
              <FontAwesomeIcon icon={faCheckToSlot} className="checkslot"/>
              <span>67</span>
            </div>
            <div className="nft__item_lik">
              <i className="fa fa-eye"></i>
              <span>2317</span>
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
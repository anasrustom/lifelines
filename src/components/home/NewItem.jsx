import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import profilePic from '../../images/anasnft.png';

const NewItem = ({ item }) => {
  return (
    <div className="">
      <div className="nft__item">
        <div className="author_list_pp">
          <Link
            to={`/`}

          >
            <img className="lazy" src={profilePic} alt="Profile" />
            <i className="fa fa-check"></i>
          </Link>
        </div>

        <div className="nft__item_wrap">
          <div className="nft__item_extra">
            <div className="nft__item_buttons">
              <button>Buy Now</button>
              <div className="nft__item_share">
                <h4>Share</h4>
                <a href="#" target="_blank" rel="noreferrer">
                  <i className="fa fa-facebook fa-lg"></i>
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <i className="fa fa-twitter fa-lg"></i>
                </a>
                <a href="#">
                  <i className="fa fa-envelope fa-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <Link to={`/`}>
            <img
              src=""
              className="lazy nft__item_preview"
              alt=""
            />
          </Link>
        </div>
        <div className="nft__item_info">
          <Link to="/item-details">
            <h4>Pinky Ocean</h4>
          </Link>
          <div className="nft__item_price">Doha, Qatar</div>
          <div className="nft__item_like">
            <i className="fa fa-heart"></i>
            <span>60</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItem;

import React from "react";
import NewItemsCarousel from './NewItemsCarousel'

const NewItems = () => {
  return (
    <section id="section-items" className="no-bottom">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <NewItemsCarousel />
        </div>
      </div>
    </section>
  );
};

export default NewItems;

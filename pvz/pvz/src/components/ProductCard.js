import React from 'react';

const ProductCards = (props) => {
  const ProductCard = (
    <div className="container">
      {props.product.map((phone, index) =>
        <div className="col-sm-6 col-md-4" key={phone.title}>
          <div className="thumbnail text-center">
            <img src={phone.pic} alt=""/>
            <h3>{phone.title}</h3>
            <h4>Ringtone: {phone.ringtone}</h4>
            <h3>{phone.price}&euro;</h3>
            <p>
              <button className="btn btn-success" href="index.html">
                Buy now
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
  return (
    <div>
      {ProductCard}
    </div>
  )
};
export default ProductCards
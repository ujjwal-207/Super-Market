import React, { useState } from "react";

const Addproduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    old_price: "",
  });
  const changeHandler = (e) => {
    //... productDetails create new object that copies all the existing properties form the productDetails state vairable(yesle chai productDetails ma bhako data ali accidentally overwritten huna bata prevent garxa)
    //[e.target.name]:e.target.value yesle xai dynamicall creates new property name based on the value on of name attribute of the element
    //e.target.value  The value of the new property is set to the value of the element that triggered the event. This value typically represents the user's input in a form field or other interactive element
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <div>
        <p>Prodct Title</p>
        <input
          value={productDetails.name}
          type="text"
          name="name"
          placeholder="Product Title"
          onChange={changeHandler}
        />
      </div>
      <div>
        <p>Price</p>
        <input
          type="text"
          onChange={changeHandler}
          placeholder="Mrp price"
          name="old_price"
          value={productDetails.old_price}
        />
      </div>
      <div>
        <p>Offer Price</p>
        <input
          type="text"
          onChange={changeHandler}
          placeholder="Discounted Price"
          name="new_price"
          value={productDetails.new_price}
        />
      </div>
    </div>
  );
};

export default Addproduct;

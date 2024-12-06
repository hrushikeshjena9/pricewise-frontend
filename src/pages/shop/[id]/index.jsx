import React, { useState } from "react";
import ProductImage from "../../../../components/ShopPersonal/productDetails/productImage";
import ProductTabs from "../../../../components/ShopPersonal/productDetails/ProductTabs";
import WhySelectuUs from "../../../../components/ShopPersonal/productDetails/WhySelectuUs";
import YouMayLike from "../../../../components/ShopPersonal/productDetails/YouMayLike";
import ProductDetailsFaq from "../../../../components/ShopPersonal/productDetails/ProductDetailsFaq";
import { axiosGet } from "../../../../utils/ApiCalls";
import LoginModal from "../../../../components/common/LoginModal";
import Image from "next/image";

function Index({ data }) {
  
 
    const [quantity, setQuantity] = useState(1);
  
    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };


    const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <WhySelectuUs data={data.commonData} />
      <ProductImage
        data={data.productDetails}
        paymentTypesImage={data.commonData.payment_image}
      />
      <ProductTabs data={data.productDetails} rating={data.ratingCountData} totalRatings={data.totalRatings} reviews={data.reviews}/>
      <YouMayLike data={data.featuredProduct}  />
      <ProductDetailsFaq />
    </>
  );
}

export default Index;

export async function getServerSideProps(context) {
  const slug = context.params.id;
  try {
    const data = await axiosGet(`product-details/${slug}`);
    // const data2 = await PostData("get-energy-deals");

    return {
      props: { data },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { data: {}, data2: {} },
    };
  }
}

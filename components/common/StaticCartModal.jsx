import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { Rating } from "react-simple-star-rating";

const StaticCartModal = ({ sync, setSync, message, setMessage }) => {
  const router = useRouter();
  const closeModalRef = useRef(null);
  const cartItems = {
    success: true,
    total_amount: 6108,
    cart_products: [
      {
        id: 17,
        user_id: 1,
        product_id: 1,
        qty: 10,
        amount: "5090.00",
        product_details: {
          pid: 1,
          title: "LCD Ultra Hd",
          slug: "lcd-ultra-hd",
          sku: "545482",
          size: "189 cm (75 inches)",
          model: "LC7545",
          sell_price: "509",
          actual_price: "905",
          ratings: "3",
          image:
            "https://dev.maastrixdemo.com/pricewise/storage/images/shops/productI_1724327319_0.jpg",
        },
      },
      {
        id: 18,
        user_id: 1,
        product_id: 9,
        qty: 2,
        amount: "1018.00",
        product_details: {
          pid: 9,
          title: "LCD Ultra Hd",
          slug: "lcd-ultra-hd-2",
          sku: "545482lkj",
          size: "189 cm (75 inches)",
          model: "LC7545",
          sell_price: "509",
          actual_price: "905",
          ratings: null,
          image:
            "https://dev.maastrixdemo.com/pricewise/storage/images/shops/productI_1724327390_0.png",
        },
      },
    ],
    cartCount: 2,
    message: "Cart viewed successfully.",
  };
  const goToCart = async () => {
    closeModalRef.current.click();
    router.push("/cart");
  };
  return (
    <div
      className="modal fade"
      id="Staticshoppingcart"
      tabIndex={-1}
      aria-labelledby="shoppingcartModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            {message && (
              <p>
                <i class="bx bx-check"></i> {message}
              </p>
            )}
            <button
              type="button"
              className="btn-close cls-btn-cus"
              data-bs-dismiss="modal"
              aria-label="Close"
              ref={closeModalRef}
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="pr-not-suc">
              <i class="fal fa-shield-check"></i>
              <p>Het artikel is succesvol toegevoegd aan je winkelwagen</p>
            </div>
            <div className="pr-shop-main">
              <Image
                width={150}
                height={150}
                alt="aa"
                src="/images/products/details2.jpg"
                className="img-fluid"
              />
              <div className="shop--main-con">
                <p className="mb-0">LCD Ultra Hd</p>
                <div className="shop-per">
                  <span>22%</span>
                  <div>
                    Meesteal <span>€ 1199</span>{" "}
                  </div>
                </div>
                <p className="text-danger">€ 929.-</p>
              </div>
            </div>
            <div className="pro-cart-list">
              {cartItems?.cart_products?.length > 0 ? (
                cartItems?.cart_products?.map((item, i) => (
                  <div key={i} className="card mb-3">
                    <div className="card-body">
                      <div className="row pro-bx-cart ">
                        <div className="col-lg-2 pro-img-sm">
                          <Image
                            src={item.product_details.image}
                            width={200}
                            height={200}
                            alt="products"
                          />
                        </div>
                        <div className="col-lg-6">
                          <span className="float-end">Quantity-{item.qty}</span>
                          <h6>{item.product_details.title}</h6>
                          <p className="mb-0">
                            incl. VAT and free shipping above €50
                          </p>
                          <h4 className="pro-price mb-0">
                            € {item.product_details.sell_price}{" "}
                            <span>€ {item.product_details.actual_price}</span>
                          </h4>
                          <Rating
                            initialValue={item.product_details.ratings}
                            size={20}
                            readonly
                            allowFraction
                            fillColor="gold"
                            emptyColor="gray"
                          />
                        </div>
                        <div className="col-lg-4">
                          <button className="btn-buy-pro btn">
                            <i class="bx bx-cart-alt"></i> Winkelwagen
                          </button>
                          <button
                            className="delete-icon btn"
                            // onClick={() => confirmRemoveProduct(item.id)}
                          >
                            <i class="bx bx-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h6 className="text-center">No items added</h6>
              )}
            </div>
          </div>
          <hr />
          <div className="cart-modal-footer-pop">
            <button type="button" className="btn btn-add-pro">
              Verder winkelen
            </button>
            <button
              onClick={goToCart}
              type="button"
              className="btn btn-buy-pro"
            >
              Claim je deal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticCartModal;

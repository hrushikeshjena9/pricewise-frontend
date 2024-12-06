import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactShowMoreText from "react-show-more-text";
import { Rating } from "react-simple-star-rating";
import LoginModal from "../../common/LoginModal";
import { PostData } from "../../../utils/ApiCalls";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import CartModal from "../../common/CartModal";

function ProductImage({ data, paymentTypesImage,  }) {
  const [isClient, setIsClient] = useState(false);
  const [sync, setSync] = useState(false);
  const [message, setMessage] = useState();
  const { data: session } = useSession();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  const addToCart = async (userId = null, token = null) => {
    if (!session) return;
    if (!userId || !token) {
      const data = JSON.parse(localStorage.getItem("userData"));
      token = localStorage.getItem("token");
      userId = data ? data.id : "";
    }
    try {
      const res = await PostData(
        "add-to-cart",
        { user_id: userId, product_id: data.id },
        "",
        `Bearer ${token}`
      );
      toast.success(res.message);
      setSync(!sync);
      setMessage(res.message);
      setTimeout(() => {
        setMessage();
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error);
    }
  };

  return (
    <>
      <LoginModal cb={addToCart} />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="carousel-wrapper sin-pro-gary">
              <Carousel
                showThumbs={true}
                thumbWidth={80}
                swipeable={true}
                renderThumbs={() =>
                  data.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image.image}
                      alt={image.alt}
                      width={120}
                      height={120}
                    />
                  ))
                }
              >
                {data.images.map((image, index) => (
                  <div key={index}>
                    <Image
                      src={image.image}
                      alt={image.alt}
                      width={493}
                      height={481}
                    />
                  </div>
                ))}
              </Carousel>
              <button className="dec-wish-list">
                <i class="far fa-heart"></i>
              </button>
              <div className="form-check compair-pro-sing">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="procompair"
                  defaultValue="true"
                />
                <label className="form-check-label" htmlFor="procompair">
                  Vergelijk
                </label>
              </div>
              {data.available_status == 1 && (
                <i class="bx bxs-circle bx-flashing dot-green blink-dot"></i>
              )}
              {data.available_status == 2 && (
                <i class="bx bxs-circle bx-flashing dot-orange blink-dot"></i>
              )}
              {data.available_status == 3 && (
                <i class="bx bxs-circle bx-flashing dot-gold blink-dot"></i>
              )}
              {data.available_status == 0 && (
                <i class="bx bxs-circle bx-flashing dot-grey blink-dot"></i>
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-rth-wrp">
              <h2>
                {data.title}({data.color.title})
              </h2>
              <p className="sku-id">SKU: {data.sku}</p>
              <ul className="unstyled">
                <li className="stock-detail-sing">
                  {data.available_status == 1 && "Op voorraad"}
                  {data.available_status == 2 && "Beperkt voorraad"}
                  {data.available_status == 3 && "Op aanvraag"}
                  {data.available_status == 0 && "Uitverkocht"}
                </li>
                <li className="tags-deal-sing">Hot item</li>
              </ul>
              <div className="cus-star-icon">
                <ul>
                  <Rating
                    initialValue={data.rating}
                    size={20}
                    readonly
                    allowFraction
                    fillColor="gold"
                    emptyColor="gray"
                  />
                  <li>
                    <span className="ms-1">({data.reviews} Reviews)</span>
                  </li>
                </ul>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="price-bx d-flex">
                    <h3 className="price-main">
                      €{data.sell_price} <span>€{data.actual_price}</span>
                    </h3>
                    <a href="#" className="price-info-sing">
                      <i className="fas green-cyan fa-info-circle ms-2"></i>
                    </a>
                  </div>
                  <p className="sing-vat-info">
                    incl. VAT and free shipping above €50
                  </p>
                  <div className="payment-secure">
                    <h5>100% Secure Payment</h5>
                    <Image
                      src={paymentTypesImage}
                      alt="payment"
                      width={333}
                      height={29}
                    />
                  </div>
                  <div className="share-social">
                    <h6>Share It</h6>
                    <ul>
                      <li>
                        <a href="#" className="facebook">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="whatsapp">
                          <i class="fab fa-whatsapp"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="linkedin">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="shareicon">
                          <i class="fas fa-share-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="pro-qty-select">
                    <select className="form-select  mb-2">
                      <option>Product</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <select className="form-select">
                      <option>Opties</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <div className="offer-prioud">
                    <ul>
                      <li>
                        <p className="mb-0">
                          <Image
                            src="/images/sale.png"
                            width={32}
                            height={32}
                            alt="sale"
                          />{" "}
                          Stapel korting
                          <a href="#">
                            <i className="fas green-cyan fa-info-circle ms-2"></i>
                          </a>
                        </p>
                      </li>
                      <li>
                        <input className="form-control w-100" type="number" />
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="delivary-date-show">
                      <p>
                        Verwachte bezorgdatum: <span>DD-MM</span>{" "}
                        <a href="#">
                          <i className="fas green-cyan fa-info-circle ms-2"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="ad-cart-wrp-details">
                    <ul>
                      <li>
                        <button
                          data-bs-toggle="modal"
                          data-bs-target={
                            session ? "#shoppingcart" : "#loginModal"
                          }
                          onClick={addToCart}
                          class="pro-add btn"
                        >
                          <i class="fas fa-cart-arrow-down"></i> Add to Cart
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="about-pro-bx">
                <h5>About this item</h5>
                <ReactShowMoreText
                  /* Default options */
                  lines={3}
                  more="Show more"
                  less="Show less"
                  className="content-css"
                  anchorClass="show-more-less-clickable"
                  // onClick={this.executeOnClick}
                  expanded={false}
                  width={550}
                  truncatedEndingComponent={"... "}
                >
                  {data.about}
                </ReactShowMoreText>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <CartModal sync={sync} setSync={setSync} setMessage={setMessage} message={message} />
      </div>
    </>
  );
}

export default ProductImage;

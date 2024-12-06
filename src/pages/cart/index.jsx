import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import StaticCartModal from "../../../components/common/StaticCartModal";
import LoginModal from "../../../components/common/LoginModal";
import { useCartStore } from "../../../providers/cartProvider";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "sonner";
import { PostData } from "../../../utils/ApiCalls";

const Index = () => {
  const { data: session, error } = useSession();
  const [cartItems, setCartItems] = useState();
  console.log(cartItems);

  const cartState = useCartStore((state) => state);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = JSON.parse(localStorage.getItem("userData"));
        const token = localStorage.getItem("token");
        const userId = data ? data.id : "";
        const res = await PostData(
          "view-cart",
          { user_id: userId },
          "",
          `Bearer ${token}`
        );
        setCartItems(res.cart_products);
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.error);
      }
    };
    const fetchOfflineCart = async () => {
      setCartItems(cartState.cart);
    };
    if (session) fetch();
    else {
      fetchOfflineCart();
    }
  }, [session, cartState]);
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState(0);

  const handleIncrement = (id) => {
    cartState.updateCart(id, "add");
  };

  const handleDecrement = (id) => {
    cartState.updateCart(id, "sub");
  };
  const goToCheckout = async () => {
    if (!session) return;
    router.push("/checkout");
  };
  useEffect(() => {
    const totalCartPrice = cartState.cart.reduce((total, item) => {
      const itemTotal = item.qty * parseFloat(item.product_details.sell_price);
      return total + itemTotal;
    }, 0);
    setTotalPrice(totalCartPrice);
  }, [cartState]);
  const removeProduct = async (id, pId) => {
    if (!session) {
      cartState.removeFromCart(pId);
    } else {
      try {
        const data = JSON.parse(localStorage.getItem("userData"));
        const token = localStorage.getItem("token");
        const userId = data ? data.id : "";
        const res = await PostData(
          "remove-cart",
          { user_id: userId, c_id: id },
          "",
          `Bearer ${token}`
        );
        // setCartItems(res);
        setSync(!sync);
        toast.success(res.message);
        setMessage(res.message);
        setTimeout(() => {
          setMessage();
        }, 3000);
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.error);
      }
    }
  };
  const confirmRemoveProduct = (id, pId) => {
    confirmAlert({
      title: "Confirm remove item?",
      message: "Are you sure to do this?",
      buttons: [
        {
          label: "Yes",
          onClick: removeProduct.bind(this, id, pId),
        },
        {
          label: "No",
        },
      ],
    });
  };
  return (
    <div className="container">
      {/* aa */}
      <LoginModal />
      <h2>Winkelwagen</h2>
      <p>Controleer je bestelling en stel deze veilig.</p>
      <div className="row">
        <div className="col-lg-8 col-12">
          {cartItems &&
            cartItems.map((item, i) => (
              <div key={i} className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <Image
                        src={item.product_details.banner_image}
                        className="img-fluid"
                        alt="newimg"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="col-sm-9">
                      <h5>{item.product_details.title}</h5>
                      <div className="row">
                        <div className="col-6">
                          <ul className="price-bx">
                            <li>
                              <span class="badge rounded-pill bg-warning text-dark me-2">
                                22%
                              </span>
                              <a
                                href="#"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Content Goes Here"
                              >
                                <i class="fas fa-info-circle green-cyan"></i>
                              </a>
                            </li>
                            <li>
                              <h3 className="price-main">
                                €{item.product_details.sell_price}{" "}
                                <span>
                                  €{item.product_details.actual_price}
                                </span>
                              </h3>
                              <div className="stock-status-bx">
                                <p className="stock-status-cart">
                                  <i class="fas dot-green fa-circle"></i> Op
                                  voorraad
                                </p>
                              </div>
                            </li>
                          </ul>
                          <div className="input-group quantity-bx">
                            <button
                              className="btn btn-outline-secondary"
                              type="button"
                              onClick={() => handleDecrement(item.product_id)}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              className="form-control text-center"
                              value={item.qty}
                              readOnly
                            />
                            <button
                              className="btn btn-outline-secondary"
                              type="button"
                              onClick={() => handleIncrement(item.product_id)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="col-6">
                          <h5>Highlights</h5>
                          <ul>
                            {item?.product_details?.highlights?.map((hl, j) => (
                              <li key={j}>
                                <i class="fas fa-star green-cyan"></i> {hl}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-auto">
                      <div className="offer-prioud">
                        <p className="mb-0">
                          <Image
                            src="/images/sale.png"
                            width={32}
                            height={32}
                            alt="sale"
                          />{" "}
                          Stapel korting
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Content Goes Here"
                          >
                            <i className="fas green-cyan fa-info-circle ms-2"></i>
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="delivary-date-show">
                        <p>
                          Verwachte bezorgdatum: <span>DD-MM</span>{" "}
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Content Goes Here"
                          >
                            <i className="fas green-cyan fa-info-circle ms-2"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="col position-relative">
                      <button
                        className="delete-icon btn"
                        onClick={() =>
                          confirmRemoveProduct(item.id, item.product_id)
                        }
                      >
                        <i class="bx bx-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div
                    className=" accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    <p>
                      <span className="text-warning">Altijd handig</span>, zon
                      aanvulling!
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Content Goes Here"
                      >
                        <i className="fas green-cyan fa-info-circle ms-2"></i>
                      </a>
                    </p>
                  </div>
                  <div
                    className="row accordion-collapse collapse show"
                    id="collapseOne"
                  >
                    <div className="col-6">
                      <div className="form-check ps-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="procompair"
                          defaultValue="true"
                        />
                        <label
                          className="form-check-label fw-medium"
                          htmlFor="procompair"
                        >
                          Extra
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="extra-add">
                        <p className="fw-medium">
                          + € 159,99 <span className="d-block">Eenmalig</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="col-lg-4 col-12">
          <div className="total-price-bx">
            <h5 className="mb-0 fw-bold">Samenvatting</h5>
            <p className="small">
              Bestellingen vanaf €50 worden gratis bezorgd.
            </p>
            <hr />
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <div
                  className="accordion-button" style={{backgroundColor:"transparent"}}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <div className="col-6">
                    <p className="fw-bold m-0">Subtotaal</p>
                  </div>
                  <div className="col-6 text-end">
                    <p className="fw-bold m-0 me-4">€ {totalPrice}</p>
                  </div>
                </div>

                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="row">
                    <div className="col-6">
                      <p className="d-flex m-0">
                        Verzendkosten
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Content Goes Here"
                        >
                          <i className="fas green-cyan fa-info-circle ms-2"></i>
                        </a>
                      </p>
                    </div>
                    <div className="col-6 text-end">
                      <p className="m-0">Gratis</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <div className="row">
              <div className="col-6">
                <p className="fw-bold">
                  Totaal <span className="fw-normal d-block">incl. BTW</span>
                </p>
              </div>
              <div className="col-6 text-end">
                <p className="fw-bold">€ {totalPrice}</p>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={goToCheckout}
                className="pro-add btn text-black"
                data-bs-toggle={!session && "modal"}
                data-bs-target={!session && "#loginModal"}
              >
                Plaats jouw bestelling
              </button>
              <a
                href="#"
                className="d-block text-dark text-decoration-underline"
              >
                Verder winkelen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

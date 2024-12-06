import React from "react";
import SunAnimation from "../../../../components/common/SunAnimation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { axiosGet, PostData } from "../../../../utils/ApiCalls";
import { Rating } from "react-simple-star-rating";

const Index = ({ product }) => {
  console.log(product);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const className = "internet-tvlarge";
  const onSubmit = async (data) => {
    // if (!session) return;
    const aa = JSON.parse(localStorage.getItem("userData"));
    const token = localStorage.getItem("token");
    const userId = aa ? aa.id : "";
    data.user_id = userId;
    data.product_id = product.id;
    toast.loading("Submitting data, please wait...");
    try {
      const res = await PostData(
        "save-product-requests",
        { ...data, terms_condition: data.terms_condition ? 1 : 0 },
        "",
        token
      );
      if (res.success !== true) {
        console.log("error");
      }
      toast.success(res.message);
      reset();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    } finally {
      toast.dismiss();
    }
  };

  return (
    <div className="container-fluid eventwrp">
      <SunAnimation className={className} />
      <div className="card cus-order-form">
        <div className="card-body">
          <h5 className="text-center mb-4  fw-medium">
            Special Request Product Order Form
          </h5>
          <div className="row">
            <div className="col-lg-12">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-auto col-md-auto col-sm-12 pro-img-sm">
                      <div className="position-relative p-2">
                        <Image
                          src={product.banner_image}
                          width={200}
                          height={200}
                          alt="product"
                        />
                        {product.available_status == 1 && (
                          <i class="bx bxs-circle bx-flashing dot-green blink-dot"></i>
                        )}
                        {product.available_status == 2 && (
                          <i class="bx bxs-circle bx-flashing dot-orange blink-dot"></i>
                        )}
                        {product.available_status == 3 && (
                          <i class="bx bxs-circle bx-flashing dot-gold blink-dot"></i>
                        )}
                        {product.available_status == 0 && (
                          <i class="bx bxs-circle bx-flashing dot-grey blink-dot"></i>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-8 col-md8 col-sm-12">
                      <h6 className="green-cyan small fw-bold">
                        {product.title} ({product.color.title})
                      </h6>
                      <div className="row">
                        <div className="col-8">
                          <p class="sku-id">SKU: {product.sku}</p>
                          <p className="v-details mb-0">
                            incl. VAT and free shipping above €50
                            <a href="javascript:void(0);">
                              <i className="fas green-cyan fa-info-circle ms-2"></i>
                            </a>
                          </p>
                        </div>
                        <div className="col-4">
                          <p className="tags">Bestseller</p>
                          <p className="stock-status mb-0">Uitverkocht</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6 col-md-4">
                          <h4 className="pro-price mb-0">
                            € {product.sell_price}{" "}
                            <span>€ {product.actual_price}</span>
                          </h4>
                          <div className="pro-reivew">
                            <Rating
                              initialValue={product.rating}
                              size={20}
                              readonly
                              allowFraction
                              fillColor="gold"
                              emptyColor="gray"
                            />
                            <li>
                              <span className="ms-1">
                                ({product.reviews} Reviews)
                              </span>
                            </li>
                          </div>
                        </div>
                        <div className="col-md-8 col-6">
                          {product.highlights &&
                            product.highlights.length > 0 && (
                              <div className="row highlights">
                                <div className="col-12">
                                  <h5>Highlights</h5>
                                  <ul className="d-md-flex gap-2">
                                    {product.highlights.map((hl, i) => (
                                      <li key={i}>
                                        <i className="fas fa-star" /> {hl}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="col-lg-12" onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="customerName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className={
                      errors.user_name
                        ? "form-control me-2 errorBox"
                        : "form-control me-2"
                    }
                    {...register("user_name", { required: true })}
                    id="customerName"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className={
                      errors.email
                        ? "form-control me-2 errorBox"
                        : "form-control me-2"
                    }
                    {...register("email", { required: true })}
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className={
                      errors.phone_number
                        ? "form-control me-2 errorBox"
                        : "form-control me-2"
                    }
                    {...register("phone_number", { required: true })}
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="quantity" className="form-label">
                    Quantity
                  </label>
                  <input
                    type="number"
                    className={
                      errors.qty
                        ? "form-control me-2 errorBox"
                        : "form-control me-2"
                    }
                    {...register("qty", { required: true })}
                    id="quantity"
                    min={1}
                    placeholder="Enter the quantity"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="address" className="form-label">
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    className={
                      errors.delivery_address
                        ? "form-control me-2 errorBox"
                        : "form-control me-2"
                    }
                    {...register("delivery_address", { required: true })}
                    id="address"
                    placeholder="Postcode, huisnummer en toevoeging"
                    defaultValue={""}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="additionalInfo" className="form-label">
                    Terugbelverzoek
                  </label>
                  <input
                    type="datetime-local"
                    className={
                      errors.callback_date
                        ? "form-control me-2 errorBox"
                        : "form-control me-2"
                    }
                    {...register("callback_date", {
                      required: "This field is required",
                    })}
                    id="dateTimeInput"
                  />
                  {errors.callback_date && (
                    <p>{errors.callback_date.message}</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <label htmlFor="additionalInfo" className="form-label">
                    Aanvullende informatie
                  </label>
                  <textarea
                    className={
                      errors.additional_info
                        ? "form-control me-2 errorBox"
                        : "form-control me-2"
                    }
                    {...register("additional_info", { required: true })}
                    id="additionalInfo"
                    rows={3}
                    placeholder="Geef je verzoek zo kort en duidelijk mogelijk aan."
                    defaultValue={""}
                  />
                </div>
              </div>

              <div className="mb-3 form-check ps-0">
                <input
                  type="checkbox"
                  //   className="form-check-input"
                  className={
                    errors.terms_condition
                      ? "form-check-input me-2 errorBox"
                      : "form-check-input me-2"
                  }
                  {...register("terms_condition", { required: true })}
                  id="termsCheck"
                  required
                />
                <label className="form-check-label" htmlFor="termsCheck">
                  I agree to the terms and conditions
                </label>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-one">
                  Verzoek indienen
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const slug = context.params.slug;
  try {
    const data = await axiosGet("product-details/" + slug);
    // const data2 = await PostData("get-energy-deals");

    return {
      props: { product: data.productDetails },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { data: {}, data2: {} },
    };
  }
}

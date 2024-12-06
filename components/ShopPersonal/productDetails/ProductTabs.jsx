import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Rating } from "react-simple-star-rating";
import { useForm } from "react-hook-form";
import { PostData } from "../../../utils/ApiCalls";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import LoginModal from "../../common/LoginModal";
const ProductTabs = ({
  data,
  rating,
  totalRatings,
  reviews: reviewsFromData,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm();
  const { data: session } = useSession();

  const [userRating, setuserRating] = useState(0);
  const [filterRating, setFilterRating] = useState(0);
  const [reviews, setReviews] = useState(reviewsFromData);
  const postReview = async (formData) => {
    if (!session) return;
    const data = JSON.parse(localStorage.getItem("userData"));
    const token = localStorage.getItem("token");
    const userId = data ? data.id : "";
    formData.rating = userRating;
    formData.user_id = userId;
    formData.product_id = data.id;
    console.log(formData);
    try {
      const res = await PostData(
        "store-product-review",
        { ...formData },
        "",
        `Bearer ${token}`
      );
      // console.log(res);
      toast.success(res.message);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss();
    reset();
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await PostData("filter-reviews", {
          rating: filterRating,
          product_id: data.id,
        });
        console.log(res);
        setReviews(res.ratingsData);
        // toast.success(res[0].response.msg);
      } catch (error) {
        console.log(error);
        // toast.error(error?.response?.data?.error);
      }
    };
    fetch();
  }, [filterRating]);

  return (
    <>
      <div className="pro-details-tabs">
        <div className="container">
          <div id="listhiddenDiv1" className="tabwrp">
            <ul className="nav nav-tabs" id="myTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="tab1-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab1"
                  type="button"
                  role="tab"
                  aria-controls="tab1"
                  aria-selected="true"
                >
                  Description
                </button>
              </li>
             {data.specification && <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="tab2-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab2"
                  type="button"
                  role="tab"
                  aria-controls="tab2"
                  aria-selected="false"
                >
                  Specificaties
                </button>
              </li>}
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="tab3-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab3"
                  type="button"
                  role="tab"
                  aria-controls="tab3"
                  aria-selected="false"
                >
                  Reviews
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabsContent">
              <div
                className="tab-pane fade show active"
                id="tab1"
                role="tabpanel"
                aria-labelledby="tab1-tab"
                dangerouslySetInnerHTML={{ __html: data.description }}
              ></div>
              {data.specification && <div
                className="tab-pane fade"
                id="tab2"
                role="tabpanel"
                aria-labelledby="tab2-tab"
              >
                <div className="pro-spacification-tab">
                  <h4>Product specifiaties</h4>
                  <div className="input-group pro-spacification-search">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search on specific product features..."
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                      >
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="accordion" id="progen">
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button "
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              General
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#progen"
                          >
                            <div className="accordion-body table-responsive-sm">
                              <table className="table table-bordered">
                                <tbody>
                                  {Object.keys(data.specification.General).map(
                                    (property, i) => (
                                      <tr key={i}>
                                        <td>{property}</td>
                                        <td>
                                          {data.specification.General[property]}
                                        </td>
                                      </tr>
                                    )
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion" id="prodetails">
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsepro"
                              aria-expanded="false"
                              aria-controls="prodetails"
                            >
                              Product Details
                            </button>
                          </h2>
                          <div
                            id="collapsepro"
                            className="accordion-collapse collapse"
                            data-bs-parent="#prodetails"
                          >
                            <div className="accordion-body table-responsive-sm">
                              <table className="table table-bordered">
                                <tbody>
                                  {Object.keys(
                                    data.specification.Product_Details
                                  ).map((property, i) => (
                                    <tr key={i}>
                                      <td>{property}</td>
                                      <td>
                                        {
                                          data.specification.Product_Details[
                                            property
                                          ]
                                        }
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
              <div
                className="tab-pane fade"
                id="tab3"
                role="tabpanel"
                aria-labelledby="tab3-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="review-user">
                      <div className="review-pertg-bx">
                        <h4>Customer reviews</h4>
                        <div className="rating-star-usr">
                          <h6>{data.rating}</h6>
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
                                <span className="ms-1">
                                  ({totalRatings} Reviews)
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="progress-box">
                          <div className="pro-bx-wrp">
                            <ul>
                              <li>5 Star</li>
                              <li>
                                <ProgressBar
                                  completed={`${rating.fiveStar}`}
                                  maxCompleted={totalRatings}
                                  bgColor="#fba02e"
                                  height="10px"
                                  isLabelVisible={false}
                                />
                              </li>
                              <li>({rating.fiveStar ?? 0})</li>
                            </ul>
                          </div>
                          <div className="pro-bx-wrp">
                            <ul>
                              <li>4 Star</li>
                              <li>
                                <ProgressBar
                                  completed={`${rating.fourStar}`}
                                  maxCompleted={totalRatings}
                                  bgColor="#fba02e"
                                  height="10px"
                                  isLabelVisible={false}
                                />
                              </li>
                              <li>({rating.fourStar ?? 0})</li>
                            </ul>
                          </div>
                          <div className="pro-bx-wrp">
                            <ul>
                              <li>3 Star</li>
                              <li>
                                <ProgressBar
                                  completed={`${rating.threeStar}`}
                                  maxCompleted={totalRatings}
                                  bgColor="#fba02e"
                                  height="10px"
                                  isLabelVisible={false}
                                />
                              </li>
                              <li>({rating.threeStar ?? 0})</li>
                            </ul>
                          </div>
                          <div className="pro-bx-wrp">
                            <ul>
                              <li>2 Star</li>
                              <li>
                                <ProgressBar
                                  completed={`${rating.twoStar}`}
                                  maxCompleted={totalRatings}
                                  bgColor="#fba02e"
                                  height="10px"
                                  isLabelVisible={false}
                                />
                              </li>
                              <li>({rating.twoStar ?? 0})</li>
                            </ul>
                          </div>
                          <div className="pro-bx-wrp">
                            <ul>
                              <li>1 Star</li>
                              <li>
                                <ProgressBar
                                  completed={`${rating.oneStar}`}
                                  maxCompleted={totalRatings}
                                  bgColor="#fba02e"
                                  height="10px"
                                  isLabelVisible={false}
                                />
                              </li>
                              <li>({rating.oneStar ?? 0})</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="user-ratting-list">
                        <div className="row">
                          <div className="col-sm-6">
                            <h3>Rating &amp; Review</h3>
                          </div>
                          <div className="col-sm-6">
                            <select
                              value={filterRating}
                              onChange={(e) => setFilterRating(e.target.value)}
                              className="form-select"
                            >
                              <option disabled>Filters</option>
                              <option value={5}>5 Stars</option>
                              <option value={4}>4 Stars</option>
                              <option value={3}>3 Stars</option>
                              <option value={2}>2 Stars</option>
                              <option value={1}>1 Stars</option>
                            </select>
                          </div>
                        </div>
                        {reviews.map((review, i) => (
                          <div key={i} className="review-bxs">
                            <div className="row">
                              <div className="col-6">
                                <h6>Nice product</h6>
                                <Rating
                                  initialValue={review.rating}
                                  size={20}
                                  readonly
                                  allowFraction
                                  fillColor="gold"
                                  emptyColor="gray"
                                />
                              </div>
                              <div className="col-6">
                                <div className="buyer-rev-name">
                                  <ul>
                                    <li>
                                      Cartified Buyer
                                      <span>from {review.name}</span>
                                    </li>
                                    <li>
                                      <Image
                                        src="/images/shieldclock.png"
                                        width={35}
                                        height={35}
                                        alt="shield"
                                      />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <p>{review.review}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <form
                      onSubmit={handleSubmit(postReview)}
                      className="rivew-submit-sec"
                    >
                      <h4>Review this product</h4>
                      <p>
                        Your email address will not be published. Required
                        fields are marked *
                      </p>
                      <div className="review-form-bx">
                        <ul>
                          <li>Your Rating :</li>
                          <Rating
                            size={20}
                            allowFraction
                            fillColor="gold"
                            emptyColor="gray"
                            onClick={(value) => setuserRating(value)}
                            initialValue={userRating}
                          />
                        </ul>
                        <div className="rev-bx-in">
                          <label className="rate-label">Write Review</label>
                          <textarea
                            placeholder="Write your message here..."
                            name="review"
                            id="review"
                            rows={5}
                            className={
                              errors.review
                                ? "form-control errorBox"
                                : "form-control"
                            }
                            {...register("review", {
                              required: true,
                            })}
                          ></textarea>
                        </div>
                        <div className="rev-bx-in">
                          <label className="rate-label">Your Name</label>
                          <input
                            placeholder="Please enter your name here..."
                            type="text"
                            className={
                              errors.name
                                ? "form-control errorBox"
                                : "form-control"
                            }
                            {...register("name", {
                              required: true,
                            })}
                          />
                        </div>
                        <div className="rev-bx-in">
                          <label className="rate-label">Your Email</label>
                          <input
                            placeholder="Please enter your email here..."
                            type="email"
                            className={
                              errors.email
                                ? "form-control errorBox"
                                : "form-control"
                            }
                            {...register("email", {
                              required: true,
                            })}
                          />
                        </div>
                        <div className="rev-bx-in">
                          <div className="form-check d-flex ps-0">
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <label className="fw-medium">
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </label>
                          </div>
                        </div>
                        <div className="text-end">
                          <button
                            className="rev-submit"
                            type="submit"
                            data-bs-toggle={session ? "" : "modal"}
                            data-bs-target={session ? "" : "#loginModal"}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginModal cb={postReview} />
    </>
  );
};

export default ProductTabs;

import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { PostData } from "../../utils/ApiCalls";
import Image from "next/image";

function Register() {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [image, setImage] = useState();
  const onImageChange = (e) => {
    setImage(e.target.files[0]);
    console.log("user image -", e.target.files[0]);
  };
  const onSubmit = async (data) => {
    console.log(data);
    toast.loading("Submitting form, please wait...");
    try {
      const res = await PostData("register", { ...data, photo: image });
      console.log(res);
      toast.success(res.message);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    toast.dismiss();
  };
  return (
    <main>
      <section>
        <div className="login-wrp">
          <div className="signtitle-bx">
            <div className="container-fluid">
              <h2>
                Hartelijk Welkom <span>Energiser</span>
              </h2>
              <h5>
                Log in of word <b>gratis</b> lid, voor <span>exclusieve</span>{" "}
                deals &amp; stapelgekke kortingen!
              </h5>
            </div>
          </div>
          <div className="container">
            <div className="login-bx">
              <div className="row">
                <div className="col text-center position-relative">
                  {/* Logo */}
                  <Image
                    width={200}
                    height={200}
                    alt="aa"
                    src="/images/logo.png"
                    className="loginlogo"
                  />
                </div>
                <div className="col">
                  {/* Centered Text */}
                  <h3 className="text-center">
                    <span>Registreer </span> Vandaag
                  </h3>
                </div>
                <div className="col text-end">
                  {/* Secure Icon */}
                  <Image
                    width={200}
                    height={200}
                    alt="aa"
                    src="/images/secure.jpg"
                    className="secureicon"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  {/* Form */}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row res-input">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Geberuikersnaam
                          </label>
                          <input
                            type="text"
                            className={
                              errors.name
                                ? "form-control me-2 errorBox"
                                : "form-control me-2"
                            }
                            id="name"
                            name="name"
                            placeholder="Geberuikersnaam"
                            {...register("name", { required: true })}
                          />
                          {errors.name && (
                            <p className="errorMsg">
                              <i className="fas fa-exclamation-triangle"></i>
                              This field is required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className={
                              errors.email
                                ? "form-control me-2 errorBox"
                                : "form-control me-2"
                            }
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            {...register("email", { required: true })}
                          />
                          {errors.email && (
                            <p className="errorMsg">
                              <i className="fas fa-exclamation-triangle"></i>
                              This field is required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label htmlFor="photo" className="form-label">
                            Profile foto
                          </label>
                          <input
                            type="file"
                            className={
                              errors.image
                                ? "form-control me-2 errorBox"
                                : "form-control me-2"
                            }
                            id="image"
                            {...register("image", { required: true })}
                            onChange={onImageChange}
                          />
                          {errors.image && (
                            <p className="errorMsg">
                              <i className="fas fa-exclamation-triangle"></i>
                              This field is required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label htmlFor="mobile" className="form-label">
                            Telefefoonnummer
                          </label>
                          <input
                            type="number"
                            className={
                              errors.mobile
                                ? "form-control me-2 errorBox"
                                : "form-control me-2"
                            }
                            id="mobile"
                            placeholder="Telefefoonnummer"
                            {...register("mobile", { required: true })}
                          />
                          {errors.mobile && (
                            <p className="errorMsg">
                              <i className="fas fa-exclamation-triangle"></i>
                              This field is required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label htmlFor="gender" className="form-label">
                            Geslacht
                          </label>
                          <select
                            name=""
                            id=""
                            className={
                              errors.gender
                                ? "form-select me-2 errorBox"
                                : "form-select me-2"
                            }
                            {...register("gender", { required: true })}
                          >
                            <option value="">Select ...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                          {errors.gender && (
                            <p className="errorMsg">
                              <i className="fas fa-exclamation-triangle"></i>
                              This field is required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label htmlFor="username" className="form-label">
                            Geboortedatum
                          </label>
                          <input
                            type="date"
                            className={
                              errors.age
                                ? "form-control me-2 errorBox"
                                : "form-control me-2"
                            }
                            id="username"
                            name="username"
                            placeholder="Geboortedatum"
                            {...register("age", { required: true })}
                          />
                          {errors.age && (
                            <p className="errorMsg">
                              <i className="fas fa-exclamation-triangle"></i>
                              This field is required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label htmlFor="username" className="form-label">
                            Wachtwoord
                          </label>
                          <input
                            type="password"
                            className={
                              errors.password
                                ? "form-control me-2 errorBox"
                                : "form-control me-2"
                            }
                            id="username"
                            name="username"
                            placeholder="Wachtwoord"
                            {...register("password", { required: true })}
                          />
                          {errors.password && (
                            <p className="errorMsg">
                              <i className="fas fa-exclamation-triangle"></i>
                              This field is required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label htmlFor="c_password" className="form-label">
                            Bevestig Wachtwoord
                          </label>
                          <input
                            type="password"
                            className={
                              errors.c_password
                                ? "form-control me-2 errorBox"
                                : "form-control me-2"
                            }
                            id="username"
                            name="username"
                            placeholder="Bevestig Wachtwoord"
                            {...register("c_password", {
                              required: "This field is required",
                              validate: (value) => {
                                const { password } = getValues();
                                return (
                                  password === value ||
                                  "Passwords should match!"
                                );
                              },
                            })}
                          />
                          {errors.c_password && (
                            <p className="errorMsg">
                              <i className="fas fa-exclamation-triangle"></i>
                              {errors.c_password.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12 text-center">
                        <button type="submit" className="btn btn-login">
                          Aanmelden
                        </button>
                      </div>
                      <div className="col-lg-12">
                        <div className="sign-up-text">
                          <h6>
                            Al Geregistreerd?{" "}
                            <Link href="/login">Meld je dan aan.</Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Register;

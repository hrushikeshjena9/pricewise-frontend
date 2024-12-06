import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'sonner';
import { PostData } from "../../utils/ApiCalls";

function ForgotPassword() {
  const { register, formState: { errors }, handleSubmit, } = useForm()
  const [authToken, setAuthToken] = useState()
  useEffect(() => {
    const token = (localStorage.getItem('token'))
    setAuthToken(token ? token : '')
  }, [])
  const onSubmit = async (data) => {
    toast.loading('Submitting form, please wait...');
    try {
      const res = await PostData('reset-password', data, '', `Bearer ${authToken}`)
      console.log(res[0].response.msg);
      toast.success(res[0].response.msg)
    } catch (error) {
      console.log(error);
      toast.error("Oops! something went wrong")
    }
    toast.dismiss();
  }
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
                <div className="col-2 text-start position-relative ">
                  {/* Logo */}
                  <Image width={70} height={60} alt="aa"
                    src="/images/logo.png"

                  />
                </div>
                <div className="col">
                  {/* Centered Text */}
                  <h3 className="text-center">
                    <span>Wachtwoord </span> vergeten
                  </h3>
                </div>
                <div className="col-2 text-end">
                  <Image width={200} height={200} alt="aa"
                    src="/images/secure.jpg"
                    className="secureicon"
                  />
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row res-input mt-5 justify-content-center">
                  <div className="col-lg-7 col-md-9">
                  <label htmlFor="username" className="form-label">
                        Jouw email
                    </label>
                  <input
                        type="email"
                        className={errors.email ? "form-control me-2 errorBox" : 'form-control me-2'}
                        id="email"
                        name="email"
                        placeholder="Voer uw e-mailadres in"
                        {...register("email", { required: true })}
                      />
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      {errors.email && <p className="errorMsg"><i className="fas fa-exclamation-triangle"></i>This field is required</p>}
                    </div>
                  </div>
                  <div className="col-lg-12 text-center">
                    <button type="submit" className="btn btn-login">
                      Aanmelden
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ForgotPassword;

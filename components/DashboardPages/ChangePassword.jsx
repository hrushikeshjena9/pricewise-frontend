import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PostData } from "../../utils/ApiCalls";
import { toast } from 'sonner';

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm();
  const [authToken, setAuthToken] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthToken(token ? token : "");
  }, []);
  const onSubmit = async (data) => {
    console.log(data);
    toast.loading('Submitting data, please wait...');
    try {
      const res = await PostData(
        "change-password",
        { ...data },
        "",
        `Bearer ${authToken}`
      );
      console.log(res[0].response.msg);
      toast.success(res[0].response.msg)
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error)
    }
    toast.dismiss();
    // reset()
  };
  return (
    <>
      <div className="card change-password  mb-4">
        <div className="card-header">
          <h4 className="mb-0">
            <i className="fas fa-user" /> Verander wachtwoord
          </h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-3">
              <div className="col-lg-12 mb-3">
                <label htmlFor="username" className=" col-form-label">
                  {" "}
                  huidig ​​wachtwoord
                </label>
                <input
                  type="text"
                  className={
                    errors.current_password
                      ? "form-control errorBox"
                      : "form-control"
                  }
                  id="current_password"
                  placeholder="Energise company"
                  {...register("current_password", {
                    required: true,
                  })}
                />
                {errors.current_password && (
                  <p className="errorMsg">
                    <i className="fas fa-exclamation-triangle"></i>Enter current
                    password
                  </p>
                )}
              </div>
              <div className="col-sm-6">
                <label htmlFor="password" className=" col-form-label">
                  nieuw paswoord
                </label>
                <input
                  type="password"
                  className={
                    errors.new_password
                      ? "form-control errorBox"
                      : "form-control"
                  }
                  id="new_password"
                  name="new_password"
                  placeholder="Wachtwoord"
                  {...register("new_password", { required: true })}
                />
                {errors.new_password && (
                  <p className="errorMsg">
                    <i className="fas fa-exclamation-triangle"></i>Enter new
                    password
                  </p>
                )}
              </div>
              <div className="col-sm-6">
                <label htmlFor="password" className=" col-form-label">
                  bevestig wachtwoord
                </label>
                <input
                  type="password"
                  className={
                    errors.confirm_password
                      ? "form-control errorBox"
                      : "form-control"
                  }
                  id="confirm_password"
                  name="confirm_password"
                  placeholder="Wachtwoord"
                  {...register("confirm_password", {
                    required: "This field is required",
                    validate: (value) => {
                      const { new_password } = getValues();
                      return (
                        new_password === value || "Passwords should match!"
                      );
                    },
                  })}
                />
                {errors.confirm_password && (
                  <p className="errorMsg">
                    <i className="fas fa-exclamation-triangle"></i>
                    {errors.confirm_password.message}
                  </p>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12  text-end">
                <button type="submit" className="btn-one">
                  Wijziging
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;

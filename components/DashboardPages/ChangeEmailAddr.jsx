import React, { useEffect, useState } from 'react'
import { PostData } from '../../utils/ApiCalls';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const ChangeEmailAddr = () => {
    const { register, handleSubmit, watch, reset, getValues, formState: { errors },} = useForm();
    const [authToken, setAuthToken] = useState();
    const [userId, setUserId] = useState()
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'))
        const token = localStorage.getItem("token");
        setAuthToken(token ? token : "");
        setUserId(data ? data.id : '')
    }, []);
    const onSubmitEmail = async (data) => {
        console.log(data);
        toast.loading('Submitting data, please wait...');
        try {
            const res = await PostData("email-update", {email: data.email, user_id: userId},"",`Bearer ${authToken}`);
            // console.log(res);
            toast.success(res[0].response.msg)
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.error)
        }
        toast.dismiss();
        reset()
    };
    return (
        <>
            <div className="card change-password">
                <div className="card-header">
                    <h4 className="mb-0">
                        <i className="fas fa-user" /> Verander je gebruikersnaam
                    </h4>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmitEmail)}>
                        <div className="row mb-3">
                            <div className="col-lg-12 mb-3 d-none">
                                <label htmlFor="username" className=" col-form-label">
                                    {" "}
                                    Enter email address
                                </label>
                                <input
                                    type="email"
                                    className={
                                        errors.email
                                            ? "form-control errorBox"
                                            : "form-control"
                                    }
                                    id="email"
                                    placeholder="Energise company"
                                    {...register("email", {
                                        required: true,
                                    })}
                                />
                                {errors.email && (
                                    <p className="errorMsg">
                                        <i className="fas fa-exclamation-triangle"></i>Enter email address
                                    </p>
                                )}
                            </div>


                            <div className='col-lg-6'>
                                <label htmlFor="userid" className=" col-form-label">Huidige gebruikersnaam</label>
                                <input type="text" className="form-control"/>
                                </div>
                                <div className='col-lg-6'>
                                    <label htmlFor="userid" className=" col-form-label">Nieuwe gebruikersnaam</label>
                                    <input type="text" className="form-control" />
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
    )
}

export default ChangeEmailAddr
import React from 'react'
import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner';

const PartnerForm = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const onSubmit = async (data) => {
        toast.success('Thanks for contacting us ,we will get back to you shortly')
        // toast.error('error')
    }
    return (
        <>
            <div className="parnerform">
                <div className="card border-0">
                    <div className="card-body">
                        <h2><span>Partner</span> worden?</h2>
                        <select className={errors.Interest ? "form-select errorBox" : 'form-select'}
                            id="serviceSelect"
                            {...register('Interest', {
                                required: true
                            })}
                        >
                            <option value="gas">Selecteer jouw Interesse</option>
                            <option value="gas">Gas</option>
                            <option value="internet">Internet</option>
                        </select>
                        {errors.username && <p className="errorMsg">
                            <i className="fas fa-exclamation-triangle"></i>This field is required
                        </p>}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="bedrijfsnaam" className="form-label">Bedrijfsnaam*</label>
                                    <input type="text"
                                        className={errors.company_name ? "form-control errorBox" : 'form-control'}
                                        id="bedrijfsnaam"
                                        {...register('company_name', {
                                            required: true
                                        })}
                                    />
                                    {errors.company_name && <p className="errorMsg">
                                    <i className="fas fa-exclamation-triangle"></i>This field is required
                                    </p>}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="bedrijfsactiviteiten" className="form-label">Bedrijfsactiviteiten</label>
                                    <input type="text"
                                        className={errors.business ? "form-control errorBox" : 'form-control'}
                                        id="bedrijfsactiviteiten"
                                        {...register('business', {
                                            required: true
                                        })}
                                    />
                                    {errors.business && <p className="errorMsg">
                                    <i className="fas fa-exclamation-triangle"></i>This field is required
                                    </p>}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="voornaam" className="form-label">Voornaam*</label>
                                    <input type="text"
                                        className={errors.first_name ? "form-control errorBox" : 'form-control'}
                                        id="voornaam"
                                        {...register('first_name', {
                                            required: true
                                        })} />
                                    {errors.first_name && <p className="errorMsg">
                                        <i className="fas fa-exclamation-triangle"></i>This field is required
                                    </p>}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="achternaam" className="form-label">Achternaam*</label>
                                    <input type="text"
                                        className={errors.last_name ? "form-control errorBox" : 'form-control'}
                                        id="achternaam"
                                        {...register('last_name', {
                                            required: true
                                        })}
                                    />
                                    {errors.last_name && <p className="errorMsg">
                                        <i className="fas fa-exclamation-triangle"></i>This field is required
                                    </p>}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="telefoonnummer" className="form-label">Telefoonnummer*</label>
                                    <input type="tel"
                                        className={errors.number ? "form-control errorBox" : 'form-control'}
                                        id="telefoonnummer"
                                        {...register('number', {
                                            required: true
                                        })} />
                                    {errors.number && <p className="errorMsg">
                                        <i className="fas fa-exclamation-triangle"></i>This field is required
                                    </p>}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label">E-mail*</label>
                                    <input type="email"
                                        className={errors.email ? "form-control errorBox" : 'form-control'}
                                        id="email"
                                        {...register('email', {
                                            required: true
                                        })} />
                                    {errors.email && <p className="errorMsg">
                                        <i className="fas fa-exclamation-triangle"></i>This field is required
                                    </p>}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="opmerking" className="form-label">Opmerking</label>
                                <textarea
                                    className={errors.Remark ? "form-control errorBox" : 'form-control'}
                                    rows={3} defaultValue={""}
                                    {...register('Remark', {
                                        required: true
                                    })} />
                                {errors.Remark && <p className="errorMsg">
                                    <i className="fas fa-exclamation-triangle"></i>This field is required
                                </p>}
                            </div>
                            <p>Wij hanteren een beleid om binnen <a href="#">5 werkdagen</a> jouw aanvraag te behandelen.</p>
                            <div className="text-center">
                                <button type="submit" className="btn-partner">Verstuur</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PartnerForm
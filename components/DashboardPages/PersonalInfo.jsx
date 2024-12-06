import React, { useEffect, useState } from 'react'
import ChangePassword from './ChangePassword';
import ChangeEmailAddr from './ChangeEmailAddr';
import { useForm } from 'react-hook-form';
import { PostData } from '../../utils/ApiCalls';

const PersonalInfo = ({ userDetails }) => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const [authToken, setAuthToken] = useState()
    const [userId, setUserId] = useState()
    useEffect(() => {
        const userDetails = JSON.parse(localStorage.getItem('userData'))
        const token = (localStorage.getItem("token"));
        setAuthToken(token ? token : '')
        setUserId(userDetails ? userDetails.id : null)
    }, [])
    const onSubmit = async (data) => {
        const sendData = {
            user_id: userId,
            name: data.name,
            email: data.email,
            gender: data.gender,
            mobile: data.mobile,
            age: data.age,
            password: 1234,
            c_password: 1234,
            photo: 'http://img/user.png'
        }
        try {
            const res = await PostData('profile-update', sendData, '', `Bearer ${authToken}`)
            console.log(res[0].response.msg);
        } catch (error) {
            console.log(error);
        }
        console.log(data);
    }
    return (
        <>
            <div className="col-lg-7">
                <div className="profile-details">
                    <ChangePassword />
                    <ChangeEmailAddr />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card mt-4">
                            <div className="card-header">
                                <h4 className="mb-0"><i className="fas fa-envelope" /> Persoonlijke gegevens</h4>
                            </div>
                            <div className="card-body">
                                {/* First Row */}
                                <div className="row mb-3">
                                    <div className='col-12'>
                                        <table className='table table-borderless d-flex'>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                      <label htmlFor="name" className="col-form-label">Geslacht</label>
                                                    </td>
                                                    <td>
                                                        <div className="form-check me-3">
                                                            <input className="form-check-input" type="radio" name="gender" id="male" defaultValue="male"
                                                                defaultChecked={userDetails?.gender == 'male'}
                                                                {...register('gender', {
                                                                    required: true
                                                                })} />
                                                            <label className="form-check-label" htmlFor="male"><i className="fas fa-mars" /> Man</label>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gender" id="female" defaultValue="female"
                                                                defaultChecked={userDetails?.gender == 'female'}
                                                                {...register('gender', {
                                                                    required: true
                                                                })} />
                                                            <label className="form-check-label" htmlFor="female"><i className="fas fa-venus" /> Vrouw</label>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                         
                                    {/* <label htmlFor="initials" className="col-sm-3 col-form-label">Voorletters</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" id="initials" name="initials" placeholder="Voorletters" />
                                    </div> */}
                                </div>
                                {/* Second Row */}
                                <div className="row mb-3">
                                    <label htmlFor="firstname" className="col-lg-3 col-sm-6 col-form-label">Voornaam</label>
                                    <div className="col-lg-3 col-sm-6">
                                        <input type="text" className={errors.name ? "form-control errorBox" : 'form-control'}
                                            id="name" name="name" placeholder="Bijv. Energise"
                                            defaultValue={userDetails?.name}
                                            {...register('name', {
                                                required: true
                                            })} />
                                    </div>
                                    <label htmlFor="interjections" className="col-lg-3 col-sm-6 col-form-label">Tussenvoegsels</label>
                                    <div className="col-lg-3 col-sm-6">
                                        <input type="text" className="form-control" id="interjections" name="interjections" placeholder="Bijv. Van der" />
                                    </div>
                                </div>
                                {/* Third Row */}
                                <div className="row mb-3">
                                    <label htmlFor="initials" className="col-lg-3 col-sm-6 col-form-label">Voorletters</label>
                                    <div className="col-lg-3 col-sm-6">
                                        <input type="text" className="form-control" id="initials" name="initials" placeholder="Voorletters" />
                                    </div>
                                    <label htmlFor="dob" className="col-lg-3 col-sm-6 col-form-label">Leeftijd</label>
                                    <div className="col-lg-3 col-sm-6">
                                        <input type="number" className={errors.age ? "form-control errorBox" : 'form-control'}
                                            id="age" name="age"
                                            defaultValue={userDetails?.age}
                                            {...register('age', {
                                                required: true
                                            })} />
                                    </div>
                                </div>
                                {/* Fourth Row */}
                                <div className="row mb-3">
                                    <label htmlFor="email" className="col-lg-3 col-sm-6 col-form-label">E-mail</label>
                                    <div className="col-lg-3 col-sm-6">
                                        <input type="email" className={errors.email ? "form-control errorBox" : 'form-control'}
                                            id="email" name="email" placeholder="Bijv. Naam@mail.ni"
                                            defaultValue={userDetails?.email}
                                            {...register('email', {
                                                required: true
                                            })} />
                                    </div>
                                    <label htmlFor="accountNumber" className="col-lg-3 col-sm-6 col-form-label">Rekeningnummer</label>
                                    <div className="col-lg-3 col-sm-6">
                                        <input type="text" className="form-control" id="accountNumber" name="accountNumber" placeholder="NLOOBANK00000000"
                                            defaultValue={userDetails?.acct_no} />
                                    </div>
                                </div>
                                {/* Fifth Row */}
                                <div className="row mb-3">
                                    <label htmlFor="mobileNumber" className="col-lg-3 col-sm-6 col-form-label">Mobiel</label>
                                    <div className="col-lg-3 col-sm-6">
                                        <input type="tel" className={errors.mobile ? "form-control errorBox" : 'form-control'}
                                            id="mobile" name="mobile" placeholder="06-12345678"
                                            defaultValue={userDetails?.mobile}
                                            {...register('mobile', {
                                                required: true
                                            })} />
                                    </div>
                                    <label htmlFor="landlineNumber" className="col-lg-3 col-sm-6 col-form-label">Vaste telefoon</label>
                                    <div className="col-lg-3 col-sm-6">
                                        <input type="tel" className="form-control" id="landlineNumber" name="landlineNumber" placeholder="Regio-0000000"
                                            defaultValue={userDetails?.landline_no} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-4">
                            <div className="card-header">
                                <h4 className="mb-0"><i className="fas fa-home" /> Adres</h4>
                            </div>
                            <div className="card-body">
                                {/* First Row */}
                                <div className="row">
                                    <div className="col-lg-6 align-items-center">
                                        <label htmlFor="zip" className="col-form-label mb-0 me-3">Postcode</label>
                                        <input type="text" className="form-control" id="zip" name="zip" placeholder="Postcode" />
                                    </div>
                                    <div className="col-lg-6  align-items-center">
                                        <label htmlFor="houseNumber" className="col-form-label">Huisnummer &amp; toevoeging</label>
                                        <input type="text" className="form-control " id="houseNumber" name="houseNumber" placeholder="Bijv. 112A" />
                                    </div>
                                </div>
                                <div className="row mb-3 mt-2">
                                    <div className='col-12'>
                                        <table className='table table-borderless d-flex'>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <label className="ol-form-label mb-0 me-3">Wijkt jouw postadres af?</label>
                                                    </td>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="postalAddressDifferent" id="yes" defaultValue="yes" />
                                                            <label className="form-check-label" htmlFor="yes">Ja</label>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="postalAddressDifferent" id="no" defaultValue="no" defaultChecked />
                                                            <label className="form-check-label" htmlFor="no">Nee</label>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center">
                                       
                                        <div className="d-flex">
                               
                                           
                                        </div>
                                    </div>
                                </div>
                                {/* Second Row for Additional Input Box */}
                                <div className="row mb-3" id="additionalInputRow" style={{ display: 'none' }}>
                                    <label htmlFor="additionalInput" className="col-sm-6 col-form-label">Voer postcode in</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" id="additionalInput" name="additionalInput" placeholder="Voer postcode in" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-4">
                            <div className="card-header">
                                <h4 className="mb-0">
                                    <i className="fas fa-user-check" /> Verificatie
                                </h4>
                            </div>
                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col-sm-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="acceptConditions" name="acceptConditions" />
                                            <label className="form-check-label" htmlFor="acceptConditions">Ik accepteer alle voorwaarden.*</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="stayInformed" name="stayInformed" />
                                            <label className="form-check-label" htmlFor="stayInformed">Ik wil graag op de hoogte blijven van alle acties van Energise Company.</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="btn button-customize">Aanpassen</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PersonalInfo;
import React, { useEffect, useState } from 'react'
import { NavLink } from '../../utils/NavLink'
import Image from 'next/image'
import { useRouter } from 'next/router'

const ProfilePhoto = ({ userDetails }) => {
    const router = useRouter()
    const [userImg, setUserImg] = useState(null)
    const [profileImage, setProfileImage] = useState('')

    useEffect(() => {
        setUserImg(userDetails?.photo)
    }, [userDetails])

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            console.log("image file - ", file);
            const imageUrl = URL.createObjectURL(file);
            console.log("image URL", imageUrl);
            // localStorage.setItem('profileImage', imageUrl);

            setProfileImage(imageUrl);
        }
    }
    console.log(profileImage);
    return (
        <>
            <div className="col-lg-2  leftmenuprofile">
                <div className="profimg">
                    <div className="profilebox1">
                        {profileImage ?
                            <>
                                <Image width={200} height={200} alt="aa" src={profileImage} />
                            </>
                            :
                            <>
                                <Image width={200} height={200} alt="aa" src="/images/profile1.png" />
                            </>
                        }
                    </div>
                    <div className="profile-image">
                        <i className="fas fa-cog upload-button" />
                        <span>Wijzig</span>
                        <input type="file" id='img' className='file-upload' accept="image/*" onChange={handleImageChange}
                        />
                    </div>
                </div>
                <ul className="menuprofile">
                    <li>
                        <NavLink href="/dashboard" exact><i className="fas fa-caret-right" /> Mijn gegevens</NavLink>
                    </li>

                    <li>
                        <NavLink href="/dashboard/order-overview" exact><i className="fas fa-caret-right" /> Besteloverzicht</NavLink>
                    </li>

                    <li>
                        <NavLink href="/dashboard/newsnideas" exact><i className="fas fa-caret-right" /> Nieuws & ideeën</NavLink>
                    </li>
                    <li>
                        <NavLink href="/dashboard/work-finance" exact><i className="fas fa-caret-right" /> Werk & financiën</NavLink>
                    </li>
                    <li>
                        <NavLink href="/dashboard/energise-exclusives" exact><i className="fas fa-caret-right" /> Energise Exclusives</NavLink>
                    </li>

                    <li>
                        <NavLink href="/dashboard/faq" exact><i className="fas fa-caret-right" /> Faq</NavLink>
                    </li>
                </ul>
                {router?.pathname == '/dashboard/energise-exclusives' &&
                    <div className="energise-dropdown mt-4">
                        <div className='mb-2'>
                            <p className="d-inline-flex gap-1 mb-0 heading">
                                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    Alle bestellingen<i className="fas fa-caret-down"></i>
                                </button>
                            </p>
                            <div className="collapse" id="collapseExample">
                                <div className="card card-body drop-down-area">
                                    <div className='drop-down-item'>Title here</div>
                                    <div className='drop-down-item'>Title here</div>
                                    <div className='drop-down-item'>Title here</div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <p className="d-inline-flex gap-1 mb-0 heading">
                                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                                    Categorie<i className="fas fa-caret-down"></i>
                                </button>
                            </p>
                            <div className="collapse" id="collapseExample2">
                                <div className="card card-body drop-down-area">
                                    <div className='drop-down-item'>Title here</div>
                                    <div className='drop-down-item'>Title here</div>
                                    <div className='drop-down-item'>Title here</div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <p className="d-inline-flex gap-1 mb-0 heading">
                                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                                    Extra filters<i className="fas fa-caret-down"></i>
                                </button>
                            </p>
                            <div className="collapse" id="collapseExample3">
                                <div className="card card-body drop-down-area">
                                    <div className='drop-down-item'>Title here</div>
                                    <div className='drop-down-item'>Title here</div>
                                    <div className='drop-down-item'>Title here</div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-1'>
                            <p className="d-inline-flex gap-1 mb-0 heading">
                                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
                                    Extra filters<i className="fas fa-caret-down"></i>
                                </button>
                            </p>
                            <div className="collapse" id="collapseExample4">
                                <div className="card card-body drop-down-area">
                                    <div className='drop-down-item'>Title here</div>
                                    <div className='drop-down-item'>Title here</div>
                                    <div className='drop-down-item'>Title here</div>
                                </div>
                            </div>
                        </div>
                    </div>
                }


            </div>
        </>
    )
}

export default ProfilePhoto
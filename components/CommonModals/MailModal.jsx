import Image from 'next/image';
import React, { useState } from 'react'

const MailModal = () => {
    const [showFirstBody, SetShowFirstBody] = useState(true);
    const [showSecondBody, setShowSecondBody] = useState(false);

    const handleSendFirst = () => {
        SetShowFirstBody(false);
        setShowSecondBody(true);
    };
    return (
        <>
            <div className="emaildeal">
                <a data-bs-toggle="modal" data-bs-target="#emailModal" style={{color: '#fb9d26'}}>
                    <Image alt='aa' width={32} height={32} src="/images/mail.png" className="img-fluid" />
                    Mail mijn deals
                </a>
                {/* Modal */}
                <div className="modal fade" id="emailModal" tabIndex={-1} aria-labelledby="emailModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="emailModalLabel">Mail mijn deals</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>


                            {/* First Modal Body */}
                            <div className="modal-body"
                                style={{ display: showFirstBody ? 'block' : 'none' }}
                            >
                                <h5>Let op deals kunnen per dag wijzigen! </h5>
                                <p>Wij versturen jouw deals uitsluitend per e-mail.</p>
                                <form>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Bijv. voorbeeld@outlook.com" id="recipient-name" />
                                    </div>
                                </form>
                            </div>

                            {/* First Modal Footer */}
                            <div className="modal-footer"
                                style={{ display: showFirstBody ? 'block' : 'none' }}
                            >
                                <button type="button" className="btn price-btn" onClick={handleSendFirst}>
                                    Send
                                </button>
                            </div>

                            {/* Second Modal Body */}
                            <div className="modal-body" style={{ display: showSecondBody ? 'block' : 'none' }}>
                                <h5>Verstuurd!</h5>
                                <p>Jouw verrassend scherpe deals zijn verzonden. Het kan soms voorkomen, dat jouw deals in de spam terecht komen.</p>
                                <p>Heb jij nog vragen hierover? Neem gerust <a href="javascript:void(0);">contact</a> met ons op.</p>
                                <p className="text-warning">
                                    Let op de deals zijn vaak enkele dagen geldig voorkom daarom een gemiste kans!
                                </p>
                                <a href="javascript:void(0);">
                                    <i className="fas fa-shield-alt"></i>
                                    <span>Privacy</span>
                                </a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MailModal
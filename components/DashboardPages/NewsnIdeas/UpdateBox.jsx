import React from 'react'

const UpdateBox = () => {
    return (
        <>
            <div className="col-lg-3">
                <div className="nes-up-bx">
                    <h5 className="bg-red">Updates</h5>
                    <div className="new-up-text">
                        <span>Onderwerp:...</span>
                        <textarea name id cols={30} rows={10} placeholder="Text" defaultValue={""} className='form-control' />
                    </div>
                    <div className="new-up-text">
                        <span>Onderwerp:...</span>
                        <textarea name id cols={30} rows={10} placeholder="Text" defaultValue={""}   className='form-control' />
                    </div>
                    <div className="new-up-text">
                        <span>Onderwerp:...</span>  
                        <textarea name id cols={30} rows={10} placeholder="Text" defaultValue={""}  className='form-control mb-3'/>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="nes-up-bx">
                    <h5 className="bg-orange">Aankondigingen</h5>
                    <div className="new-up-text">
                        <span>Onderwerp:...</span>  
                        <textarea name id cols={30} rows={10} placeholder="Text" defaultValue={""}  className='form-control'/>
                    </div>
                    <div className="new-up-text">
                        <span>Onderwerp:...</span>
                        <textarea name id cols={30} rows={10} placeholder="Text" defaultValue={""}  className='form-control'/>
                    </div>
                    <div className="new-up-text">
                        <span>Onderwerp:...</span>
                        <textarea name id cols={30} rows={10} placeholder="Text" defaultValue={""}  className='form-control mb-3'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateBox
import React from 'react'

const AdditionalQuestions = ({ register, errors }) => {
    return (
        <>
            <div className="card mt-4">
                <div className="card-header">
                    <h4 className="mb-0">
                        <i className="fas fa-info-circle"></i> Aanvullende vragen
                    </h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>
                                Vul hier alle vragen in die voor de <span>aanvrager</span>
                                gelden.
                            </p>
                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="abroadIncome" className="col-form-label">
                                        Woon of werk jij in het buitenland of krijg jij inkomen
                                        uit het buitenland?
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="abroadIncome"
                                            id="yes"
                                            value="yes"
                                            {...register('income_abroad', { required: true })}
                                        />
                                        <label className="form-check-label" htmlFor="yes">
                                            Ja
                                        </label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="abroadIncome"
                                            id="no"
                                            value="no"
                                            {...register('income_abroad', { required: true })}
                                        />
                                        <label className="form-check-label" htmlFor="no">
                                            Nee
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {errors.income_abroad && <p className="errorMsg"><i className="fas fa-exclamation-triangle"></i> This field is required</p>}
                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="ownIncome" className="col-form-label">
                                        Heb jij een eigen inkomen?
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="ownIncome"
                                            id="inkomenyes"
                                            value="yes"
                                            {...register('own_income', { required: true })}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="inkomenyes"
                                        >
                                            Ja
                                        </label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="ownIncome"
                                            id="inkomenno"
                                            value="no"
                                            {...register('own_income', { required: true })}
                                        />
                                        <label className="form-check-label" htmlFor="inkomenno">
                                            Nee
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {errors.own_income && <p className="errorMsg"><i className="fas fa-exclamation-triangle"></i> This field is required</p>}
                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="abroadIncome" className="col-form-label">
                                        Wat is jouw bron van inkomen?
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="sourceIncome"
                                            id="inkomenyes"
                                            value="yes"
                                            {...register('source_of_income', { required: true })}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="inkomenyes"
                                        >
                                            Arbeid
                                        </label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="sourceIncome"
                                            id="uitkering"
                                            value="no"
                                            {...register('source_of_income', { required: true })}
                                        />
                                        <label className="form-check-label" htmlFor="uitkering">
                                            Uitkering
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {errors.source_of_income && <p className="errorMsg"><i className="fas fa-exclamation-triangle"></i> This field is required</p>}
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="woonplaats" className="col-form-label">
                                        Waar woon jij?
                                    </label>
                                    <select className={errors.living_address ? "form-select errorBox" : "form-control"}
                                     id="woonplaats"
                                        {...register('living_address', { required: true })}>
                                        <option value="nederland" selected>
                                            Nederland
                                        </option>
                                        {/* Add more options here */}
                                    </select>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="werkplaats" className="col-form-label">
                                        Waar werk jij?
                                    </label>
                                    <select className={errors.work_address ? "form-select errorBox" : "form-control"}
                                     id="werkplaats"
                                        {...register('work_address', { required: true })}>
                                        <option value="nederland" selected>
                                            Nederland
                                        </option>
                                        {/* Add more options here */}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p>
                                Vul hier alle vragen in die voor de <span>aanvrager</span>
                                gelden.
                            </p>
                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="abroadIncome" className="col-form-label">
                                        Woont of werkt uw partner in het buitenland of heeft hij/zij inkomsten uit het buitenland?
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="abroadIncome"
                                            id="yes"
                                            value="yes"
                                        />
                                        <label className="form-check-label" htmlFor="yes">
                                            Ja
                                        </label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="abroadIncome"
                                            id="no"
                                            value="no"
                                        />
                                        <label className="form-check-label" htmlFor="no">
                                            Nee
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="abroadIncome" className="col-form-label">
                                        Heb jij een eigen inkomen?
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="abroadIncome"
                                            id="inkomenyes"
                                            value="yes"
                                            {...register('p_income_abroad')}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="inkomenyes"
                                        >
                                            Ja
                                        </label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="abroadIncome"
                                            id="inkomenno"
                                            value="no"
                                            {...register('p_income_abroad')}
                                        />
                                        <label className="form-check-label" htmlFor="inkomenno">
                                            Nee
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="abroadIncome" className="col-form-label">
                                        Wat is jouw bron van inkomen?
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="pOwnIncome"
                                            id="inkomenyes"
                                            value="yes"
                                            {...register('p_own_income')}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="inkomenyes"
                                        >
                                            Arbeid
                                        </label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="pOwnIncome"
                                            id="uitkering"
                                            value="no"
                                            {...register('p_own_income')}
                                        />
                                        <label className="form-check-label" htmlFor="uitkering">
                                            Uitkering
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="woonplaats" className="col-form-label">
                                        Waar woon jij?
                                    </label>
                                    <select className="form-select" id="woonplaats"
                                    {...register('p_living_address')}>
                                        <option value="nederland" selected>
                                            Nederland
                                        </option>
                                        {/* Add more options here */}
                                    </select>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="werkplaats" className="col-form-label">
                                        Waar werk jij?
                                    </label>
                                    <select className="form-select" id="werkplaats"
                                    {...register('p_working_address')}>
                                        <option value="nederland" selected>
                                            Nederland
                                        </option>
                                        {/* Add more options here */}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdditionalQuestions
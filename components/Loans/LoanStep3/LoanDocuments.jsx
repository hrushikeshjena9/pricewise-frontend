import Image from 'next/image'
import React from 'react'

const LoanDocuments = () => {
    return (
        <>
            <div className="card mt-4">
                <div className="card-header">
                    <h4 className="mb-0"><Image width={200} height={200} alt="aa" src="/images/documentation.png" className="img-fluid" />Documenten</h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <p>Voeg hier alle documenten toe die voor de <span>aanvrager</span> gelden.</p>
                            <div className="mb-3">
                                <label htmlFor="kopiePaspoortAanvrager" className="form-label">Kopie paspoort aanvrager*</label>
                                <div className="row">
                                    <div className="col-11">
                                        <input type="file" className="form-control" id="kopiePaspoortAanvrager" required />
                                    </div>
                                    <div className="col-1 p-0">
                                        <a href="javascript:void(0);">
                                            <i className="fas  fa-info-circle" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-11">
                                    <label className="form-label">Heb jij een eigen onderneming?*</label>
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="eigenOnderneming" id="eigenOndernemingJa" defaultValue="ja" />
                                    <label className="form-check-label" htmlFor="eigenOndernemingJa">Ja</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="eigenOnderneming" id="eigenOndernemingNee" defaultValue="nee" />
                                    <label className="form-check-label" htmlFor="eigenOndernemingNee">Nee</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-11">
                                    <label className="form-label">Heb jij een vastcontract?*</label>
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="eigenOnderneming" id="eigenOndernemingJa" defaultValue="ja" />
                                    <label className="form-check-label" htmlFor="eigenOndernemingJa">Ja</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="eigenOnderneming" id="eigenOndernemingNee" defaultValue="nee" />
                                    <label className="form-check-label" htmlFor="eigenOndernemingNee">Nee</label>
                                </div>
                            </div>
                            <label className="form-label">Werkgeversverklaring*</label>
                            <p><span>Let op, deze verklaring mag niet ouder dan 3 maanden zijn.</span></p>
                            <div className="row">
                                <div className="col-11">
                                    <input type="file" className="form-control" id="kopiePaspoortPartner" required />
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                            <label className="form-label">Loonstrook*</label>
                            <div className="row">
                                <div className="col-11">
                                    <input type="file" className="form-control" id required />
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                            <label className="form-label">Uitdraai(en) van jouw pensioenoverzicht*</label>
                            <div className="row">
                                <div className="col-11">
                                    <input type="file" className="form-control" id required />
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                            <label className="form-label">Jaaropgaven</label>
                            <div className="row">
                                <div className="col-11">
                                    <input type="file" className="form-control" id required />
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                            <label className="form-label">Recente afschriften van jouw bank en spaarrekeningen*</label>
                            <div className="row">
                                <div className="col-11">
                                    <input type="file" className="form-control" id required />
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-11">
                                    <p>Heb jij nog openstaande schulden?</p>
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="eigenOnderneming" id="eigenOndernemingJa" defaultValue="ja" />
                                    <label className="form-check-label" htmlFor="eigenOndernemingJa">Ja</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="eigenOnderneming" id="eigenOndernemingNee" defaultValue="nee" />
                                    <label className="form-check-label" htmlFor="eigenOndernemingNee">Nee</label>
                                </div>
                            </div>
                            <label className="form-label">Overzicht lijst met schulden*</label>
                            <div className="row">
                                <div className="col-11">
                                    <input type="file" className="form-control" id required />
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <p>Voeg hier alle documenten toe die voor de <span>aanvrager</span> gelden.</p>
                            <div className="mb-3">
                                <label htmlFor="kopiePaspoortAanvrager" className="form-label">Kopie paspoort partner*</label>
                                <div className="row">
                                    <div className="col-11">
                                        <input type="file" className="form-control" id="kopiePaspoortAanvrager" required />
                                    </div>
                                    <div className="col-1 p-0">
                                        <a href="javascript:void(0);">
                                            <i className="fas fa-info-circle" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-11">
                                    <label className="form-label">Heb jij een eigen onderneming?*</label>
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="eigenOnderneming" id="eigenOndernemingJa" defaultValue="ja" />
                                    <label className="form-check-label" htmlFor="eigenOndernemingJa">Ja</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="eigenOnderneming" id="eigenOndernemingNee" defaultValue="nee" />
                                    <label className="form-check-label" htmlFor="eigenOndernemingNee">Nee</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-11">
                                    <label className="form-label">Heb jij een vastcontract?*</label>
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="eigenOnderneming" id="eigenOndernemingJa" defaultValue="ja" />
                                    <label className="form-check-label" htmlFor="eigenOndernemingJa">Ja</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="eigenOnderneming" id="eigenOndernemingNee" defaultValue="nee" />
                                    <label className="form-check-label" htmlFor="eigenOndernemingNee">Nee</label>
                                </div>
                            </div>
                            <label className="form-label">Intentieverklaring*</label>
                            <p><span>Let op, deze verklaring mag niet ouder dan 3 maanden zijn.</span></p>
                            <div className="row">
                                <div className="col-11">
                                    <input type="file" className="form-control" id="kopiePaspoortPartner" required />
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                            <label className="form-label">Loonstrook*</label>
                            <div className="row">
                                <div className="col-11">
                                    <input type="file" className="form-control" id required />
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                            <label className="form-label">Uitdraai(en) van jouw pensioenoverzicht*</label>
                            <div className="row">
                                <div className="col-11">
                                    <input type="file" className="form-control" id required />
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                            <label className="form-label">Jaaropgaven</label>
                            <div className="row">
                                <div className="col-11">
                                    <input type="file" className="form-control" id required />
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                            <label className="form-label">Recente afschriften van jouw bank en spaarrekeningen*</label>
                            <div className="row">
                                <div className="col-11">
                                    <input type="file" className="form-control" id required />
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-11">
                                    <p>Heb jij nog openstaande schulden?</p>
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="eigenOnderneming" id="eigenOndernemingJa" defaultValue="ja" />
                                    <label className="form-check-label" htmlFor="eigenOndernemingJa">Ja</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="eigenOnderneming" id="eigenOndernemingNee" defaultValue="nee" />
                                    <label className="form-check-label" htmlFor="eigenOndernemingNee">Nee</label>
                                </div>
                            </div>
                            <label className="form-label">Overzicht lijst met schulden*</label>
                            <div className="row">
                                <div className="col-11">
                                    <input type="file" className="form-control" id required />
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-3">Aanvullende documenten die voor jullie <span>beide</span> gelden</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-11">
                                    <label className="form-label">
                                        Hebben jullie al een taxatierapport?*
                                    </label>
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="eigenOnderneming" id="eigenOndernemingJa" defaultValue="ja" />
                                    <label className="form-check-label" htmlFor="eigenOndernemingJa">Ja</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="eigenOnderneming" id="eigenOndernemingNee" defaultValue="nee" />
                                    <label className="form-check-label" htmlFor="eigenOndernemingNee">Nee</label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="kopiePaspoortAanvrager" className="form-label">
                                    Taxatierapport*</label>
                                <div className="row">
                                    <div className="col-11">
                                        <input type="file" className="form-control" id="kopiePaspoortAanvrager" required />
                                    </div>
                                    <div className="col-1 p-0">
                                        <a href="javascript:void(0);">
                                            <i className="fas fa-info-circle" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-11">
                                    <p>
                                        Hebben jullie een kopie van een voorlopige koopcontract bij een bestaande woning of de koop/aanneemovereenkomst bij een nieuwbouwwoning ?*
                                    </p>
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="eigenOnderneming" id="eigenOndernemingJa" defaultValue="ja" />
                                    <label className="form-check-label" htmlFor="eigenOndernemingJa">Ja</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="eigenOnderneming" id="eigenOndernemingNee" defaultValue="nee" />
                                    <label className="form-check-label" htmlFor="eigenOndernemingNee">Nee</label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="kopiePaspoortAanvrager" className="form-label">
                                    Voorlopige koopcontract of koop aanneemovereenkomst*</label>
                                <div className="row">
                                    <div className="col-11">
                                        <input type="file" className="form-control" id="kopiePaspoortAanvrager" required />
                                    </div>
                                    <div className="col-1 p-0">
                                        <a href="javascript:void(0);">
                                            <i className="fas fa-info-circle" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-11">
                                    <label className="form-label">
                                        Heb jij of een van jullie nog een lopende i hypotheek?
                                    </label>
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="eigenOnderneming" id="eigenOndernemingJa" defaultValue="ja" />
                                    <label className="form-check-label" htmlFor="eigenOndernemingJa">Ja</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="eigenOnderneming" id="eigenOndernemingNee" defaultValue="nee" />
                                    <label className="form-check-label" htmlFor="eigenOndernemingNee">Nee</label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="kopiePaspoortAanvrager" className="form-label">
                                    Recente opgave hypotheek*</label>
                                <div className="row">
                                    <div className="col-11">
                                        <input type="file" className="form-control" id="kopiePaspoortAanvrager" required />
                                    </div>
                                    <div className="col-1 p-0">
                                        <a href="javascript:void(0);">
                                            <i className="fas fa-info-circle" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-11">
                                    <p>
                                        Hebben jullie een kopie van de polis en de laatste waarde-opgave als er aan de hypotheek een spaarrekening of verzekering is gekoppeld?*
                                    </p>
                                </div>
                                <div className="col-1 p-0">
                                    <a href="javascript:void(0);">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="eigenOnderneming" id="eigenOndernemingJa" defaultValue="ja" />
                                    <label className="form-check-label" htmlFor="eigenOndernemingJa">Ja</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="eigenOnderneming" id="eigenOndernemingNee" defaultValue="nee" />
                                    <label className="form-check-label" htmlFor="eigenOndernemingNee">Nee</label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="kopiePaspoortAanvrager" className="form-label">
                                    Kopie lopende overlijdensrisico en/of woonlastenverzekering*</label>
                                <div className="row">
                                    <div className="col-11">
                                        <input type="file" className="form-control" id="kopiePaspoortAanvrager" required />
                                    </div>
                                    <div className="col-1 p-0">
                                        <a href="javascript:void(0);">
                                            <i className="fas fa-info-circle" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="kopiePaspoortAanvrager" className="form-label">
                                    Kopie laatste waarde-opgave*</label>
                                <div className="row">
                                    <div className="col-11">
                                        <input type="file" className="form-control" id="kopiePaspoortAanvrager" required />
                                    </div>
                                    <div className="col-1 p-0">
                                        <a href="javascript:void(0);">
                                            <i className="fas fa-info-circle" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoanDocuments
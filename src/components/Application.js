
const Application = () => {

    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            id="review-form"
            className="review-form p-50 mt-50 mb-30"
            name="review-form"
            action="#"
            method="post"
        >
            <h3>E-prijava</h3>
            <div className="row mt-25">
                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            type="text"
                            id="full-name"
                            name="full-name"
                            className="form-control"
                            defaultValue=""
                            placeholder="Ime i prezime"
                            required=""
                        />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            type="text"
                            id="date-of-birth"
                            name="date-of-birth"
                            className="form-control"
                            defaultValue=""
                            placeholder="Datum rodjenja"
                            required=""
                        />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            type="text"
                            id="address"
                            name="address"
                            className="form-control"
                            defaultValue=""
                            placeholder="Adresa"
                            required=""
                        />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            type="email"
                            id="shop-email"
                            name="shop-email"
                            className="form-control"
                            defaultValue=""
                            placeholder="Email"
                            required=""
                        />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            className="form-control"
                            defaultValue=""
                            placeholder="Kontakt telefon"
                            required=""
                        />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            type="text"
                            id="status"
                            name="status"
                            className="form-control"
                            defaultValue=""
                            placeholder="Status"
                            required=""
                        />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <textarea
                            name="message"
                            id="message"
                            className="form-control"
                            rows={4}
                            placeholder="Ukoliko imate nesto da dodate, poslovi koji vas zanimaju, napisite ovde"
                            required=""
                            defaultValue={""}
                        />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group mb-0">
                        <button type="submit" className="theme-btn style-four">
                            posaljite prijavu <i className="fas fa-arrow-right" />
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )

}
export default Application;
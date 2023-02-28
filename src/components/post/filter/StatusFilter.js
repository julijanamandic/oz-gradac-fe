const StatusFilter = () => {

    return (

        <div className="widget widget-radio wow fadeInUp delay-0-2s">

            <h4 className="widget-title">Status</h4>

            <form

                onSubmit={(e) => e.preventDefault()}

                className="newsletter-form"

                action="#"

            >

                <div className="custom-control custom-radio">

                    <input

                        type="radio"

                        className="custom-control-input"

                        id="all-course"

                        name="filter"

                        defaultChecked=""

                    />

                    <label

                        className="custom-control-label"

                        htmlFor="all-course"

                    >

                        Svi <span>(205)</span>

                    </label>

                </div>

                <div className="custom-control custom-radio">

                    <input

                        type="radio"

                        className="custom-control-input"

                        id="premium-course"

                        name="filter"

                    />

                    <label

                        className="custom-control-label"

                        htmlFor="premium-course"

                    >

                        Ucenici i studenti <span>(159)</span>

                    </label>

                </div>

                <div className="custom-control custom-radio">

                    <input

                        type="radio"

                        className="custom-control-input"

                        id="free-course"

                        name="filter"

                    />

                    <label

                        className="custom-control-label"

                        htmlFor="free-course"

                    >

                        Studenti <span>(65)</span>

                    </label>

                </div>

                <div className="custom-control custom-radio">

                    <input

                        type="radio"

                        className="custom-control-input"

                        id="free-course"

                        name="filter"

                    />

                    <label

                        className="custom-control-label"

                        htmlFor="free-course"

                    >

                        Nezaposleni do 30 god <span>(65)</span>

                    </label>

                </div>

            </form>

        </div>
    )
}
export default StatusFilter;
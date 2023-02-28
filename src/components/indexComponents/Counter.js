import Counter from "../Counter";

const CounterSection = () => {
    return (
        <div className="counter-section-three">
            <div className="container">
                <div className="counter-three-wrap bg-light-blue text-white">
                    <div className="success-item">
                        <span
                            className="count-text plus"
                            data-speed={3000}
                            data-stop={500}
                        >
                            <Counter end={500} />
                        </span>
                        <span>
                            Profesionalnih
                            <br />
                            Usluga
                        </span>
                    </div>
                    <div className="success-item">
                        <span
                            className="count-text plus"
                            data-speed={3000}
                            data-stop={1000}
                        >
                            <Counter end={1000} />
                        </span>
                        <span>
                            Clanova
                        </span>
                    </div>
                    <div className="success-item">
                        <span
                            className="count-text percent"
                            data-speed={3000}
                            data-stop="100"
                        >
                            <Counter end={100} />
                        </span>
                        <span>
                            Zadovoljnih
                            <br />
                            Klijenata
                        </span>
                    </div>
                    <div className="success-item">
                        <span
                            className="count-text plus"
                            data-speed={3000}
                            data-stop={600}
                        >
                            <Counter end={600} />
                        </span>
                        <span>
                            Poslodavaca
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CounterSection;
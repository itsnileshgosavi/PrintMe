import Benifit from "./Benifit"


const BenifitsList = () => {
    return (
        <div className="flex md:flex-row flex-col justify-around items-center space-y-5 space-x-10">
            <Benifit
                image="https://printify.com/pfh/assets/legacy/higher-profits.svg"
                title="Higher Profits"
                description="We offer some of the lowest prices in the industry because print providers continuously compete to win your business.." />
            <Benifit
                image="https://printify.com/pfh/assets/legacy/robust-scaling.svg"
                title="Robust Scaling"
                description="We offer some of the lowest prices in the industry because print providers continuously compete to win your business.." />
            <Benifit
                image="https://printify.com/pfh/assets/legacy/best-selection.svg"
                title="Best Selection"
                description="We offer some of the lowest prices in the industry because print providers continuously compete to win your business.." />
        </div>
    )
}

export default BenifitsList
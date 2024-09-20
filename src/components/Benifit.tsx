

const Benifit = ({image, title, description}:{image:string, title:string, description:string,}) => {
  return (
    <div className="flex flex-col space-y-5 items-start text-start w-80">
        <figure>
            <img src={image} alt="feature image" className="w-24 h-24" />
        </figure>
        <div className="flex flex-col space-y-5">
            <h3 className="text-3xl font-bold">{title}</h3>
            <p className="text-gray-500 text-sm">{description}</p>
        </div>
    </div>
  )
}

export default Benifit
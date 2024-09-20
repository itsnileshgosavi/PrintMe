

const RatingStars = ({ rating }: { rating: number }) => {
    const arr =new Array(5).fill(0); //creating dummy array of length 5 to render stars
  return (
    <div className='flex justify-start items-center my-2'>
      {arr.map((_, i) => i < Math.round(rating) ? <img className='w-5 h-5' key={i} src={"https://raw.githubusercontent.com/itsnileshgosavi/shoppyglobe/refs/heads/master/src/assets/img/starfilled.png"} alt="star filled" /> : <img key={i} src={"https://raw.githubusercontent.com/itsnileshgosavi/shoppyglobe/refs/heads/master/src/assets/img/star.png"} alt="star" className='w-4 h-4' />)}
    </div>
  )
}

export default RatingStars
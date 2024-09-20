import Button from "./Button"


const TalkToSales = () => {
  return (
    <div className="bg-green-100 w-[95%] md:w-[80%] flex relative justify-between items-center p-3 md:p-12 my-20 mx-auto rounded-xl shadow-xl">
      {/* 
        The green background and the image in the right side of the div are positioned absolute
        and the z-index is set to -1 to make the button and the text appear on top of them
      */}
      <div className="z-50">
        {/* The text and the button are positioned absolute and the z-index is set to 10 to make them appear on top of the background and the image */}
        <h6 className="text-green-950 font-bold text-xl z-10">Are you a large business looking for custom solutions?</h6>
      </div>
      <img
        src="https://printify.com/pfh/media/talk-to-sales-N2GDBAGC.svg"
        className="absolute right-0 rounded-r-xl"
        alt=""
      />
      <Button
        variant="ghost"
        size="md"
        className="bg-white z-10 text-xs md:text-md"
      >
        Talk to Sales
      </Button>
    </div>
  );
};

export default TalkToSales
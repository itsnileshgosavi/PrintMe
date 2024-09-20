const Button = ({ variant, size, className, children }: { variant?: string, size?: string, className?: string ,children: React.ReactNode }) => {
    let buttonStyle = `${className} px-4 py-2 font-bold`;
    
    switch (variant) {
      case "primary":
        buttonStyle += " bg-green-600 text-white hover:bg-green-700 font-extrabold";
        break;
      case "secondary":
        buttonStyle += " bg-gray-300 text-gray-800";
        break;
      case "ghost":
        buttonStyle += " bg-transparent text-gray-800 border border-black hover:text-green-600 hover:border-green-600";
        break;
      case "square":
        buttonStyle += " rounded-none";
        break;
      default:
        buttonStyle += " bg-blue-500 text-white";
    }
  
    switch (size) {
      case "sm":
        buttonStyle += " text-sm";
        break;
      case "lg":
        buttonStyle += " text-lg";
        break;
      default:
        buttonStyle += " text-base";
    }
  
    return (
      <button className={buttonStyle}>
        {children}
      </button>
    );
  };
  
  export default Button;
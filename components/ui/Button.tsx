type ButtonProps = {
    text: string;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
  };
  
  export default function Button({
    text,
    variant = "primary",
    size = "md",
  }: ButtonProps) {
  
    const baseStyles =
      "rounded-2xl font-bold transition-all duration-300 cursor-pointer";
  
    const variants = {
  
      primary:
        "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 shadow-xl",
  
      secondary:
        "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 shadow-xl",
  
      outline:
        "border-2 border-white text-white hover:bg-white hover:text-black",
    };
  
    const sizes = {
  
      sm: "px-4 py-2 text-sm",
  
      md: "px-6 py-3 text-base",
  
      lg: "px-8 py-4 text-lg",
    };
  
    return (
  
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      >
  
        {text}
  
      </button>
  
    );
  }
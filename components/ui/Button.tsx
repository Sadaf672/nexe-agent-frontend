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

  const variants = {

    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_30px_rgba(6,182,212,0.4)]",

    secondary:
      "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_30px_rgba(168,85,247,0.4)]",

    outline:
      "border border-white/20 bg-white/5 backdrop-blur-md text-white",

  };

  const sizes = {

    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",

  };

  return (

    <button
      className={`rounded-2xl font-bold transition-all duration-300 hover:scale-105 ${variants[variant]} ${sizes[size]}`}
    >

      {text}

    </button>
  );
}
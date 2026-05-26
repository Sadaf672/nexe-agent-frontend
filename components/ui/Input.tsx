type InputProps = {
    placeholder: string;
    type?: string;
  };
  
  export default function Input({
    placeholder,
    type = "text",
  }: InputProps) {
  
    return (
  
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 px-5 py-4 rounded-2xl outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/30 transition-all duration-300 shadow-lg"
      />
  
    );
  }
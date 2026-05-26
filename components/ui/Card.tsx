type CardProps = {
    title: string;
    description: string;
  };
  
  export default function Card({
    title,
    description,
  }: CardProps) {
  
    return (
  
      <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-all duration-300">
  
        <h2 className="text-3xl font-bold text-white mb-4">
  
          {title}
  
        </h2>
  
        <p className="text-gray-300 leading-8">
  
          {description}
  
        </p>
  
      </div>
  
    );
  }
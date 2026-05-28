type CardProps = {
  title: string;
  description: string;
};

export default function Card({
  title,
  description,
}: CardProps) {

  return (

    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-8 hover:scale-105 transition-all duration-300 shadow-2xl">

      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 mb-6"></div>

      <h2 className="text-3xl font-bold text-white mb-4">

        {title}

      </h2>

      <p className="text-gray-400 leading-8 text-lg">

        {description}

      </p>

    </div>
  );
}
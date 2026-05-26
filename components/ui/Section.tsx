type SectionProps = {
    title: string;
    subtitle: string;
    children: React.ReactNode;
  };
  
  export default function Section({
    title,
    subtitle,
    children,
  }: SectionProps) {
  
    return (
  
      <section className="mb-20">
  
        {/* Heading */}
        <div className="mb-10">
  
          <h2 className="text-5xl font-extrabold text-white mb-4">
  
            {title}
  
          </h2>
  
          <p className="text-gray-400 text-lg">
  
            {subtitle}
  
          </p>
  
        </div>
  
        {/* Content */}
        <div>
  
          {children}
  
        </div>
  
      </section>
    );
  }
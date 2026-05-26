type ToastProps = {
    message: string;
  };
  
  export default function Toast({
    message,
  }: ToastProps) {
  
    return (
  
      <div className="fixed top-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-5 rounded-2xl shadow-2xl text-lg font-bold animate-bounce z-50">
  
        {message}
  
      </div>
  
    );
  }
type NavbarProps = {
  openSidebar: () => void;
};

export default function Navbar({
  openSidebar,
}: NavbarProps) {

  return (

    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white px-6 py-5 flex items-center justify-between z-50">

      {/* Left */}
      <div className="flex items-center gap-4">

        {/* Hamburger */}
        <button
          onClick={openSidebar}
          className="flex flex-col gap-1"
        >

          <span className="w-6 h-[3px] bg-white rounded"></span>

          <span className="w-6 h-[3px] bg-white rounded"></span>

          <span className="w-6 h-[3px] bg-white rounded"></span>

        </button>

        <h1 className="font-bold text-2xl">
          Sadaf Khan Dev
        </h1>

      </div>

      {/* Right */}
      <div className="hidden md:flex gap-8 text-lg">

        <a
          href="#home"
          className="hover:text-cyan-400 transition"
        >
          Home
        </a>

        <a
          href="#features"
          className="hover:text-cyan-400 transition"
        >
          Features
        </a>

        <a
          href="#testimonials"
          className="hover:text-cyan-400 transition"
        >
          Testimonials
        </a>

      </div>

    </nav>
  );
}





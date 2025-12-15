export function TopBar() {
  return ( 
    <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-20 py-6">
      <div className="flex justify-between items-center">
        {/* Logo/Name on the left */}
        <div className="text-2xl font-bold text-white">
          Trejo
        </div>
        
        {/* Navigation links on the right */}
        <ul className="flex gap-8 items-center">
          <li>
            <a 
              href="#about" 
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
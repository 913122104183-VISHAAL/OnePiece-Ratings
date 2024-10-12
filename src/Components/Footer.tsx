const NavBar = () => {
  return (
    <footer className="bg-black text-white font-semibold shadow-lg px-10 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-left">
          <h2 className="text-3xl font-bold mb-2">ONE PIECE</h2>
          <p className="mb-4 text-lg italic">Greatest Anime Of All Time!!</p>
        </div>
        <div className="flex space-x-8">
          <a href="/about" className="hover:underline hover:text-orange-600 transition duration-200">About Us</a>
          <a href="/contact" className="hover:underline hover:text-orange-600 transition duration-200">Contact Us</a>
        </div>
      </div>
      <div className="text-center mt-4 text-sm">
        &copy; {new Date().getFullYear()} OnePiece. All rights reserved.
      </div>
    </footer>
  );
};

export default NavBar;

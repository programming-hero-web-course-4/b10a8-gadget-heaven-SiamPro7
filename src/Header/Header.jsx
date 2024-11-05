
// Import the image

const Header = () => {
    return (
      <div>
        <header className="relative h-96  px-4  bg-purple-600 text-white p-8 rounded-b-lg">
          {/* Container for main content */}
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>

          {/* Image Section */}
          <div className="  mt-8">
            <img
              src="/assets/banner.jpg" // Replace with actual image path
              alt="VR Headset"
              className="border-8 object-cover border-sky-50 absolute bottom-100 left-1/2 transform -translate-x-1/2 w-80 md:h-80 md:w-[37rem] rounded-lg shadow-lg"
            />
          </div>
        </header>
      </div>
    );
};

export default Header;
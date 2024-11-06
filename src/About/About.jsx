import { NavLink } from "react-router-dom";


const AboutUs = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 py-12 px-4 md:px-8 lg:px-16 text-gray-800">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">About Us</h2>
      <p className="text-lg max-w-3xl text-center mb-6">
        Welcome to{" "}
        <span className="font-semibold text-purple-700">Gadget Heaven</span> –
        your ultimate destination for the latest and most innovative tech
        gadgets. We are passionate about technology and committed to bringing
        you the finest selection of products from around the globe.
      </p>

      <div className="max-w-4xl space-y-4 text-gray-700 text-center">
        <p>
          Our journey started with a simple mission: to make cutting-edge
          technology accessible to everyone. Whether you’re a tech enthusiast, a
          professional, or just someone looking to enhance your digital life,
          we’ve got you covered with a wide range of gadgets that blend
          functionality, style, and innovation.
        </p>

        <p>
          At{" "}
          <span className="font-semibold text-purple-700">Gadget Heaven</span>,
          we believe in quality, affordability, and excellent customer service.
          Our team works tirelessly to curate the latest devices and
          accessories, ensuring that every product we offer meets our high
          standards for performance and durability.
        </p>

        <p>
          Join us on this exciting journey as we explore the future of
          technology together. We’re here to empower you with gadgets that
          elevate your experience and bring the future into your hands. From the
          latest smartphones to smart home devices, we’re committed to making
          Gadget Heaven a place where tech dreams come true.
        </p>
      </div>

      <div className="mt-8">
        <NavLink to='/' className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800">
          Discover Our Products
        </NavLink>
      </div>
    </div>
  );
};

export default AboutUs;

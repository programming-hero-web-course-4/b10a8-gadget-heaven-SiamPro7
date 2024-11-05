

const Footer = () => {
    return (
      // Footer.js


 

    <footer className="bg-gray-200 py-10">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold">Gadget Heaven</h2>
        <p className="text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div className="border-t border-gray-200 pt-6">
        <div className="flex justify-around ">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Services</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-500">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Company</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-500">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-500">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );


   
};

export default Footer;
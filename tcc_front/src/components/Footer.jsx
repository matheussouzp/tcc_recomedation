import React from "react";

const Footer = () => {
    return (

<footer className="bg-gray-800 text-white py-8 ">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <h4 className="font-bold mb-2">Get to Know Us</h4>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Press Releases
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Make Money with Us</h4>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Sell on Our Store
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Become an Affiliate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Advertise Your Products
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Customer Service</h4>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Order Tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Returns & Refunds
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Connect with Us</h4>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        );
    };
    
    export default Footer;  
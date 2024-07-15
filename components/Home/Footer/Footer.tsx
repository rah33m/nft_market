import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-12 pb-12">
      <div className="w-4/5 mx-auto grid grid-cols-1 border-b-[1.5px] border-b-slate-300 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start">
        {/* Footer Left */}
        <div>
          <div className="text-2xl text-red-700 font-semibold mb-4">
            NFT Marketplace
          </div>
          <p className="text-gray-700 text-sm mt-2">
            Non laborum sit Lorem commodo.
          </p>
          <div className="mt-4 flex items-center space-x-4">
            <FaFacebookF className="w-6 h-6 text-blue-700" />
            <FaTwitter className="w-6 h-6 text-sky-500" />
            <FaYoutube className="w-6 h-6 text-rose-700" />
            <FaInstagram className="w-6 h-6 text-pink-600" />
          </div>
        </div>
        {/* Footer Left Middle */}
        <div className="md:mx-auto mx-0">
          <h1 className="footer__title">Marketplace</h1>
          <p className="footer__link">All NFT's</p>
          <p className="footer__link">Art</p>
          <p className="footer__link">Music</p>
          <p className="footer__link">Collectables</p>
          <p className="footer__link">Wallets</p>
        </div>
        {/* Footer Right Middle */}
        <div className="md:mx-auto mx-0">
          <h1 className="footer__title">Links</h1>
          <p className="footer__link">All NFT's</p>
          <p className="footer__link">Art</p>
          <p className="footer__link">Music</p>
          <p className="footer__link">Collectables</p>
          <p className="footer__link">Wallets</p>
        </div>
        {/* Footer Right */}
        <div className="md:mx-auto mx-0">
          <h1 className="footer__title">More Links</h1>
          <p className="footer__link">All NFT's</p>
          <p className="footer__link">Art</p>
          <p className="footer__link">Music</p>
          <p className="footer__link">Collectables</p>
          <p className="footer__link">Wallets</p>
        </div>
        <div className="text-center mt-4 text-sm text-black opacity-75">
          <p>Copyright 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

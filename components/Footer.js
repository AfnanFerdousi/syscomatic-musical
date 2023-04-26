import Image from 'next/image';
import React from 'react';
import fb from '../public/assets/fb.png';
import insta from '../public/assets/insta.png';
import yt from '../public/assets/yt.png';
import twi from '../public/assets/twi.png';

const Footer = () => {
  const items = [
    {
      title: 'Product',
      children: ['Features', 'Integrations', 'Pricing plans', 'Product updates'],
    },
    {
      title: 'Resources',
      children: ['Blog', 'User guides', 'Community', 'Developers', 'Legal', 'Privacy'],
    },
    {
      title: 'Company',
      children: ['About us', 'Careers'],
    },
  ];

  return (
    <footer className="text-[#fff] px-8 pt-16">
      <div className="container mx-auto flex flex-wrap justify-between">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col mb-8 md:w-auto w-full md:mb-0">
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            {item.children.map((child) => (
              <a key={child} href="#" className="text-sm mb-2 hover:text-white">
                {child}
              </a>
            ))}
          </div>
        ))}
        <div className="flex flex-col mb-8 md:w-auto w-full md:mb-0">
          <h3 className="text-xl font-bold mb-4">Subscribe to our newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-sm py-2 px-4 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 border-2 border-transparent bg-clip-padding box-content border-gradient-t-blue-to-purple"
            />
            <button
              type="submit"
              className="bg-[#1FC2C7] text-white py-2 px-4 rounded-r-lg hover:bg-blue-700 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row justify-between my-6 items-center">
        <p className="text-[14px] mb-4 md:mb-0">©️ 2023 AnyDemo, Inc . Privacy . Terms . Sitemap</p>
        <div className="flex gap-x-2">
          <Image src={fb} alt="fb" />
          <Image src={yt} alt="yt" />
          <Image src={insta} alt="insta" />
          <Image src={twi} alt="twi" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

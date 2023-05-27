import React from 'react';
import { Button } from 'baseui/button';
import { Block } from 'baseui/block';
import FeatherIcon from 'feather-icons-react';


const FooterPage = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p className="text-sm">123 Main Street, City, Country</p>
            <p className="text-sm">Email: example@example.com</p>
            <p className="text-sm">Phone: +1 123 456 7890</p>
          </div>

          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <Block display="flex" alignItems="center" marginBottom="10px">
              <Button startEnhancer={<FeatherIcon icon="facebook"/>}>
                Facebook
              </Button>
            </Block>
            <Block display="flex" alignItems="center" marginBottom="10px">
              <Button startEnhancer={<FeatherIcon icon="twitter"/>} >
                Twitter
              </Button>
            </Block>
            <Block display="flex" alignItems="center">
              <Button startEnhancer={<FeatherIcon icon="instagram"/>}>
                Instagram
              </Button>
            </Block>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <p className="text-center text-sm">© 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterPage;

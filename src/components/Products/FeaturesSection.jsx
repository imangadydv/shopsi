import React from "react";
import {
  HiArrowPathRoundedSquare,
  HiOutlineCreditCard,
  HiShoppingBag,
} from "react-icons/hi2";

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiShoppingBag className="text-3xl" />
          </div>
          <h4 className="mb-2 tracking-tighter uppercase">
            free international shipping
          </h4>
          <p className="text-gray-600 text-sm">On all orders over €100</p>
        </div>
        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiArrowPathRoundedSquare className="text-3xl" />
          </div>
          <h4 className="mb-2 tracking-tighter uppercase">45 days return</h4>
          <p className="text-gray-600 text-sm">Money back guarantee</p>
        </div>
        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiOutlineCreditCard className="text-3xl" />
          </div>
          <h4 className="mb-2 tracking-tighter uppercase">secure checkout</h4>
          <p className="text-gray-600 text-sm">100% secured checkout process</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

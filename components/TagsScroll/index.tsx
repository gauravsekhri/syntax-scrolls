import React from "react";

const TagsScroll = () => {
  return (
    <>
      <div className="mb-6 relative flex overflow-x-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <div className="py-12 animate-marquee whitespace-nowrap">
          <span className="text-xl text-primary font-bold mx-24 cursor-pointer hover:underline">
            #item-1
          </span>
          <span className="text-xl text-primary font-bold mx-24 cursor-pointer hover:underline">
            #item-2
          </span>
          <span className="text-xl text-primary font-bold mx-24 cursor-pointer hover:underline">
            #item-3
          </span>
          <span className="text-xl text-primary font-bold mx-24 cursor-pointer hover:underline">
            #item-4
          </span>
          <span className="text-xl text-primary font-bold mx-24 cursor-pointer hover:underline">
            #item-5
          </span>
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span className="text-xl text-primary font-bold mx-24 cursor-pointer hover:underline">
            #item-1
          </span>
          <span className="text-xl text-primary font-bold mx-24 cursor-pointer hover:underline">
            #item-2
          </span>
          <span className="text-xl text-primary font-bold mx-24 cursor-pointer hover:underline">
            #item-3
          </span>
          <span className="text-xl text-primary font-bold mx-24 cursor-pointer hover:underline">
            #item-4
          </span>
          <span className="text-xl text-primary font-bold mx-24 cursor-pointer hover:underline">
            #item-5
          </span>
        </div>
      </div>
    </>
  );
};

export default TagsScroll;

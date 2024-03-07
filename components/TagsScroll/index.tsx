import React from "react";

const TagsScroll = () => {
  return (
    <>
      <div className="mb-6 relative flex overflow-x-hidden hidden lg:block [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <div className="py-12 animate-marquee whitespace-nowrap">
          <span className="text-xl text-primary font-bold mx-24 cursor-pointer hover:underline">
            #react
          </span>
          <span className="text-xl text-primary font-bold mx-24 cursor-pointer hover:underline">
            #javascript
          </span>
          <span className="text-xl text-primary font-bold mx-24 cursor-pointer hover:underline">
            #nextjs
          </span>
          <span className="text-xl text-primary font-bold mx-24 cursor-pointer hover:underline">
            #mongodb
          </span>
          <span className="text-xl text-primary font-bold mx-24 cursor-pointer hover:underline">
            #coding
          </span>
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span className="text-xl text-primary font-bold mx-24 cursor-pointer hover:underline">
            #react
          </span>
          <span className="text-xl text-primary font-bold mx-24 cursor-pointer hover:underline">
            #javascript
          </span>
          <span className="text-xl text-primary font-bold mx-24 cursor-pointer hover:underline">
            #nextjs
          </span>
          <span className="text-xl text-primary font-bold mx-24 cursor-pointer hover:underline">
            #mongodb
          </span>
          <span className="text-xl text-primary font-bold mx-24 cursor-pointer hover:underline">
            #coding
          </span>
        </div>
      </div>
    </>
  );
};

export default TagsScroll;

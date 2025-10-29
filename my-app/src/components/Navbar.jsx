import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="bg-[var(--primary)] p-1">
        <div className="md:w-9/12 mx-auto flex justify-between ">
          <div className="">
            <img src="./ganesh.png" alt="ganesh ji" className="w-40" />
          </div>

          <div>
            <img src="./shubh_labh_rm.jpg" alt="subh-labh" className=""/>
          </div>
          <div>
            <img src="./lakshmi.png" alt="laxmi ji" className="w-40 aspect-1/1" />
          </div>
        </div>
      </div>

      <div className="w-9/12 mx-auto ">
        <ul className="flex px-4 py-1 gap-4 justify-center font-semibold md:text-lg ">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;

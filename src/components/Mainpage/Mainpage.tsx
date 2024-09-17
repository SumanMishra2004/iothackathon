import React from "react";

function Mainpage() {
  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-4 bg-red-300">
      <div className="col-span-3 row-span-2 bg-green-200">1</div>
      <div className="col-span-2 row-start-3 bg-green-200">2</div>
      <div className="col-start-3 row-start-3 bg-green-200">3</div>
      <div className="col-span-3 row-span-2 row-start-4 bg-green-200">4</div>
    </div>
  );
}

export default Mainpage;

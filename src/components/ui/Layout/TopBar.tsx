import type React from "react";

const TopBar: React.FC = () => {

  return <>
    <div className="w-full bg-white border-b-2 border-gray-200 shadow-md p-4 flex justify-between items-center">
      <p className="text-gray-800">Top bar with bottom shadow.</p>
    </div>
  </>
}

export default TopBar;

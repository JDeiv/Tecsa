import React from "react";

interface Props{
  title: string;
}

const ButtonDefault:React.FC<Props> = ({title}) => {
  return (
    <button
      type="button"
      disabled
      className="text-white bg-blue-700  
            focus:outline-none focus:ring-4 focus:ring-blue-300 
            font-medium rounded-full text-sm px-5 py-2.5 text-center 
            mr-2 mb-8 dark:bg-blue-600 dark:hover:bg-blue-700
             dark:focus:ring-blue-800 lg:block hidden"
    >
      {title}
    </button>
  );
};

export default ButtonDefault;

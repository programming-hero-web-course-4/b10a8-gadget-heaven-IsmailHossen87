import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const Category = () => {
  const category = useLoaderData()
    return (
        <div role="tablist" className="flex flex-col rounded-md gap-3 my-4 py-4 border w-[25%]">

           {/* All Card Button */}
      <NavLink
        to="/category/all"
        role="tab"
        className={({ isActive }) =>
          `tab text-xl mx-6 ${isActive ? "tab-active bg-purple-500 text-white rounded-full font-semibold" : "bg-gray-200 text-black rounded-full"}`
        }
      >
        All Card
      </NavLink>
      {/* show category wise Card */}
          {category.map((data) => (
            <NavLink
              to={`/category/${data.category_name}`}
              role="tab"
              className={({ isActive }) =>
                `tab text-xl mx-6 ${isActive ? "tab-active bg-purple-500 text-white rounded-full font-semibold" : "bg-gray-200 text-black rounded-full"}`
              }
            >
              {data.category_name}
              
            </NavLink>
          ))}
        </div>
      );
};

export default Category;
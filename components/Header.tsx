'use client';

import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import Avatar from 'react-avatar';

const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-4 bg-slate-700/10 md:justify-between rounded-b-xl">


        <div
          className="absolute top-0 left-0 w-full h-56 
         bg-gradient-to-r from-violet-500 to-fuchsia-500
          rounded-md filter blur-3xl opacity-20 -z-50"
        />
        <h2 className="text-cyan-800 text-[2rem] font-bold pb-10 md:pb-0 ">
          Trello
        </h2>
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-gray-900 rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
            <input
              type="text"
              className="bg-transparent flex-1 outline-none"
              placeholder="Search"
            />
            <button
              type="submit"
              className="bg-cyan-800 text-white rounded-md p-2"
            >
              Search
            </button>
          </form>

          <Avatar 
        
            name="Prince Nmezi"
            size="40"
            color="#ff7b00"
            round={true}/>
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex items-center justify-center text-sm 
         p-5 shadow-xl rounded-xl w-fit bg-gray-300  italic max-w-3xl text-cyan-700">
          <UserCircleIcon className="w-10 h-10 inline-block  text-cyan-500 mr-2" />  
          GPT is summarizing the text you enter.
        </p>
      </div>
    </header>
  );
};

export default Header;

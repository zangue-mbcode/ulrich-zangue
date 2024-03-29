"use client";
import { ThemeToggle } from "../theme/theme-toggle";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/70  backdrop-blur-2xl  dark:bg-black/70 ">
      <div className=" flex items-center justify-between py-3 w-full px-6 sm:px-8 lg:px-12  max-w-screen-xl m-auto gap-1">
       <div>
          Ulrich
       </div>
       <div>
        <ThemeToggle/>
       </div>
       
      </div>
    </header>
  );
};

export default Header;

import React, { useEffect } from "react";
import styles from "./style.module.scss";
import ThemeSwitch from "./../../components/themeswitch/themeswitch";

const Home = () => {
  return (
    <>
      <div className="relative h-screen w-full bg-white dark:bg-black">
        <div className="border-2 flex flex-col justify-center items-center text-center h-3/4">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            We invest in the world’s potential
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

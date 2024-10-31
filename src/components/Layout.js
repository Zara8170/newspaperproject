import React from "react";
import { useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const nav = useNavigate();

  const onClickHeader = () => {
    nav("/");
  };

  return (
    <div className="w-full h-screen bg-[#EFEFEF]">
      <header className="w-full h-[130px] fixed top-0 left-0 bg-white z-50">
        <img
          onClick={onClickHeader}
          className="cursor-pointer absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 mix-blend-difference"
          src="/3491271 1.png"
        />
      </header>
      <main className="w-[1054px] h-[700px] border border-black absolute top-[170px] left-2/4 -translate-x-2/4 p-[30px] overflow-hidden overflow-y-scroll">
        {children}
      </main>
    </div>
  );
}

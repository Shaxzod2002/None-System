import React, { useState } from "react";

export default function User() {
  const [user, setUser] = useState(false);
  return (
    <div className="user flex items-center gap-3 cursor-pointer relative mr-5">
      <div onClick={() => (!user ? setUser(true) : setUser(false))}>
        <img src={require("../image/user.png")} className="w-7" alt="user" />
      </div>
      <div
        className={
          "w-[200px] h-[100px] bg-black rounded-xl absolute top-[200%] right-[-50%] shadow-lg shadow-[gray] z-50 flex justify-center items-center flex-col gap-2 text-white scale-0 " +
          (user ? "scale-100" : "scale-0")
        }
      >
        <div className="w-[30px] h-[20px] vector absolute bg-black bottom-full right-[15px] shadow-lg shadow-[gray]"></div>
        <p>example@gmail.com</p>
        <button onClick={() => (!user ? setUser(true) : setUser(false))}>
          Chiqish
        </button>
      </div>
    </div>
  );
}

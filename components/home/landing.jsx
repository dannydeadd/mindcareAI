'use client';

import Link from "next/link";
import Image from "next/image";
import Images from "../layout/images";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import { useSignInModal } from "../layout/sign-in-modal";
import UserDropdown from "../layout/user-dropdown";

export default function Landing({ session }) {
  const { setShowSignInModal, SignInModal } = useSignInModal();

  const handleSignInClick = () => {
    setShowSignInModal(true);
  };

  // console.log(session)
  return (
    <>
      {/* <div className="ml-24 items-center z-10 w-full max-w-3xl px-5 xl:px-0 mr-auto mb-28"> */}

      <header className="grid h-screen place-items-center bg-gradient-to-br from-white to-green-200 min-w-full">

        <div className="flex flex-col text-center">
          <h1
            className="animate-fade-up bg-gradient-to-br from-green-400 to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            <p className="w-[1000px]">Welcome to MindCareAI:</p>
            <p>your mental health matters</p>
          </h1>
          <p
            className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            <Balancer className=" ml-3">
              Your personal companion on the journey to mental wellness and overall mental health. 
            </Balancer>
          </p>

          {session ? <div className="animate-fade-up"><Link href="/chat" onClick={handleSignInClick}>
            
          <button className="my-5 text-xl relative inline-flex items-center 
            justify-start py-3 pl-4 pr-12 overflow-hidden 
            font-semibold text-stone-600 transition-all
             duration-150 ease-in-out rounded hover:pl-10 hover:pr-6
              bg-white group">
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150
                 ease-in-out bg-gradient-to-br from-green-400 to-stone-500 group-hover:h-full">
              </span><span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                  </path></svg></span><span class="absolute left-0 pl-2.5 -translate-x-12
                       group-hover:translate-x-0 ease-out duration-200">
                <svg class="w-5 h-5 text-stone-100" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                  </path></svg></span><span class="relative w-full text-left transition-colors
                   duration-200 ease-in-out group-hover:text-white">Try it!</span></button>

          </Link></div> : (
            <div className="mt-3 animate-fade-up" onClick={handleSignInClick}>
       <button className="my-5 text-xl relative inline-flex items-center 
            justify-start py-3 pl-4 pr-12 overflow-hidden 
            font-semibold text-stone-600 transition-all
             duration-150 ease-in-out rounded hover:pl-10 hover:pr-6
              bg-white group">
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150
                 ease-in-out bg-gradient-to-br from-green-400 to-stone-500 group-hover:h-full">
              </span><span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                  </path></svg></span><span class="absolute left-0 pl-2.5 -translate-x-12
                       group-hover:translate-x-0 ease-out duration-200">
                <svg class="w-5 h-5 text-stone-100" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                  </path></svg></span><span class="relative w-full text-left transition-colors
                   duration-200 ease-in-out group-hover:text-white">Try it!</span></button>
              <SignInModal />
            </div>)}
        </div>
      </header>


      {/* <SignInModal /> */}
      {/* </div> */}
      {/* <Images /> */}
    </>
  );
} 
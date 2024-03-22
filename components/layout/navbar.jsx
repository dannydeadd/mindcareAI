"use client";

import useScroll from "@/lib/hooks/use-scroll";
import Image from "next/image";
import Link from "next/link";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";

export default function NavBar({ session }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full 
          border-b border-gray-200 backdrop-blur-xl
          bg-white/50
          z-30 transition-all`}
      >
        <div className="mx-5 h-16 max-w-screen-xl flex items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl hover:text- duration-300">
            <Image
              src="/logo-black.jpg"
              alt="N17R logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>MindCareAI</p>
          </Link>
          <div className="flex font-display">
            <div className="ml-auto flex items-center">
              <Link href="/jateq" className="mr-8 hover:text-xl duration-300">
                Documentation
              </Link>
              {session ? (
                <Link href="/chat" className="mr-8 hover:text-xl duration-300">
                  Chat
                </Link>
              ) : (
                <a className="mr-8 hover:text-xl duration-300 cursor-pointer"  onClick={() => setShowSignInModal(true)}>
                Chat
              </a>
              )}
              {session ? (
                <UserDropdown session={session} />
              ) : (
                <a
                  className="duration-300 hover:text-xl cursor-pointer"
                  onClick={() => setShowSignInModal(true)}
                >
                  Sign In
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

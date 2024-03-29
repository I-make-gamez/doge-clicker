"use client";

import Link from "next/link";
import { useState } from "react";
import UserSearch from "./userSearch";
import Settings from "./settings";
import { usePathname } from "next/navigation";
import Changelog from "./changelog";

export default function NavBar() {
  const [user, setUser] = useState(false); // Initially set to false
  const [settings, setSettings] = useState(false); // Initially set to false\
  const [changelog, setChangelog] = useState(false); // Initially set to false
  const path = usePathname();

  if (path == "/register" || path == "/login") {
    return (
      <div>
        <div
          className={`flex items-center justify-start gap-2 text-2xl text-white border-t-[7px] border-black bg-gradient-to-r from-fuchsia-900 to-fuchsia-500 h-[12vh]`}
        >
          <Link
            className={`hover:bg-white hover:text-black px-4 cursor-pointer h-full items-center flex`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`hover:bg-white hover:text-black px-4 cursor-pointer h-full items-center flex`}
            href="https://github.com/I-make-gamez/I-make-gamez"
          >
            Source Code
          </Link>
          <Link
            className={`hover:bg-white hover:text-black px-4 cursor-pointer h-full items-center flex`}
            href="https://github.com/I-make-gamez"
          >
            IMG
          </Link>
          <Link
            className={`hover:bg-white hover:text-black px-4 cursor-pointer h-full items-center flex`}
            href="https://discord.gg/7vnwbMr8ed"
          >
            Discord
          </Link>
          <a className={`h-full items-center flex`}>Version:</a>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {user ? <UserSearch show={user} setShow={setUser} /> : null}
        {settings ? <Settings show={settings} setShow={setSettings} /> : null}
        {changelog ? (
          <Changelog show={changelog} setShow={setChangelog} />
        ) : null}

        <div
          className={`flex items-center justify-start gap-2 text-2xl text-white border-t-[7px] border-black bg-gradient-to-r from-fuchsia-900 to-fuchsia-500 h-[12vh]`}
        >
          <Link
            className={`hover:bg-white hover:text-black px-4 cursor-pointer h-full items-center flex`}
            href="/"
          >
            Home
          </Link>
          <a
            className={`hover:bg-white hover:text-black px-4 cursor-pointer h-full items-center flex`}
          >
            Avatar Selection
          </a>
          <a
            onClick={() => setUser(!user)}
            className={`hover:bg-white hover:text-black px-4 cursor-pointer h-full items-center flex`}
          >
            User Search
          </a>
          <a
            onClick={() => {
              setSettings(!settings);
            }}
            className={`hover:bg-white hover:text-black px-4 cursor-pointer h-full items-center flex`}
          >
            Settings
          </a>
          <Link
            className={`hover:bg-white hover:text-black px-4 cursor-pointer h-full items-center flex`}
            href="https://github.com/I-make-gamez/I-make-gamez"
          >
            Source Code
          </Link>
          <Link
            className={`hover:bg-white hover:text-black px-4 cursor-pointer h-full items-center flex`}
            href="https://github.com/I-make-gamez"
          >
            IMG
          </Link>
          <Link
            className={`hover:bg-white hover:text-black px-4 cursor-pointer h-full items-center flex`}
            href="https://discord.gg/7vnwbMr8ed"
          >
            Discord
          </Link>
          <a
            onClick={() => setChangelog(!changelog)}
            className={`hover:bg-white hover:text-black px-4 cursor-pointer h-full items-center flex`}
          >
            Version:
          </a>
        </div>
      </div>
    );
  }
}

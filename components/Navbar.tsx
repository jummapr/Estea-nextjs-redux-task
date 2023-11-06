import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="w-full h-14 bg-slate-300 flex flex-row items-center justify-center">
      <div className="flex flex-row space-x-5">
        <Button variant={"ghost"}>
          <Link href={"/users"} >
            <Button variant={"ghost"} className="text-sm">
              Users
            </Button>
          </Link>
        </Button>
        <Link href={"/users/add"} >
          <Button variant={"ghost"} className="text-sm">
            Add User
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

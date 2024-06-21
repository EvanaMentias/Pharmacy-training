"use client";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {
  const items = [
    {
      key: "Profile",
      label: "profile",
    },
    {
      key: "edit",
      label: "Edit profile",
    },
    {
      key: "setting",
      label: "Setting",
    },
    {
      key: "Logout",
      label: "Logout",
    },
  ];
  return (
    <NextUINavbar
      maxWidth="xl"
      className=" backdrop-filter-none py-14 absolute bg-inherit"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand>
          <NextLink className="flex justify-start items-center gap-10" href="/">
            <Image src="/Logo.svg" alt="Logo" width={130} height={130} />
          </NextLink>
        </NavbarBrand>

        <NavbarContent className="hidden gap-20 md:flex" justify="center">
          <NavbarItem>
            <Link className="text-green-500" color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" color="foreground" href="/about">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" color="foreground" href="#">
              Services{" "}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" color="foreground" href="#">
              Branches
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link className="text-white" color="foreground" href="#">
              Forms
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <div className="flex gap-1">
                  <Image
                    src="/people.svg"
                    alt="people"
                    width={25}
                    height={25}
                  />
                  <Image
                    src="/Down-Arrow.svg"
                    alt="Down Arrow"
                    width={10}
                    height={10}
                  />
                </div>
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions" items={items}>
                {(item) => (
                  <DropdownItem
                    key={item.key}
                    color={item.key === "delete" ? "danger" : "default"}
                    className={item.key === "delete" ? "text-danger" : ""}
                  >
                    {item.label}
                  </DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>

          <NavbarItem className="hidden lg:flex">
            <Button
              radius="full"
              className="bg-green-600 border-2 border-white text-white"
            >
              <span>Download App</span>{" "}
              <Image
                src="/download.svg"
                alt="download"
                width={10}
                height={10}
              />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
    </NextUINavbar>
  );
};

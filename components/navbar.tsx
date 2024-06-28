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
      className=" backdrop-filter-none py-14 absolute bg-inherit"
      maxWidth="xl"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand>
          <NextLink className="flex justify-start items-center gap-10" href="/">
            <Image alt="Logo" height={130} src="/Logo.svg" width={130} />
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
            <Link className="text-white" color="foreground" href="/shop">
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
                    alt="people"
                    height={25}
                    src="/people.svg"
                    width={25}
                  />
                  <Image
                    alt="Down Arrow"
                    height={10}
                    src="/Down-Arrow.svg"
                    width={10}
                  />
                </div>
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions" items={items}>
                {(item) => (
                  <DropdownItem
                    key={item.key}
                    className={item.key === "delete" ? "text-danger" : ""}
                    color={item.key === "delete" ? "danger" : "default"}
                  >
                    {item.label}
                  </DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>

          <NavbarItem className="hidden lg:flex">
            <Button
              className="bg-green-600 border-2 border-white text-white"
              radius="full"
            >
              <span>Download App</span>{" "}
              <Image
                alt="download"
                height={10}
                src="/download.svg"
                width={10}
              />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
    </NextUINavbar>
  );
};

"use client"

import { MdSearch } from "react-icons/md";
import { Input } from "@nextui-org/input";
import { button as buttonStyle } from "@nextui-org/theme"
import { Card, CardBody } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { FooterPage } from "../footer";

const options = [
  {
    label: "Pokemon",
    url: "/pokemon",
    color: "bg-[#70CCB7]"
  },
  {
    label: "Moves",
    url: "/move",
    color: "bg-[#ED8775]"
  },
  {
    label: "Abilities",
    url: "/ability",
    color: "bg-[#6FB8F5]"
  },
  {
    label: "Genders",
    url: "/gender",
    color: "bg-[#FCD55E]"
  },
  {
    label: "Location",
    url: "/location",
    color: "bg-[#85629A]"
  },
  {
    label: "Types",
    url: "/type",
    color: "bg-[#B57F75]"
  }
]

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-background dark:text-white w-full rounded-b-[2rem] shadow-sm">
      <section className="container mx-auto max-w-full px-8 flex-grow">
        <div className="w-full flex flex-col gap-6 py-8 tracking-wider">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl sm:text-4xl font-extrabold">What Pokemon are you looking for?</h1>
            <Input
              isClearable
              size="lg"
              radius="full"
              variant="bordered"
              color="primary"
              type="text"
              placeholder="Search..."
              labelPlacement="inside"
              classNames={{
                inputWrapper: "shadow-none",
                input: "text-sm",
              }}
              onClear={() => console.log("input cleared")}
              startContent={
                <MdSearch className="size-5 text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />

          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {options.map((list, idx) => (
              <Link
                key={idx}
                className={clsx(
                  buttonStyle({
                    variant: "solid",
                    radius: "lg",
                    size: "lg"
                  }),
                  "justify-start py-8 font-bold text-white",
                  list.color
                )}
                href={list.url}
              >
                {list.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

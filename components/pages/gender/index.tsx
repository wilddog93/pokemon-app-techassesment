"use client"

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Spinner } from "@nextui-org/spinner";
import { Header } from "../Header";
import { Skeleton } from "@nextui-org/skeleton";
import { CardComponents } from "../CardComponent";
import { useGenders } from "@/utils/hooks/gender";

type QueryTypes = {
  limit: number;
  offset: number;
}

export default function GenderPage() {
  const router = useRouter();
  const [query, setQuery] = useState<QueryTypes>({
    limit: 100,
    offset: 0
  })

  const { data, error, isLoading } = useGenders(query);

  return (
    <main className="container mx-auto max-w-full px-8 flex-grow">
      <section className="w-full flex flex-col gap-6 py-8 tracking-wider">
        {isLoading ?
          <div className='w-full flex items-center justify-between'>
            <Skeleton className="rounded-lg">
              <div className="size-12 rounded-lg bg-gray-300">loading...</div>
            </Skeleton>
            <Skeleton className="rounded-lg">
              <div className="size-12 rounded-lg bg-gray-300">loading...</div>
            </Skeleton>
          </div>
          :
          <Header />
        }

        {isLoading ?
          <Skeleton className="w-36 rounded-lg">
            <div className="size-6 rounded-lg bg-gray-300">loading...</div>
          </Skeleton> :
          <h1 className="text-2xl sm:text-4xl font-extrabold">Genders</h1>}

        <div className={clsx(
          "flex items-center justify-center gap-1 text-lg font-bold text-center",
          isLoading ? "" : "hidden"
        )}>
          <Spinner size="lg" label="loading..." />
        </div>

        <div className={clsx(
          "flex items-center justify-center gap-1 text-lg font-bold text-center",
          error ? "" : "hidden"
        )}>
          Genders not found!
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {data?.length > 0 &&
            data?.map((items: any, index: number) => {
              return (
                <CardComponents key={index} items={items} loading={isLoading} />
              )
            })
          }
        </div>
      </section>
    </main>
  );
};

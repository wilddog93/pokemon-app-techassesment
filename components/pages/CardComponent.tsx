import { Skeleton } from "@nextui-org/skeleton"
import { Key } from "react"

type Props = { 
  items: any, 
  loading: boolean, 
  key?: Key
}


export const CardComponents = ({ items, loading, ...props }: Props) => {
  if (loading) {
    return (
      <div {...props} className="flex items-center gap-2 py-2 px-4 rounded-2xl bg-white text-default-600">
        <Skeleton className="rounded-lg">
          <div className="h-3 w-full rounded-lg bg-gray-200">
            loading...
          </div>
        </Skeleton>
      </div>
    )
  } else {
    return (
      <div {...props} className="flex items-center gap-2 py-2 px-4 rounded-2xl bg-white text-default-600 hover:cursor-pointer overflow-hidden">
        <div className='flex flex-col gap-1'>
          <h1 className='font-bold text-xl'>{items.name}</h1>
        </div>
      </div>
    )
  }
}
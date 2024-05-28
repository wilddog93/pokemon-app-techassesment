import { Button } from '@nextui-org/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaServer } from 'react-icons/fa';
import { MdArrowBack } from 'react-icons/md';

export const Header: React.FC<any> = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between gap-6">
      <Button
        isIconOnly
        variant="light"
        className=""
        onClick={() => router.back()}
      >
        <MdArrowBack className="size-6 text-inherit" />
      </Button>

      <Button
        isIconOnly
        variant="light"
        className=""
        onClick={() => router.push("/pokebag")}
      >
        <FaServer className="size-6 text-inherit rotate-180" />
      </Button>
    </div>
  )
}

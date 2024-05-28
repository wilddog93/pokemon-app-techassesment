"use client"

import React from 'react'

export const FooterPage = () => {
  return (
    <footer className='container mx-auto max-w-full px-8 flex-grow'>
      <div className="w-full flex flex-col gap-6 py-8 tracking-wider">
        <h1 className='font-extrabold text-2xl'>Pokemon news</h1>
      </div>

      <div className="w-full flex flex-col gap-4 py-8 justify-center items-center">
        <img src="/not-found.png" alt="not-found" />
        <div>This feature under development</div>
      </div>
    </footer>
  )
}

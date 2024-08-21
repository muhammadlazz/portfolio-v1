"use client";
import { LinkPreview } from '@/components/ui/link-preview';
import Link from 'next/link';
import React from 'react'


const Contact = () => {
  return (
    <main> 
      <div>
        <div className="py-40 items-start h-[55rem] flex-col px-40">
          <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-5xl  text-left mb-10">
            Visit my{" "}
            <LinkPreview
              url="https://github.com/muhammadlazz"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              Github
            </LinkPreview>{" "}
            🌐 for seeing my repository and last project i have done.
          </p>
          <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl  text-left mb-10">
            Check my{" "}
            <LinkPreview
              url="https://www.instagram.com/muhlazzuardi/"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              Instagram
            </LinkPreview>{" "}
            , Email me on{" "}
            <LinkPreview
              url="https://mail.google.com/mail/u/0/#inbox"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              Gmail
            </LinkPreview>{" "}
            💬 muhlazuuardi@gmail.com
          </p>
          
        </div>
      </div>
      <div className='py-16 px-10'>
        <h3 className='text-3xl from-neutral-100 text-slate-400 font-mono'>
          <Link href={"/"}>Go Back</Link>
        </h3>
      </div>
    </main>
  )
}

export default Contact
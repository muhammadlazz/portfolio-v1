"use client";
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import React from 'react'
import Image from "next/image";
import web from '@/app/Exproject/web.png'
import Link from 'next/link';



const Exproject = () => {
  return (
    <main>
      <div>
        <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Personal Project <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Clothing Store
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={web}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
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

export default Exproject
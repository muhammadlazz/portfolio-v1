"use client";
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Image from "next/image";
import Link from 'next/link'
import React from 'react'

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}



const Experience = () => {
  return (
    <main>
      <div className=''> 
        <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-700 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Inixindo Course
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Learn PHP, Control Flow, MySql Database
          </CardItem>
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="w-full mt-4"
          >
            <Image
              src="https://yt3.googleusercontent.com/ytc/AIdro_kdcTWM4_a4AIddr7cCarILj795lL1sjtxDCQe9lHNd8A=s900-c-k-c0x00ffffff-no-rj"
              height="250"
              width="250"
              className="h-30 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              translateX={-40}
              as ="button" href="https://www.inixindo.id/"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <Link href={"https://www.inixindo.id/"}>Official Website →</Link>
            </CardItem>
            
          </div>
          </CardBody>
          </CardContainer>
      </div>

      <div> 
        <CardContainer className="inter-var">
        <CardBody className="bg-slate-400 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-700 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Codepolitan Course
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Learn Basic of Algorithm, IDE VS Code, Create GitHub, VS Code Extension.
          </CardItem>
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="w-full mt-4"
          >
            <Image
              src="https://apps.codepolitan.com/sites/learn/uploads/original/2/logo-codepolitan-originals.png"
              height="250"
              width="250"
              className="h-30 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              translateX={-40}
              as ="button" href="https://www.inixindo.id/"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <Link href={"https://www.codepolitan.com/"}>Official Website →</Link>
            </CardItem>
            
          </div>
          </CardBody>
          </CardContainer>
       </div>


       <div className='py-16 px-10'>
        <h3 className='text-3xl from-neutral-100 text-slate-400 font-mono'>
          <Link href={"/"}>Go Back</Link>
        </h3>
       </div>


    </main>
    
  )
}

export default Experience
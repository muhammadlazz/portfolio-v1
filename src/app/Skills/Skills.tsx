import Link from 'next/link'
import React from 'react'
import { FocusCards } from "@/components/ui/focus-cards";



export function FocusCardsDemo() {
const cards = [
  {
    title: "Team Collaboration",
    src: "https://images.unsplash.com/photo-1598015132635-131afe3ba07f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Well Writen Communication",
    src: "https://images.unsplash.com/photo-1611264327630-8090373c8cef?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Windows, Mac OS",
    src: "https://images.unsplash.com/photo-1590172205940-5b6eedf7ec82?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "C Language",
    src: "https://images.unsplash.com/photo-1532522750741-628fde798c73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
 
];

return <FocusCards cards={cards} />;
}

const Skills = () => {
  return (
    <main>
      <div className='py-16'>
        <FocusCardsDemo />
      </div>
    
      <div className='py-16 px-10'>
        <h3 className='text-3xl from-neutral-100 text-slate-400 font-mono'>
          <Link href={"/"}>Go Back</Link>
        </h3>
      </div>
    
    </main>
  )
}

export default Skills
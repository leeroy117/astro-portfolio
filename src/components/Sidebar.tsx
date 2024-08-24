// ---
// import Navigation from "./Navigation.astro";


// ---
// <aside class='absolute flex flex-col justify-center items-center h-svh w-full bg-sidebarBg'>
//     <nav class="">
//         <Navigation />
//     </nav>
// </aside>
import { isMenuOpen } from "../menuStore";
// import Navigation from "./Navigation.astro";
// import {Navigation} from "./NavigationIsland";
import { useStore } from "@nanostores/react";
import { Image } from "astro:assets";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const Sidebar = ({children}: Props) => {
    const $isMenuOpen = useStore(isMenuOpen);
    console.log("🚀 ~ Sidebar ~ $isMenuOpen:", $isMenuOpen);
    return (
        <aside className={`
                fixed top-[50px] 
                flex flex-col 
                justify-center 
                items-center 
                h-100svh-minus-50 w-full 
                bg-sidebarBg
                ${!$isMenuOpen ? 'translate-x-[-100%]' : 'translate-x-0'}
                transition ease-in-out duration-500
                gap-10
                z-50
                overflow-x-hidden
                
        `}>
            <nav className="z-10 mb-40">
                {children}
            </nav>
            <img 
                className={`absolute left-0 
                    -translate-x-[60%]
                    `} 
                src='/img/saturn.png' 
                width={200} 
                height={200} 
            />
            <img 
                className={`absolute top-0 right-0 
                    translate-x-[50%]
                `} 
                src='/img/venus.png' 
                width={180} 
                height={180} 
            />
            <img 
                className={`absolute bottom-[50%] right-0 
                    translate-x-14 translate-y-24
                    `}
                src='/img/uranus.png' 
                width={130} 
                height={150} 
            />

        </aside> 
    )
}
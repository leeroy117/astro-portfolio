import { useStore } from '@nanostores/react';
import { isMenuOpen } from '../menuStore';
import { HiMenuAlt4 } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";

export const Header = () => {
    const $isMenuOpen = useStore(isMenuOpen);
    console.log("🚀 ~ Header ~ $isMenuOpen:", $isMenuOpen)

    const toggleMenu = () => {
        
        isMenuOpen.set(!$isMenuOpen)
    }

    return (
        <header className={`
                fixed top-0 left-0
                flex flex-col justify-center items-end 
                h-[50px] w-full 
                bg-primary text-cText 
                p-2 border-box 
                shadow-hShadow
                z-50
        `}>
            <button className={`group h-[35px] w-[35px] bg-transparent lg:hidden `} onClick={toggleMenu}>
                <div className={`grid justify-items-center gap-1.5`}>
                    <span className={`
                        h-[2px] w-6 
                        rounded-full bg-white 
                        ${$isMenuOpen ? 'rotate-45 translate-y-[0.425rem]  ' : ''} transition 
                    `}> 
                    </span>
                    <span className={`
                        h-[2px] w-6 rounded-full 
                        bg-white 
                        ${$isMenuOpen ? 'scale-x-0' : ''}  transition `}> </span>
                    <span className={`
                        h-[2px] w-6 rounded-full 
                        bg-white 
                        ${$isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}  transition 
                        `}></span>
                </div>
            </button>
        </header>
    )
}
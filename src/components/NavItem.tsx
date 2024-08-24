import { FaArrowRightLong } from "react-icons/fa6";

interface Props {
    href: string;
    isActive: boolean;
    label: string;
}

export const NavItem = (props: Props) => {

    const {
        href,
        isActive = false,
        label
    } = props;

    return (
        <div className={`flex flex-row items-center gap-2  ${isActive ? 'scale-110 font-bold text-accent' : 'font-light' } `}>
            {/* {isActive && <img src={`/img/space-ship-rocket-svgrepo-com.svg`} width={25} height={25}/>} */}
            <a href={`${href}`}>{label}</a>
        </div>
    );
}
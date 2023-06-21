import { IconType } from 'react-icons'
import { BsList } from 'react-icons/bs'
import { HiOutlineHome } from 'react-icons/hi'
import { IoIosSearch } from 'react-icons/io'
import { AiOutlinePlus } from 'react-icons/ai'

type IconProps = {
    icon: IconType;
    onClick?: () => void;
}

const Icon = ({ icon: Icon, onClick }: IconProps) => {
    return (
        <div            
            onClick={onClick}
            className='
                flex 
                justify-center 
                items-center 
                h-fit 
                p-[1px] 
                rounded-sm 
                hover:bg-gray-500 
                transition
                cursor-pointer
            '
        >
            <Icon size={22} className='text-typography' />
        </div>
    )
}

const Search = () => {
    return (
        <div className='relative bg-primary-500 rounded-[0.225rem] hover:opacity-70 transition'>
            {/*Icon fix*/}
            <IoIosSearch className='absolute inset-0 top-[2px] left-1' size={24} color='white' />
            <input
                type='text'
                placeholder='Search'
                className='
                    bg-transparent 
                    text-sm 
                    placeholder:text-typography
                    pl-9 py-1 
                    w-56  
                    rounded-sm 
                    text-typography
                    focus:bg-primary 
                    focus:outline-none
                    focus:w-80 
                    transition
                '
            />
        </div>
    )
}

const Avatar = () => {
    return (
        <div className='flex justify-center items-center w-8 h-8 rounded-full bg-typography'>
            <p className='p-0 text-lg'>A</p>
        </div>
    )
}

type NavbarProps = {
    toggle: () => void;
}

const Navbar = ({ toggle }: NavbarProps) => {
    return (
        <header className="w-full fixed flex top-0 h-11 bg-primary-600 z-50">
            <div className='w-full h-full md:px-8 px-4 mx-auto flex justify-between'>
                <div className='flex justify-center items-center gap-2'>
                    <Icon icon={BsList} onClick={toggle} />
                    <Icon icon={HiOutlineHome} />
                    <Search />
                </div>
                <div className='hidden md:flex justify-center items-center font-bold text-typography'>
                    Welcome back, Name <span className='text-lg pl-1'>👋</span>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <Icon icon={AiOutlinePlus} />
                    <Avatar />
                </div>
            </div>
        </header>
    )
}

export default Navbar
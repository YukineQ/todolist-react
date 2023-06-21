import { useMemo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'
import { BsCalendarDate } from 'react-icons/bs'
import { FiInbox } from 'react-icons/fi'
import { IoPizzaOutline } from 'react-icons/io5'

interface SidebarItemProps {
    icon: IconType;
    label: string;
    href: string;
    className?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    icon: Icon,
    label,
    href,
    className,
}) => {
    return (
        <NavLink
            to={href}
            className={({ isActive }) => `
                flex 
                flex-row 
                w-full 
                px-3 py-1.5 
                hover:bg-primary-500 
                gap-3 
                items-center 
                rounded-lg 
                transition
                ${isActive && 'bg-primary-500'}
            `}
        >
            <Icon
                size={18}
                className={twMerge('text-typography', className)}
            />
            <p className='text-typography text-[0.9rem]'>{label}</p>
        </NavLink>
    )
}

type SidebarProps = {
    isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
    const appendClass = isOpen ? 'ml-0' : 'ml-[-320px]'

    const navigation = useLocation()
    const pathname = navigation.pathname
    const routes = useMemo(() => [
        {
            href: '/',
            icon: BsCalendarDate,
            label: 'Today',
            className: 'text-green-500'
        },
        {
            href: '/inbox',
            icon: FiInbox,
            label: 'Inbox',
            className: 'text-blue-500'
        },
        {
            href: 'Filters',
            icon: IoPizzaOutline,
            label: 'Filters',
            className: 'rotate-45 text-yellow-500'
        }
    ], [])

    return (
        <aside
            className={`
                fixed 
                left-0 
                bottom-0 
                h-full 
                w-80
                bg-primary-700 
                pt-16
                px-4 
                ease-in-out 
                duration-200 
                space-y-1
                ${appendClass}
            `}
        >
            {routes.map((item) => (
                <SidebarItem
                    icon={item.icon}
                    label={item.label}
                    href={item.href}
                    className={item.className}
                />
            ))}
        </aside>
    )
}

export default Sidebar
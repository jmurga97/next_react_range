import Link from "next/link";

const NavItem: React.FC<{text:string}> = ({ text }) => (
        <li className="underline hover:decoration-dashed" >
            {text}
        </li>
)


const Navbar:React.FC = () => {
    return (
        <nav className="w-full">
            <ul className='flex text-xl items-center justify-center gap-20 font-bold text-purple-4 shadow-md h-20'>
                <Link href='/exercise1' className="hover:text-purple-4">
                    <NavItem text="Exercise 1" />
                </Link>
                <Link href='exercise2'>
                    <NavItem text="Exercise 2"/>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar;
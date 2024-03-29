import Link from "next/link";

const NavItem = ({ text }: { text: string }) => (
        <li className="hover:text-purple-300 transition underline hover:decoration-dashed" >
            {text}
        </li>
)


const Navbar = () => {
    return (
        <nav className="w-full bg-slate-200/10 ">
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
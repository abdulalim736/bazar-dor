

import Image from "next/image";
import logo from "@/assets/shopping-cart.png";
import Link from "next/link";
import NavLink from "./NavLink";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD",{
        dateStyle:"full"
    })

    return (
        <header className="container max-w-7xl mx-auto px-4 md:px-12 py-12">
           <div className="flex justify-between items-center">
             <div className="flex items-center gap-2">
                <Image
                    className="h-10 w-10 rounded-2xl bg-green-800"
                    src={logo}
                    alt="logo"
                    height={50}
                    width={50}
                    priority
                />

                <div>
                    <h2>বাজার দর</h2>
                    <p>{date}</p>
                </div>
            </div>

            <div className="flex gap-4 items-center">
                <Link href="/signin">
                <button>
                    সাইন ইন
                </button>
                </Link>
 
                <Link href="/signup">
                <button className="btn btn-active bg-green-800 text-white p-2 rounded-2xl ">
                    সাইন আপ
                </button>
                </Link> 
            </div>

           </div>

           <NavLink/>
        </header>
    );
};

export default Header;
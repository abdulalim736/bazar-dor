import Link from "next/link";


interface Inav {

    id: string,
    slug: string,
    nameBn: string,
    icon: string,
    
}

const NavLink = async() => {

    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/categories");

    const data = await res.json();
    

    return (
        <div className="flex gap-5 justify-start items-center mt-5">
            {
                data.map((nav:Inav,i: number)=> <Link key={i} href={nav.id} >
                    {nav.nameBn}
                </Link>)

            }
        </div>
    );
};

export default NavLink;
const navLinks = ['home', 'about', 'contact', 'blog', 'careers'];

const NavDropdown =()=>{
    return (
        <div className="w-full mx-12 mt-2 py-4 bg-white rounded-lg shadow-2xl text-center transform translate-y-4">
            {
                navLinks.map((navLink,idx)=>(
                    <div className="capitalize text-gray-800 text-lg py-2 px-2 cursor-pointer hover:text-green-700" key={idx}>{navLink}</div>
                ))
            }
        </div>
    )
}

export default NavDropdown;
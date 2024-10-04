const NavBar = () => {
    return (
        <div>
            <header>
                <div className="flex justify-between items-center h-[50px] px-8">
                    <h2 className="text-[20px]">Faison Wear</h2>
                    <input
                        type="text"
                        className="w-[250px] p-2 border border-gray-300 rounded-full bg-gray-100 outline-none"
                        placeholder="Search here"
                    />
                    <div className="flex gap-4 items-center">
                        <h6>Store</h6>
                        <h6>Wish List</h6>
                        <button className="bg-gray-800 text-white border-none py-2 px-6 rounded-md text-[12px] hover:bg-gray-700">
                            Login
                        </button>
                    </div>
                </div>
            </header>
            <nav className="mt-4 flex justify-between py-2 px-8 border-t border-gray-300 border-b border-gray-800">
                <a href="#new-arrivals" className="py-1 px-4 text-gray-600 text-[14px] font-medium">New Arrivals</a>
                <a href="#fresh" className="py-1 px-4 text-white bg-red-500 rounded-md text-[14px] font-medium">#Fresh</a>
                <a href="#dresses" className="py-1 px-4 text-gray-600 text-[14px] font-medium">Dresses</a>
                <a href="#tops" className="py-1 px-4 text-gray-600 text-[14px] font-medium">Tops</a>
                <a href="#jackets" className="py-1 px-4 text-gray-600 text-[14px] font-medium">Jackets</a>
                <a href="#lingerie" className="py-1 px-4 text-gray-600 text-[14px] font-medium">Lingerie & Lounge Wear</a>
                <a href="#beach-wear" className="py-1 px-4 text-gray-600 text-[14px] font-medium">Beach Wear</a>
                <a href="#blouse" className="py-1 px-4 text-gray-600 text-[14px] font-medium">Blouse</a>
                <a href="#denim" className="py-1 px-4 text-gray-600 text-[14px] font-medium">Denim</a>
                <a href="#vintage" className="py-1 px-4 text-gray-600 text-[14px] font-medium">Vintage</a>
                <a href="#shoes" className="py-1 px-4 text-gray-600 text-[14px] font-medium">Shoes</a>
                <a href="#sandals" className="py-1 px-4 text-gray-600 text-[14px] font-medium">Sandals</a>
                <a href="#bags" className="py-1 px-4 text-gray-600 text-[14px] font-medium">Bags</a>
                <a href="#jewelries" className="py-1 px-4 text-gray-600 text-[14px] font-medium">Jewelries</a>
            </nav>
        </div>
    );
}

export default NavBar;

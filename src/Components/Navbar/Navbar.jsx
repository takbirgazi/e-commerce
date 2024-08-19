import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const { setSearch, setSortValue } = useContext(AuthContext);

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearch(value);
    }
    const handlerSort = (event) => {
        const value = event.target.value;
        setSortValue(value);
    }
    return (
        <nav className="bg-gray-800">
            <div className="w-11/12 mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
                {/* Website Name */}
                <div className="text-white font-bold text-lg md:w-1/3 text-center md:text-left mb-4 md:mb-0"> <NavLink to="/">E-Commerce </NavLink> </div>

                {/* Right side: Search, Filter, Sorting */}
                <div className="flex flex-col md:flex-row md:w-2/3 items-center justify-between">
                    {/* Search Bar */}
                    <input onChange={handleSearch}
                        type="text"
                        placeholder="Search..."
                        className="mb-4 md:mb-0 md:mr-4 p-2 w-full md:w-auto rounded-md"
                    />

                    {/* Filter Option */}
                    <select className="mb-4 md:mb-0 md:mr-4 p-2 w-full md:w-auto rounded-md">
                        <option value="">Filter</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>

                    {/* Sorting Option */}
                    <select onChange={handlerSort} defaultValue='sort' className="p-2 w-full md:w-auto rounded-md">
                        <option value="sort" disabled>Sort By</option>
                        <option value="lowToHigh">Low to High</option>
                        <option value="highToLow">High to Low</option>
                    </select>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
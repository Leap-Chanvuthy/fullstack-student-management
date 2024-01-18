import { LuHome } from "react-icons/lu";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";


const NavigationBar = () => {
    return ( 
        <div className="bg-gray-800 text-white h-[100vh] w-56 p-4 top-0">
            {/* Sidebar content goes here */}
            <p className="text-xl font-bold mb-4">Name ... </p>
            <ul className="flex flex-col gap-4 font-bold">
                <Link to='/'>
                    <li className="mb-2">
                        <div className="flex gap-2 items-center">
                            <LuHome/>
                            <h5>Home</h5>
                        </div>
                    </li>
                </Link>
                <Link to='/create'>
                    <li className="mb-2 items-center">
                        <div className="flex gap-2 items-center">
                            <IoIosAddCircleOutline/>
                            <h5>Create</h5>
                        </div>
                    </li>
                </Link>
                <Link to='/students'>
                    <li className="mb-2 items-center">
                        <div className="flex gap-2 items-center">
                            <LuHome/>
                            <h5>Student</h5>
                        </div>
                    </li>
                </Link>
                
            </ul>
         </div>
     );
}
 
export default NavigationBar;
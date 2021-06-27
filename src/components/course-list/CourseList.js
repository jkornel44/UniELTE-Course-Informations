import Course from "./Course";
import SearchBar from "../search-bar/SearchBar";

function CourseList() {
    return(
        <div className="overflow-x-auto">  
            <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                <div className="w-full lg:w-5/6 ">
                    <SearchBar />
                    <div className="bg-white shadow-md rounded-xl my-6 overflow-x-auto">
                        <table className="min-w-max w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Kurzuskód</th>
                                    <th className="py-3 px-6 text-left">Kurzusnév</th>
                                    <th className="py-3 px-6 text-center">Csoport</th>
                                    <th className="py-3 px-6 text-left">Oktató</th>
                                    <th className="py-3 px-6 text-left">Időpont</th>
                                    <th className="py-3 px-6 text-left">Terem</th>
                                    <th className="py-3 px-6 text-center">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="text-gray-600 text-sm font-light">
                                <Course/>
                                <Course/>
                                <Course/>
                                <Course/>
                                <Course/>
                                <Course/>
                                <Course/>
                                <Course/>
                                <Course/>
                                <Course/>

                                <Course/>
                                <Course/>
                                <Course/>
                                <Course/>
                                <Course/>
                                <Course/>
                                <Course/>
                                <Course/>
                                <Course/>
                                <Course/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default CourseList;


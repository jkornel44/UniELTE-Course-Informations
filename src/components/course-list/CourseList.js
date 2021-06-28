import Course from "./Course";

function CourseList({ courses }) {
    return(
        <div className="bg-white shadow-md rounded-xl my-6 overflow-x-auto">
            <table className="min-w-max w-full h-full table-auto">
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
                    { Object.values(courses).slice(1, courses.length).map((course, index) => <Course data={ course } key={index}/>)}
                </tbody>
            </table>
        </div>
    );
  }
  
  export default CourseList;


function Course({ data }) {
    
    const getTypeColor = () => {
        switch(data['Oratipus']) {
            case 'elõadás'   : return "bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs";
            case 'gyakorlat' : return "bg-blue-200 text-blue-600 py-1 px-3 rounded-full text-xs";
            case 'szakdolgozat' : return "bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs";
            case 'virtuális' : return "bg-gray-200 text-gray-600 py-1 px-3 rounded-full text-xs";
            case 'terepgyakorlat' : return "bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs";
            default : return "bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs";
        }
    }
    
    return(
        <tr className="border-b border-gray-200 hover:bg-gray-100">

            <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                    <span>{data['Kurzuskod']}</span>
                </div>
            </td>

            <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex items-center">
                    <span className="font-medium text-truncate" style={{maxWidth: 250+"px"}}>{data['Kurzusnev']}</span>
                </div>
            </td>

            <td className="py-3 px-6 ">
                <div className="flex items-center justify-center">
                    <span className={getTypeColor()}>{data['Oratipus']} - {data['Csop']}</span>
                </div>
            </td>

            <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                    <span>{data['Oktato']}</span>
                </div>
            </td>

            <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                    <span>{data['Idopont']}</span>
                </div>
            </td>

            <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                    <span className="text-truncate" style={{maxWidth: 150+"px"}}>{data['Helyszin']}</span>
                </div>
            </td>

            <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </td>
        </tr>
    );
  }
  
  export default Course;
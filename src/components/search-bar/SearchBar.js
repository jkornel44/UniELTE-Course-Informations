import axios from "axios";

import { useState } from 'react';

function SearchBar({ setCourses }) {
    const tableHead = ['Kurzusnev', 'Kurzuskod', 'Idopont', 'Helyszin', 'Hetek', 'Megj.', 'Oratipus', 'Csop', 'Letszam', 'Ea', 'Gyak', 'Oktato'];
    const API_PATH = 'http://localhost:9000/connector.php';
    
    const [searchValue, setSearchValue] = useState('');
    const [semesterValue, setSemesterValue] = useState('2021-2022-1');
    const [typeValue, setTypeValue] = useState('nevalapjan');

    const handleFormSubmit = e => {
        e.preventDefault();
        let params;
        if(typeValue === 'nevalapjan') {
            params = {
                'melyik' : typeValue,
                'felev': semesterValue,
                'limit': '100',
                'targynev': searchValue
            };
        }

        if(typeValue === 'kodalapjan') {
            params = {
                'melyik' : typeValue,
                'felev': semesterValue,
                'limit': '100',
                'targykod': searchValue
            };
        }

        if(typeValue === 'oktnevalapjan') {
            params = {
                'melyik' : typeValue,
                'felev': semesterValue,
                'limit': '100',
                'oktnev': searchValue
            };
        }
        
        axios({
          method: 'post',
          url: `${API_PATH}`,
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          data: new URLSearchParams(params)
        })
          .then(result => {
            var parser = new DOMParser();
            var doc    = parser.parseFromString(result.data, "text/html");
            var obj    = [].map.call(doc.querySelectorAll('tr'), tr => {
                return [].slice.call(tr.querySelectorAll('td')).reduce( (a,b,i) => {
                    return a[tableHead[i]] = b.textContent, a;
                }, {});
            });

            setCourses(obj);
          })
      };
    
  return(
    <div className="bg-gray-600 px-3 py-3 shadow-md rounded-xl my-6">

            <div className="row">
                <div className="col-sm-6">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="search" placeholder="Keresés" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
                        <label htmlFor="search">Keresés</label>
                    </div>
                </div>

                <div className="col-sm-2">
                    <div className="form-floating">
                        <select className="form-select" id="semester" aria-label="choosed semester" value={semesterValue} onChange={e => setSemesterValue(e.target.value)}>
                            <option value="2021-2022-1">2021-2022-1</option>
                            <option value="2020-2021-2">2020-2021-2</option>
                        </select>
                        <label htmlFor="semester">Időszak</label>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="form-floating">
                        <select className="form-select" id="searchType" aria-label="choosed type" value={typeValue} onChange={e => setTypeValue(e.target.value)}>
                            <option value="nevalapjan">Kurzus neve</option>
                            <option value="kodalapjan">Kurzus kódja</option>
                            <option value="oktnevalapjan">Oktató</option>
                        </select>
                        <label htmlFor="searchType">Keresés típusa</label>
                    </div>
                </div>

                <div className="col-sm">
                <button type="submit" className="btn btn-primary px-3 py-3" onClick={ handleFormSubmit }>Keresés</button>
                </div>
            </div>

    </div>
  );
}

export default SearchBar;

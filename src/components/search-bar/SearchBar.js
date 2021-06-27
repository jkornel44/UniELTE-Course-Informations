import axios from "axios";

function SearchBar() {
    const API_PATH = 'http://localhost:9000/sender.php';
    
    const handleFormSubmit = e => {
        e.preventDefault();
        axios({
          method: 'post',
          url: `${API_PATH}`,
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          data: new URLSearchParams({
                    'melyik' :'nevalapjan',
                    'felev':'2020-2021-2',
                    'limit': '100',
                    'targynev': 'Algoritmusok'
                })
        })
          .then(result => {
          
          })
      };
    
  return(
    <div className="bg-gray-600 px-3 py-3 shadow-md rounded-xl my-6">

            <div className="row">
                <div className="col-sm-6">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="search" placeholder="Algoritmusok és Adatszerkezetek II" value="Algoritmusok és Adatszerkezetek II"/>
                        <label htmlFor="search">Keresés</label>
                    </div>
                </div>

                <div className="col-sm-2">
                    <div className="form-floating">
                        <select className="form-select" id="semester" aria-label="choosed semester">
                            <option selected value="1">2020-2021/2</option>
                        </select>
                        <label htmlFor="semester">Időszak</label>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="form-floating">
                        <select className="form-select" id="searchType" aria-label="choosed type">
                            <option selected value="1">Kurzus neve</option>
                            <option value="2">Kurzus kódja</option>
                            <option value="3">Oktató</option>
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

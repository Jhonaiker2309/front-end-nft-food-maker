import SearchBar from "../SearchBar/SearchBar"
import Card from "../Card/Card"
import "./ShowAllFood.css"

export default function ShowAllFood({searchData, setSearchData, searchFoodData, dataOfFood}) {

    return (
        <div className='all'>
            <div className="search">
                <SearchBar searchData={searchData} setSearchData={setSearchData} searchFoodData={searchFoodData}/>
            </div>
            <div className="wrapper">
                {dataOfFood.map((foodDatum, i) => (
                    <Card key={i} foodDatum={foodDatum}/>
                ))}
            </div>
        </div>
    )
}

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBar.css"

export default function BasicTextFields({searchData, setSearchData, searchFoodData}) {
    return (
        <div className='search-bar'> 
            <TextField id="standard-basic" label="Food name" variant="standard" value={searchData} onChange={e => setSearchData(e.target.value)}/>
            <Button variant="outlined" onClick={() => searchFoodData()}>Search</Button>
        </div>
    );
}
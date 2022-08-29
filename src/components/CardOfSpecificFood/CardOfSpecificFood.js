import {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import axios from "axios"

export default function MediaCard({currentFood}) {

    const [currentURL, setCurrentURL] = useState("")
    const [addressToMint, setAddressToMint] = useState("0x0000000000000000000000000000000000000000")

    const getApiQR = async () => {

        const currentFoodInJson = JSON.stringify(currentFood)
        const encodedData = btoa(currentFoodInJson)

        if(addressToMint.length < 10) {
            console.log("Select a valid ethereum address") 
            return
        }

        const dataApi = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/mintNft`, {} ,{
            params: {
                currentAccount: addressToMint,
                encodedData
            }
        })

        setCurrentURL(dataApi.data)
    }

    return (
        <Card sx={{ maxWidth: 545 }} className="card">
            <CardMedia
            component="img"
            height="340"
            image={currentFood.image}
            alt="food image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {currentFood.title}
                </Typography>
            </CardContent>
            <div>
                <CardActions>
                    <TextField id="standard-basic" label="Address To Mint" variant="standard" value={addressToMint} onChange={e => setAddressToMint(e.target.value)}/>
                    <Button size="small" variant="contained" onClick={() => getApiQR()}>Create Link</Button>
                    {currentURL.length ? <a href ={`${currentURL}`}  style={{textDecoration: 'none'}}><Button size="small" variant="contained">Mint</Button></a> : null}
                </CardActions>
            </div>  
        </Card>
  );
}
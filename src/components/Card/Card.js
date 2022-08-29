import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import "./Card.css"

export default function MediaCard({foodDatum}) {
    return (
        <Card sx={{ maxWidth: 345 }} className="card">
        <CardMedia
        component="img"
        height="140"
        image={foodDatum.image}
        alt="food image"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {foodDatum.title}
        </Typography>
        </CardContent>
        <div>
            <CardActions>
                <Link to ={`food/${foodDatum.id}`} className="link" style={{textDecoration: 'none'}}><Button size="small" variant="contained">Mint</Button></Link>
            </CardActions>
        </div>  
    </Card>
  );
}
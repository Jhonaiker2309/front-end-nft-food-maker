import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard({foodDatum}) {
    
    return (
        <Card sx={{ maxWidth: 500, maxHeight: 500 }}>
            <CardMedia
            component="img"
            height="340"
            image={foodDatum.image}
            alt="food image"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {foodDatum.title}
            </Typography>
        </CardContent>
    </Card>
  );
}
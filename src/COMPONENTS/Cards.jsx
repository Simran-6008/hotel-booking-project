import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#FFB200",
  },
});

const Cards = ({ dataList, AllData }) => {
  const newObj = {
    hotelId: dataList.id,
    hotelList: AllData,
  };

  return (
    <div className="card-container">
      <Card
        variant="outlined"
        sx={{
          m: 3,
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          zIndex: 1,
        }}
      >
        <Box sx={{ alignSelf: "start", ml: 2, display: "flex" }}>
          <CardMedia
            component="img"
            width="100"
            height="167"
            src={dataList.image}
            sx={{
              m: 2,
              borderRadius: "6px",
              width: { xs: "100%", sm: 300 },
            }}
          />
          <Box>
            <Typography
              sx={{ m: 1, color: "#0000FF" }}
              variant="h5"
              gutterBottom
            >
              {dataList.Hotelname}
              <Box>
                <StyledRating
                  name="read-only"
                  defaultValue={dataList.Rating}
                  icon={<FavoriteIcon fontSize="inherit" />}
                  emptyIcon={<FavoriteBorderIcon />}
                  readOnly
                />
              </Box>
            </Typography>
            <Typography
              sx={{ m: 1, color: "#3457D5" }}
              variant="body2"
              fontWeight="regular"
            >
              Location: {dataList.Address}
            </Typography>
            <Typography
              sx={{ m: 1 }}
              variant="body2"
              color="text.secondary"
              fontWeight="regular"
            >
              Availability: {dataList.Availability}
            </Typography>
            <Typography
              sx={{ m: 1, color: "#008000" }}
              variant="body2"
              fontWeight="regular"
            >
              {dataList.Bonus}
            </Typography>
            <Typography
              sx={{ m: 1, color: "#008000" }}
              variant="body2"
              fontWeight="regular"
            >
              {dataList.BonusTwo}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ alignSelf: "center", ml: 4 }}>
          <Rating
            sx={{ m: 2 }}
            name="read-only"
            value={dataList.Rating}
            readOnly
          />
          <Typography
            sx={{ m: 2 }}
            variant="body1"
            color="black"
            fontWeight="regular"
          >
            ₹ {dataList.Price}/per night
          </Typography>

          {dataList.Availability === 0 ? (
            <Button disabled>not availible</Button>
          ) : (
            <Link to={`/bookingPageCompo`} state={newObj}>
              <Button sx={{ m: 2 }} variant="contained">
                Reserve
              </Button>
            </Link>
          )}
        </Box>
      </Card>
    </div>
  );
};

export default Cards;

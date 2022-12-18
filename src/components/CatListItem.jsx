import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { CheckCircle } from "@mui/icons-material";
import { Place } from "@mui/icons-material";
import { FlagCircle } from "@mui/icons-material";
import { CardContent, CardMedia, Typography } from "@mui/material";
import { Pets } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { API_IMG } from "../API_URL";

export default function CatListItem({
  catname,
  catid,
  origin,
  ccode,
  image,
  desc,
  temper,
  wimperial,
  wmetric,
  lifespan,
  wikipedia,
}) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  let setpict

  if(image == null){
    setpict = "https://cnpspca.org/wp-content/uploads/2020/07/Placeholder_Cat.png"
  }else{
    setpict = `${API_IMG}${image}.jpg`
  }

  return (
    <>
    <div>
      <ListItemButton onClick={handleClick}
      style={{backgroundColor: "#E9E6E0", borderRadius: "5%"}}>
        <CardMedia
          component="img"
          image={setpict}
          alt={catname}
          sx={{
            maxWidth: "100%",
            height: "auto",
            width: "200px",
            height: "200px",
            float: "left",
            margin: "1px",
            padding: "1px"}}
        />
        <CardContent>
          <ListItem>
          <ListItemIcon>
              <Pets />
            </ListItemIcon>
            <Typography>
              <b>{catname}</b>
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle />
            </ListItemIcon>
            <Typography>Id: {catid}</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Place />
            </ListItemIcon>
            <Typography>Origin: {origin}</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FlagCircle />
            </ListItemIcon>
            <Typography>Country Code: {ccode}</Typography>
          </ListItem>
        </CardContent>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        sx={{ paddingBottom: "3%", paddingTop: "3%",paddingLeft: "2%", paddingRight: "2%", borderRadius: "5%" }}
        style={{backgroundColor: "#E9E6E0"}}
      >
        <Typography>
          <b>Description:</b> {desc}
        </Typography>
        <Typography>
          <b>Temper:</b> {temper}
        </Typography>
        <Typography>
          <b>Weight:</b> Imperial {wimperial},{"\n"}
          Metric {wmetric}
        </Typography>
        <Typography>
          <b>Lifespan:</b> {lifespan}
        </Typography>
        <br/>
        <Button size="small" href={wikipedia} target="_blank" variant="contained"
        sx={{backgroundColor:"#DCA780",
        '&:hover': {backgroundColor:"#DA8260"}}}
        >
          Learn More
        </Button>
      </Collapse>
      </div>
    </>
  );
}

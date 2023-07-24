import { Button, CardActions } from "@mui/material";
import ArrowCircleRight from "@mui/icons-material/ArrowCircleRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const CardButtons = (props) => {
  const { links } = props;
  return (
    <CardActions sx={{ paddingLeft: "0px"}}>

        <Link
          key={links.url}
          style={{ color: "white"}}
          to={links.url}
    
        >
      <Button
        size="small"
        variant="contained"
        sx={{ color: "white", width: "100%", paddingLeft: "25px", paddingRight: "25px" }}
        disabled={!links.url}
        //href={links.url ? links.url : " "}
        endIcon={<ArrowCircleRight />}
      >          {" "}
      Read More</Button>



        </Link>


      {links.github ? (
        <Button
          size="small"
          variant="outlined"
          sx={{ width: "50%", border: "1px solid" }}
          target="_blank"
          href={links.github}
          startIcon={<GitHubIcon />}
        >
          Repository
        </Button>
      ) : (
        <></>
      )}
    </CardActions>
  );
};

export default CardButtons;

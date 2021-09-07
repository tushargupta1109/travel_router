import { AppBar, Grid, Toolbar, Typography, Select } from "@material-ui/core";
import React, { useContext, useEffect,useState ,createRef} from "react";
import { Link } from "react-router-dom";
import { favContext } from "../context";
import firebase, { db } from "../firebase";
import useStyles from "./styles.js";
import Favshow from "../Favshow/Favshow";

const Favourites = () => {
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();
  const uid = firebase.auth().currentUser.uid;
  const [fav, setFav] = useContext(favContext);
  useEffect(() => {
    async function fetchf() {
      db.collection("users")
        .doc(uid)
        .get()
        .then((data) => {
          if(data.data()){
            setFav(data.data().fav);
          }
        });
    }
    fetchf();
  }, []);

  useEffect(() => {
    setElRefs((refs) =>
      Array(fav.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [fav]);
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            Travel Advisor
          </Typography>
          <Typography variant="h5" className={classes.title}>
            My Favourites
          </Typography>
          <Link to="/" style={{ color: "white" }}>
            <Typography variant="h6" className={classes.title}>
              Go to Home
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      {fav.length === 0 ? (
        <Typography
          variant="h4"
          className={classes.title}
          style={{ paddingTop: 80, textAlign: "center" }}
        >
          No Favourites Added.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {fav?.map((place, i) => (
            <Grid ref={elRefs[i]} key={i} item xs={12}>
              <Favshow
                
                refProp={elRefs[i]}
                place={place}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};
export default Favourites;

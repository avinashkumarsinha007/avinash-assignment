import React from "react";
import styles from "./Navbar.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: 350,
    textAlign: "center",
    borderRadius: 10,
    padding: theme.spacing(2, 4, 3),
  },
  paperSignUp: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: 350,
    textAlign: "center",
    borderRadius: 10,
    padding: theme.spacing(2, 4, 3),
  },
  inputs: {
    width: "100%",
    marginTop: 50,
  },
  textField: {
    width: "100%",
    marginTop: 15,
  },
  LoginBtn: {
    marginTop: 50,
    color: "white",
    width: "40%",
    backgroundColor: "#0EBABA",
    "&:hover": {
      color: "black",
    },
  },
}));
function Navbar() {
  
  let history = useHistory();
  
  return (
    <div className={styles.Navbar}>
      <div className={styles.Navbar__Logo}>
        <img
          src="https://images.unsplash.com/photo-1574221114300-7041bae57687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80"
          alt="logo"
          style={{ cursor: "pointer",width:"40px" ,marginLeft:"2vw",borderRadius:"50%"}}
          onClick={() => history.push("/")}
        />
        <p style={{marginTop:"5px"}} className={styles.Navbar__Logo__Text}>Home</p>
      </div>
      <div></div>
      <div className={styles.Navbar__Button__Cars}>
        <button>
          <b>Hyundai</b> Subscription
        </button>
        <button>
          <b>Mahindra</b> Subscription
        </button>
      </div>
      <div className={styles.Navbar__Button__Info}>
        <button>Cars Subscription</button>
        <button>How it works</button>
        <button>FAQs</button>
      
        <button >Login or Signup</button>
            
      </div>
    </div>
  );
}

export default Navbar;

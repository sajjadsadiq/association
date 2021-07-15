import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography"; 
import Card1 from '../../UserDashboard/Card1/Card1';
import Card2 from '../../UserDashboard/Card2/Card2';
import Card3 from '../../UserDashboard/Card3/Card3';
import Sidebar from '../../UserDashboard/Sidebar/Sidebar';
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const UserDashboardContent = () => {
    const classes = useStyles();
  
    return (
        <>
            <div className={classes.root}>
       <Sidebar/>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography>
            <Card1 />
          </Typography>

          <Typography>
            <Card2 />
          </Typography>

          <Typography>
            <Card3 />
          </Typography>
          
        </main>
      </div>
        </>
    );
};

 
export default UserDashboardContent;
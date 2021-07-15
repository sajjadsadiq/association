import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Sidebar from "../../UserDashboard/Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import './Profile.css'
import { Link } from "react-router-dom";
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
const Profile = () => {
  const classes = useStyles();

  let form = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form_data = new FormData(form.current);
    let payload = {};
    form_data.forEach(function (value, key) {
      payload[key] = value;
    });
    // console.log("payload", payload);
    // Place your API call here to submit your payload.
  };
  return (
    <>
      <div className={classes.root}>
        <Sidebar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div>  
		  <Link to="/updateProfile"> <h2 className="text-muted p-3 user-profile">EDIT PROFILE      <FontAwesomeIcon icon={faEdit} className="ml-2"/></h2></Link>
            <div class="flex space-x-2 w-full overflow-hidden mt-5">
			
           <div class="card border border-gray-700 bg-gray-700 text-gray-50 mx-auto  transition-shadow shadow-xl hover:shadow-xl w-full">
                <div class="">
                  <img
                    src="https://image.freepik.com/free-vector/abstract-binary-code-techno-background_1048-12836.jpg"
                    class="h-48 w-full"
                  />
                </div>

                <div class="flex items-center p-5">
                  <div class="relative flex flex-col items-center w-full">
                    <div class="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-400  absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1">
                      <img
                        class="h-24 w-24 md rounded-full relative"
                        src="https://avatars3.githubusercontent.com/u/11801238?v=4"
                        alt=""
                      />
                      <div class="absolute"></div>
                    </div>
                    <div class="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                      <span class="text-md whitespace-nowrap text-gray-50 font-semibold">
                        Brahim
                      </span>
					  <span class="text-md whitespace-nowrap text-gray-50 font-semibold">
                        Brahim
                      </span>
					  <span class="text-md whitespace-nowrap text-gray-50 font-semibold">
                        Brahim
                      </span>
                      <span class="text-md whitespace-nowrap text-gray-100">
                        boussadjra
                      </span>
                      <p class="text-sm text-gray-200">
                        I can't start my day without a coffee cup
                      </p>
                      <div class="py-2 flex space-x-2">
                        <button class="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max border bg-transparent border-purple-400 text-purple-400 hover:border-purple-800 hover:border-purple-500 px-4 py-1 flex items-center hover:shadow-lg">
                          <span class="mr-2"></span>FOLLOW
                          <span class="ml-2"></span>
                        </button>
                        <button class="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-green-500 hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg">
                          <span class="mr-2">
                            <svg
                              height="20"
                              width="20"
                              viewBox="0 0 32 32"
                              class="fill-current text-red-100"
                            >
                              <path d="M22.5,4c-2,0-3.9,0.8-5.3,2.2L16,7.4l-1.1-1.1C12,3.3,7.2,3.3,4.3,6.2c0,0-0.1,0.1-0.1,0.1c-3,3-3,7.8,0,10.8L16,29	l11.8-11.9c3-3,3-7.8,0-10.8C26.4,4.8,24.5,4,22.5,4z"></path>
                            </svg>
                          </span>
                          SPONSOR <span class="ml-2"></span>
                        </button>
                      </div>
                      <div class="py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid">
                        <span class="text-center px-2">
                          <span class="font-bold text-gray-50">56</span>
                          <span class="text-gray-100"> followers</span>
                        </span>
                        <span class="text-center px-2">
                          <span class="font-bold text-gray-50">112</span>
                          <span class="text-gray-100"> following</span>
                        </span>
                        <span class="text-center px-2">
                          <span class="font-bold text-gray-50">27</span>
                          <span class="text-gray-100"> repos</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Profile;

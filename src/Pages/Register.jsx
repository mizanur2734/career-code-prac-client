import Lottie from "lottie-react";
import React, { use } from "react";
import registerLottie from "../../src/assets/lotties/register.json";
import { AuthContext } from "./Context/AuthContext";
import SocailLogin from "./Shared/SocailLogin";

const Register = () => {
  const { createUser, profile, user, setUser } = use(AuthContext);

  
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    console.log(fullName, email, password, photoURL);

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        // profile
        profile({
          displayName: fullName,
          photoURL: photoURL,
        })
        // update profile
        .then(() => {
            const updateProfile = {
              ...user,
              displayName: fullName,
              photoURL: photoURL,
            };
            setUser(updateProfile)
          })
         .catch(error =>{
          console.log(error)
         }) 
         
      })
      .then((error) => {
        console.log(error);
      });

  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "200px" }}
            animationData={registerLottie}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  className="input"
                  placeholder="Your Name"
                />
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="https://your-photo-url.com"
                  className="input"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Sign Up</button>
              </fieldset>
            </form>
            <SocailLogin></SocailLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

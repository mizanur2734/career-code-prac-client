import React, { Suspense } from "react";
import MyApplicationStats from "./MyApplicationStats";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth";
import { myApplicationsPromise } from "../Api/ApplicationsApi";


const MyApplications = () => {
  const { user } = useAuth();
  return (
    <div>
      <MyApplicationStats></MyApplicationStats>
      <Suspense fallback={"Loading your Applications"}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;

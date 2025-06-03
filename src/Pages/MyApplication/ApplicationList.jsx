import React, { use } from "react";
import JobApplicationsRow from "./JobApplicationsRow";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);
  return (
    <div>
      <h2 className="text-4xl">Job Applied so far: {applications.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  #
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
             
              {
                applications.map((application, index) =>
                <JobApplicationsRow
                key={application._id}
                index={index}
                application={application}>
                </JobApplicationsRow>)
              }
          
          </tbody>
         
          
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;

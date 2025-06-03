import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();

  const { user } = useAuth();
  console.log(jobId, user);

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedIn, github, resume);

    // job application info
    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      resume,
      github,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3 className="text-4xl text-center my-2">
        Apply this for job:<Link to={`/jobs/${jobId}`}>Details</Link>{" "}
      </h3>
      <div className="flex justify-center">
        <form onSubmit={handleApplyFormSubmit}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">LinkedIn Link</label>
            <input
              type="url"
              name="linkedIn"
              className="input"
              placeholder="LinkedIn Profile Link"
            />

            <label className="label">Github Link</label>
            <input
              type="url"
              name="github"
              className="input"
              placeholder="Github Link"
            />

            <label className="label">Resume Link</label>
            <input
              type="url"
              name="resume"
              className="input"
              placeholder="Resume Link"
            />
            <button type="submit" className="btn">
              Apply
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default JobApply;

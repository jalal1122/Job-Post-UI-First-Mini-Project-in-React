import React from "react";
import JobPost from "../components/jobPosts/jobPost";
import jobs from "../../testData";
import JobPostComponent from "../components/jobPostComponent/JobPostComponent";
import NavBar from "../components/NavBar";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 p-2">
      <NavBar />
      <JobPostComponent />
      {jobs.map((item) => (
        <JobPost
          name={item.name}
          email={item.email}
          bio={item.bio}
          designation={item.designation}
        />
      ))}
    </div>
  );
};

export default App;

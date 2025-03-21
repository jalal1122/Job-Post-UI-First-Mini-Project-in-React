import React from "react";
import "./jobPost.css";

const jobPost = ({name,designation,bio,email}) => {
  return (
    <div className="jobPostParent">
      <div className="above">
        <h1 className="text-2xl">{name}</h1>
        <span className="font-bold">{designation}</span>
      </div>
      <p className="font-bold">
        {bio}
      </p>
      <h3 className="font-bold text-2xl">{email}</h3>
    </div>
  );
};

export default jobPost;

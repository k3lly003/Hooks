/*
Create a UserPosts component that fetches and displays a list of posts for a given user ID using the JSONPlaceholder API (https://jsonplaceholder.typicode.com/). The component should fetch data when it mounts and update the data when the user ID prop changes. This exercise will help you understand how to use the useEffect hook for data fetching and the importance of the dependency array.
Expectations

- Fetch data from the JSONPlaceholder API.

- Display a list of posts for the given user ID.

- Refetch data when the user ID prop changes.
*/
import React, { useState, useEffect } from "react";

const UserPosts = ({ userId }) => {
  // Add your state and useEffect logic here

  return <div>{/* Render the list of posts here */}</div>;
};

export default UserPosts;

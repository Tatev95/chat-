import React from "react";
import { useAppDispatch } from "../../store";
import { setUsers } from "../../store/users-slice";

export const Home = () => {
  const dispatch = useAppDispatch();

  // const handleButtonClick = () => {
  //   dispatch(
  //     setUsers([
  //       { id: 1, name: "Joh" },
  //       { id: 2, name: "doe" },
  //     ])
  //   );
  // };

  return (
    <div>{/* <button onClick={handleButtonClick}>set users</button> */}</div>
  );
};

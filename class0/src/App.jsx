import React from "react";
import Card from "./components/Card";

const App = () => {
  const user = [
    {
      name: "dhruval",
      age: 21,
      skills: ["React ", "Nodejs ", "html ", "css ", "javascript "],
    },
    {
      name: "harsh",
      age: 25,
      skills: [ "html ", "css ", "javascript "],
    },
    {
      name: "harsh",
      age: 25,
      skills: [ "html ", "css ", "javascript  "],
    },
    {
      name: "harsh",
      age: 25,
      skills: [ "html ", "css  ", "javascript "],
    },
    {
      name: "harsh",
      age: 25,
      skills: [ "html ", "css ", "javascript "],
    },
    {
      name: "harsh",
      age: 25,
      skills: [ "html ", "css ", "javascript "],
    },
  ];
  return (
    <div className="p-4 flex gap-5">
      {user.map((user, indx) => (
        <div
          className="w-70 h-70 p-4  bg-zinc-300 font-semibold text-3xl wrap-break-word"
          key={indx}
        >
          <h1>{user.name}</h1>
          <h4>age:{user.age}</h4>
          <p>skills : {user.skills}</p>
        </div>
      ))}

      {/* <Card name = {user[0].name} age = {user[0].age}  skills = {user[0].skills}/>
      <Card name = {user[1].name} age = {user[1].age} skills = {user[1].skills}/> */}
    </div>
  );
};

export default App;

import React from "react";
import Card from "./components/Card";
const App = () => {
  return (
    <div class="bg-black h-screen w-full text-white flex  gap-1">
      <Card user="harsh" age={25} img="https://images.unsplash.com/photo-1765826930384-ae0f99e0dc80?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="sarthack" age={99} img="https://images.unsplash.com/photo-1765470383293-af214e818d79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="dhruval" age={69} img="https://images.unsplash.com/photo-1765870909790-f01a1bb2074d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  );
};

export default App;

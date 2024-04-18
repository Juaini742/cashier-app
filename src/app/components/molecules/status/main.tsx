import React from "react";
import TableStatus from "./table";
import StatusHeader from "./header";

function MainStatus() {
  return (
    <main className="container">
      <div className="mt-10">
        <h1 className="text-3xl">
          Welcome To <span className="font-bold text-primary">Our Coffee</span>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
          culpa.
        </p>
      </div>
      <StatusHeader />
      <TableStatus />
    </main>
  );
}

export default MainStatus;

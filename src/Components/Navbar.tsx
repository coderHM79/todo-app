import { useEffect, useState } from "react";

export default function Navbar() {
  return (
    <div className="nav-container">
      <img className="logo" src="../favicon.gif" alt="Icon" width="60px" height="60px" />
      <h1>MHM Todo List</h1>
      <LocalDate />
    </div>
  );
}

const LocalDate = () => {
  const date = new Date();
  const [seconds, setSeconds] = useState(date.getSeconds());
  let myLocalDate = date.toLocaleString()

  setInterval(() => { setSeconds(date.getSeconds()) }, 1000);
  useEffect(() => { myLocalDate = date.toLocaleString() }, [seconds]);

  return <div className="local-date">{myLocalDate}</div>;
}
import { Link } from "react-router-dom";

const notFound = () => {
  return (
    <div>
      <p>
        Not Found, Go back to Safety: <Link to="/">Home Sweet Home</Link>
      </p>
      <a href="https://github.com/jihedmastouri">My Github</a>
    </div>
  );
};

export default notFound;

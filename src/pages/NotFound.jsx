import NotFoundTag from "../../src/assets/Notfound.svg";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center min-h-[500px]">
      <img alt="Project" src={NotFoundTag} className="h-8.5 mb-2" />
      <p className="text-md text-gray-300">
        The requested page was not found. You might want to go back to{" "}
        <Link
          to="/"
          className="!text-fuchsia-200 font-bold pt-3 font-main underline"
        >
          home
        </Link>
        .
      </p>
    </div>
  );
}

export default NotFound;

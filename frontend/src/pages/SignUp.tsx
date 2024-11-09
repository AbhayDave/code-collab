import { Navigate } from "react-router-dom";
import GitHubOAuth from "../auth/GithubOAuth";
import useAuthStore from "../store/AuthStore";

function SignUp() {
  const { user } = useAuthStore();

  if (user) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="h-1/2 w-1/4 flex gap-4 flex-col items-center justify-center">
        <img
          className="w-56 select-none"
          draggable="false"
          src="/github.svg"
          alt="Your SVG"
        />
        <GitHubOAuth action="Sign Up" />
      </div>
    </div>
  );
}

export default SignUp;

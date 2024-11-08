import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/AuthStore";

interface GitHubOAuthProps {
  action: string;
}

const GitHubOAuth = ({ action }: GitHubOAuthProps) => {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  if (user) {
    navigate("/home");
  }

  const handleLogin = () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    const redirectUri = "http://localhost:5174/auth/github/callback";
    const scope = "repo user";

    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  };

  const btnContent = `${action} with GitHub`;

  return (
    <button className="btn btn-outline" onClick={handleLogin}>
      {btnContent}
    </button>
  );
};

export default GitHubOAuth;

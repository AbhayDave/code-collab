import { useEffect } from "react";
import axios from "axios";
import useAuthStore from "../store/AuthStore";
import { useNavigate } from "react-router-dom";

const GitHubCallback = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccessToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      if (code) {
        try {
          const response = await axios.post(
            "http://localhost:5000/auth/github/callback",
            { code }
          );
          const accessToken = response.data.accessToken;

          // Fetch user data using access token
          const userResponse = await axios.get("https://api.github.com/user", {
            headers: {
              Authorization: `token ${accessToken}`,
            },
          });

          // Log in the user with their data and access token
          login(userResponse.data, accessToken);

          navigate("/home");
        } catch (error) {
          console.error("Error fetching access token:", error);
          navigate("/");
        }
      }
    };

    fetchAccessToken();
  }, [login]);

  return <h1>Processing Login...</h1>;
};

export default GitHubCallback;

import useAuthStore from "../store/AuthStore";
import HomeMenu from "./HomeMenu";

function HomeUserDetails() {

    const { user } = useAuthStore();


    return (
      <div className="min-h-96 flex-grow w-3/4 p-14 flex items-center justify-between">
        <div className="h-full flex items-center justify-center">
          <img src={user?.avatar_url} className="h-2/3 rounded-full" />
        </div>
        <div>
          <div className="stats stats-vertical shadow border border-primary">
            <div className="stat">
              <div className="stat-title">Email</div>
              <div className="stat-value text-3xl">{user?.email}</div>
            </div>

            <div className="stat">
              <div className="stat-title">Username</div>
              <div className="stat-value text-3xl">{user?.login}</div>
            </div>

            <div className="stat">
              <div className="stat-title">Username</div>
              <div className="stat-value text-3xl">{user?.login}</div>
            </div>
          </div>
        </div>
        <HomeMenu />
      </div>
    );
}

export default HomeUserDetails
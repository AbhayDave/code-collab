import { VscNewFile } from "react-icons/vsc";
import { LuFiles } from "react-icons/lu";
import { PiFilePlusBold } from "react-icons/pi";
import { Link } from "react-router-dom";

function HomeMenu() {
  return (
    <>
      <div className="stats stats-vertical border border-primary shadow">
        <Link to={"/new-workspace"} className="stat">
          <div className="stat-figure text-primary">
            <VscNewFile className="text-4xl" />
          </div>
          <div className="stat-value text-primary">New Workspace</div>
        </Link>

        <Link to={'/workspaces'} className="stat">
          <div className="stat-figure text-secondary">
            <LuFiles className="text-4xl" />
          </div>

          <div className="stat-value text-secondary">Your Workspaces</div>
        </Link>

        <Link to={'/join-workspace'} className="stat">
          <div className="stat-figure text-base-content">
            <PiFilePlusBold className="text-4xl" />
          </div>
          <div className="stat-value">Join a Workspace</div>
        </Link>
      </div>
    </>
  );
}

export default HomeMenu;

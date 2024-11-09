import { HiMiniHeart } from "react-icons/hi2";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer footer-center bg-primary text-primary-content p-10 flex flex-col gap-3">
      <aside>
        <p className="font-bold">Code Collab.</p>
        <p>Copyright © {new Date().getFullYear()}</p>
        <div className="flex items-center gap-2">
          Made with <HiMiniHeart className="text-3xl" />
        </div>
      </aside>
      <div>&</div>
      <nav>
        <div className="grid grid-flow-col gap-4 text-3xl">
          <SiMongodb />
          <SiExpress />
          <FaReact />
          <FaNode />
        </div>
      </nav>
    </footer>
  );
}

export default Footer;

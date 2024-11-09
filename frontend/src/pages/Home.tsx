import Footer from "../components/Footer";
import HomeUserDetails from "../components/HomeUserDetails";
import NavBar from "../components/NavBar";
function Home() {
  
  return (
    <div className="h-full w-full flex flex-col items-center">
      <NavBar />
      <HomeUserDetails />
      <Footer />
    </div>
  );
}

export default Home;

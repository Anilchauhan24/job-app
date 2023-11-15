import Navbar from "./Navbar/Navbar";
import Body from "./Body";
import "../Home/Home.css";
import FilterDashboard from "../Filter/FilterDashboard";
import Footer from "../Footer/Footer";
const Home = () => {

    function bodyColor() {
        const body = document.body;
        body.classList.toggle('newColor')
    }

    return (
        <>
            <div className="Home-color">
                <Navbar onLoad={bodyColor} />
                <Body />

            </div>

            <div className="home-part2">
                <FilterDashboard />
            </div>

            <div>
                <hr />
                <Footer />
            </div>
        </>
    )
}
export default Home;
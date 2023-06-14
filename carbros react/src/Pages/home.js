// import sample from "../Assets/bgvideo.mp4";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  const Email = localStorage.getItem("Email")
  return (
    <>
      <>
        {/* <video className="bg-video" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video> */}
        <div className="position-absolute col-12 h-100 d-flex align-items-center justify-content-center h3 text-light">
          <div>hi.</div>
        </div>
      </>
    </>
  );
};
export default Home;

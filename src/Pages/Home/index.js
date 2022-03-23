import TableComponent from "../../Component/Table/index";
import SliderCard from "../../Component/SliderCard";
import "./home.css";

const Dashboard = () => {
  const firstSlider = [
    { name: "Commodo", percent: "94%", value: 94 },
    { name: "Lacus", percent: "0.20%", value: 0.2 },
    { name: "Ultrices", percent: "0.13%", value: 0.13 },
    { name: "Tortor", percent: "0.26%", value: 0.26 },
    { name: "Quis", percent: "0.20%", value: 0.2 },
    { name: "Lorem", percent: "1.37%", value: 1.37 },
  ];

  const secondSlider = [
    { name: "Lorem", percent: "94%", value: 94 },
    { name: "sed", percent: "0.20%", value: 0.2 },
    { name: "Blandit", percent: "0.13%", value: 0.13 },
    { name: "Ligula", percent: "0.26%", value: 0.26 },
    { name: "Eget", percent: "0.20%", value: 0.2 },
  ];
  return (
    <div className="dashboard-container">
      <div className="slidercontainer">
        <SliderCard
          customClass="sliderCardMargin"
          showProgress={firstSlider}
        />
        <SliderCard
          customClass="sliderCardMargin"
          showProgress={secondSlider}
        />
        
      </div>
      <div className="dash_table">
        <TableComponent filter />
      </div>
    </div>
  );
};

export default Dashboard;

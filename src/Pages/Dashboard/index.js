import TableComponent from "../../Component/Table";
import SliderCard from "../../Component/SliderCard";

const FirstDashboard = () => {
    const firstSlider=[
        {name:"Commodo", percent: '94%', value: 94},
        {name:"Lacus", percent: '0.20%', value: 0.20},
        {name:"Ultrices", percent: '0.13%', value: 0.13},
        {name:"Tortor", percent: '0.26%', value: 0.26},
        {name:"Quis", percent: '0.20%', value: 0.20},
        {name:"Lorem", percent: '1.37%', value: 1.37},
      ]
    
      const secondSlider=[
        {name:"Lorem", percent: '94%', value: 94},
        {name:"sed", percent: '0.20%', value: 0.20},
        {name:"Blandit", percent: '0.13%', value: 0.13},
        {name:"Ligula", percent: '0.26%', value: 0.26},
        {name:"Eget", percent: '0.20%', value: 0.20},
      ]
    return(
        <div className="content-container">
            <div className='table-container'>
            <TableComponent />
            </div>
          <div className="slider-container">
            <SliderCard customClass="sliderCardMargin-first" showProgress={firstSlider}/>
            <SliderCard customClass="sliderCardMargin-second" showProgress={secondSlider} />
          </div>
        </div> 
    )
}

export default FirstDashboard;

import { color } from "chart.js/helpers"
import { FaSearch, FaStar, FaUser } from "react-icons/fa"

const patient =[
  {
    id:"adad",
    name:"Rahul Anand",
    address:"New Delhi",
    type: "IPD",
    priority:"High",
    handleWithCare: true,
    tasklist: [
      {
        type:"Drugs",
        logisticUserName: "Jack Blackman",
        description: "Runner"
      },
      {
        type:"Blood Test",
        logisticUserName: "Jack Blackman",
        description: "Plebotomist"
      },
      {
        type:"Injectables",
        logisticUserName: "Mary Seacole",
        description: "Nurse"
      }
    ]
  },
  {
    id:"adad",
    name:"Vikas Mishra",
    address:"Uttar Pradesh",
    type: "OPD",
    priority:"High",
    handleWithCare: true,
    tasklist: [
      {
        type:"Drugs",
        logisticUserName: "Ash",
        description: "Plebotomist"
      },
      {
        type:"Blood Test",
        logisticUserName: "Jack Blackman",
        description: "Runner"
      }
    ]  
  },
  {
    id:"adad",
    name:"Rakesh Roshan",
    address:"Uttar Pradesh",
    type: "OPD",
    priority:"High",
    handleWithCare: true,
    tasklist: [
      {
        type:"Injectables",
        logisticUserName: "Hritik",
        description: "Runner"
      }
    ]  
  }

]

const Test = () => {
  return (
    <div className="test">
      <h1>Work Orders</h1>
      <div>
        <input placeholder="Today" name="today"/>
        <input placeholder="Tests" name="today"/>
        <input placeholder="Location" name="location"/>
        <input placeholder="IPD" name="ipd"/>
        <input placeholder="Priority:High" name="priority"/>
        <input placeholder="Search Location or Tests" name="search"/> 
        <button><FaSearch/></button>
      </div>
      <div >
        {patient && patient.map((item)=>(
          <div className="main"> 
             <div className="patient"> 
              <span className="icon"><FaUser/></span>
              <article>
              <p>{item.name}</p>
              <p>{item.address}</p>
              <p>{item.type}</p>
              <p style={{color:"green",fontWeight:700}}>Priority : {item.priority}</p>
              <button>View Prescription</button>
              </article>
             </div>
             {/* Logistic Users */}
             {
              item.tasklist &&item.tasklist.map((tasks)=>(
                <div className="logisticUser"> 
                  <span className="left">
                    <b>{tasks.type}</b>
                    <p className="icon logistic-icon"><FaUser/></p>
                  </span>
                  <span className="right">
                    <article>{tasks.logisticUserName}</article>
                    <article>{tasks.description}</article>
                    <FaStar/>
                  </span>
                </div>
              ))
             }

          </div>
        ))}
      </div>
    </div>
  )
}

export default Test
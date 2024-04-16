const Users=[
    {
    name:"Thirumavalavan M",
    city:"Chennai",
    description:"Front-End developer",
    skills:["C","C++","HTML","CSS","JAVASRIPT","REACT.JS","NODE.JS","MONGO-DB"],
    online:true, 
    profile:"1.JPG",
  },
  {
    name:"Bala Preethika J",
    city:"Udumalpet",
    description:"Salesforce developer",
    skills:["C","C++","HTML","CSS","JAVASRIPT","REACT.JS","NODE.JS","MONGO-DB","SALESFORCE","POWER-BI"],
    online:true, 
    profile:"1.JPG",
  },
  {
    name:"Babu",
    city:"Thanjavur",
    description:"Front-End developer",
    skills:["C","C++","HTML","CSS","JAVASRIPT","REACT.JS","NODE.JS","MONGO-DB"],
    online:true, 
    profile:"",
  }
  ];
  
  function User(props){
   return(
      <div className="cardcontainer">
          <span className={props.online ?"pro online":"pro offline"}>
            {props.online?"Online":"Offline"}
          </span>
          <img className="img" src={props.profile} alt="user"/>
          <h3>{props.name}</h3>
          <h3>{props.city}</h3>
          <p>{props.description}</p>
          <div className="button">
              <button className="primary">Message</button>
              <button className="primary outline">Following</button>
          </div>
          <div className="skills">
              <h6>Skills</h6>
              <ul>
                  {props.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                  ))}
              </ul>
          </div>
      </div>
   );
  }
  
  export const ProfileCard = () => {
    return (
      <>
     {
      Users.map((user,index)=>(
        <User key={index}
        name={user.name}
        city={user.city}
        description={user.description}
        skills={user.skills}
        online={user.online}
        profile={user.profile}
        />
      ))
     }
      </>
    )
  }
  //<User name="Thirumavalavan M" city="Chennai" description="Front-End developer"
      // skills={["C","C++","HTML","CSS","JAVASRIPT","REACT.JS","NODE.JS","MONGO-DB"]} online={true} profile="1.JPG"/>
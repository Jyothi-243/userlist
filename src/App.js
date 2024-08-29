import UserProfile from "./components/UserProfile";
import './App.css';

const userDetailsList =[ {
  uniqueNo:1,
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  name:"priya",
  role: "intern"
},
{
  uniqueNo:2,
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  name:"padma",
  role: "intern"
},
{
  uniqueNo:3,
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  name:"sravya",
  role: "intern"
},
{
  uniqueNo:4,
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  name:"chakritha",
  role: "intern"
}
];

// to pass this as prop
const App = () =>(
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <input type="search"/>
    <ul>
      {userDetailsList.map((eachItem) => (
        <UserProfile UserDetails={eachItem} key={eachItem.uniqueNo}/>
      ))}
    </ul>

  </div>
)
export default App;



//<UserProfile userDetails={userDetailsList}/> //renders user profile\
//keys:keys help react to identify which items have changed,added or removed.
//key doesnot come in components.we cant access key in props.
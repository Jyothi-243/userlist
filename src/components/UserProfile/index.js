import './index.css'
const UserProfile = ({UserDetails}) =>{
    //const {UserDetails} =props 
    const {imageUrl,name,role} =UserDetails;
    return (
    <li className="user-card-container">
        <img src={imageUrl} className="avatar" alt="avatar"/>
        <div className="user-details-container">
            <h1 className="user-name">{name}</h1> 
            <p className="user-designation">{role}</p>
        </div>
    </li>
);};
export default UserProfile;

//while returing one no need to add return keyword

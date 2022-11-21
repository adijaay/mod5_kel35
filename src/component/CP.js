

import "./CP.css";

export default function CardProfile(props) {
    return (
        <div className="containerProfile">
            <img src={props.avatar} alt="avatar" className="avatarProfile" />
            <p className="usernameProfile">{props.username}</p>
            <p className="emailProfile">{props.email}</p>
            <h2 className="nameProfile">{props.name}</h2>
            <p className="public_reposProfile">{props.public_repos + " Public Repositories" }</p>
            <p className="companyProfile">{props.company}</p>
            <p className="locationProfile">{props.location}</p>
        </div>
    );
}

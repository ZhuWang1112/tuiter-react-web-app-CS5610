import React from "react";
import { faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <a className={`list-group-item ${active === 'home' ? 'active' : ''} list-group-item-action`}>
                <FontAwesomeIcon icon={faHome}/><span className="d-none d-xl-inline"> Home</span></a>
            <a className={`list-group-item ${active === 'explore' ? 'active' : ''} list-group-item-action`}>
                <FontAwesomeIcon icon={faHashtag}/><span className="d-none d-xl-inline"> Explore</span></a>
            <a className={`list-group-item ${active === 'notifications' ? 'active' : ''} list-group-item-action`}>
                <FontAwesomeIcon icon={faBell}/><span className="d-none d-xl-inline"> Notifications</span></a>
            <a className={`list-group-item ${active === 'messages' ? 'active' : ''} list-group-item-action`}>
                <FontAwesomeIcon icon={faEnvelope}/><span className="d-none d-xl-inline"> Messages</span></a>
            <a className={`list-group-item ${active === 'bookmarks' ? 'active' : ''} list-group-item-action`}>
                <FontAwesomeIcon icon={faBookmark}/><span className="d-none d-xl-inline"> Bookmarks</span></a>
            <a className={`list-group-item ${active === 'lists' ? 'active' : ''} list-group-item-action`}>
                <FontAwesomeIcon icon={faList}/><span className="d-none d-xl-inline"> Lists</span></a>
            <a className={`list-group-item ${active === 'profile' ? 'active' : ''} list-group-item-action`}>
                <FontAwesomeIcon icon={faUser}/><span className="d-none d-xl-inline"> Profile</span></a>
            <a className={`list-group-item ${active === 'more' ? 'active' : ''} list-group-item-action`}>
                <FontAwesomeIcon icon={faCircle}/><span className="d-none d-xl-inline"> More</span></a>
        </div>
    )
};
export default NavigationSidebar;
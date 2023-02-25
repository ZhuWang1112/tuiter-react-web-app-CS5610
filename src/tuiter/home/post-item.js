import React from "react";
import "../index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faCircleCheck, faLink, faComment, faRetweet, faHeart, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';



const PostItem = ({post}) => {

    // check
    const isEmpty = !post.title && !post.content && !post.source;
    // const link = !post.source;

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={`/images/${post.avatarIcon}`} className="wd-follow-image"/>
                </div>
                <div className="col-10">
                    <div>
                        <b>{post.userName}</b>
                        <FontAwesomeIcon icon={faCircleCheck} />
                        <span className="wd-color-gray">@{post.handle} · {post.time}</span>
                        <FontAwesomeIcon icon={faEllipsis} className="float-end" />
                    </div>
                    <div className="mb-2">
                        {post.review}
                    </div>
                    <ul className="list-group wd-cut rounded-4">
                        <li className="list-group-item p-0 wd-border-bold">
                            <img src={`/images/${post.image}`} width="100%"/>
                        </li>
                        <li className={`list-group-item wd-border-bold ${isEmpty ? 'd-none' : ''}`}>
                            <div>
                                {post.title}
                            </div>
                            <div className="wd-color-gray">
                                {post.content}
                            </div>
                            <div className="wd-color-gray">
                                <FontAwesomeIcon icon={faLink} />
                                <span>{post.source}</span>
                            </div>
                        </li>
                    </ul>
                    <div className="row wd-color-gray mt-2">
                        <div className="col-3">
                            <FontAwesomeIcon icon={faComment} />
                            <span>  {post.comments}</span>
                        </div>
                        <div className="col-3">
                            <FontAwesomeIcon icon={faRetweet} />
                            <span>  {post.retweet}</span>
                        </div>
                        <div className="col-3">
                            <FontAwesomeIcon icon={faHeart} />
                            <span>  {post.likes}</span>
                        </div>
                        <div className="col-3">
                            <FontAwesomeIcon icon={faArrowUpFromBracket} />
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default PostItem;
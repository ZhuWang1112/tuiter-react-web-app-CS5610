const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="wd-float-left">
                <div class="wd-color-gray">${post.topic}</div>
                <div>
                    <b>${post.userName}</b>
                    <i class="fa-solid fa-circle"></i>
                    <span class="wd-color-gray"> - ${post.time}</span>
                </div>
                <div>
                    <b>${post.title}</b>
                </div>
            </div>
            <div class="wd-float-right">
                <img src=${post.image} class="wd-post-image">
            </div>
        </li>
    `);
}

export default PostSummaryItem;
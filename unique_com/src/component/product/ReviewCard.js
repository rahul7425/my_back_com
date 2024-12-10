import React from "react";

const ReviewCard = ({ user, date, review, likes, dislikes, reply }) => {
    return (
        <div className="border-bottom pb-3 mb-3">
            <div className="d-flex align-items-center mb-2">
                <div className="me-2">
                    <img
                        src={`./images/avatar.png`}
                        alt={`${user}'s avatar`}
                        className="rounded-circle"
                        style={{ verticalAlign: 'super' }}
                        width={30}
                    />
                </div>
                <div className="user-ratings">
                    <span className="mb-0">{user}</span>
                    <span className="text-muted ms-2" style={{ fontSize: "10px", }}>{date}</span>
                    <div>
                        <span className="text-warning">
                            <ul className='d-flex gap-2 align-items-baseline mb-0'>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-half"></i></li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
            <div className="" style={{ marginLeft: "2.3rem", }}>
                <p>{review}</p>
                <div className="d-flex align-items-center gap-3">
                    <a className="text-muted" style={{ textDecoration: "none" }}>Reply</a>
                    <span className="text-muted">{likes} 👍</span>
                    <span className="text-muted">{dislikes} 👎</span>
                </div>
                {reply && (
                    <div className="mt-3 ps-4">
                        <div className="d-flex align-items-center">
                            <div className="me-2">
                                <img
                                    src={`./images/avatar.png`}
                                    alt={`${user}'s avatar`}
                                    className="rounded-circle"
                                    style={{ verticalAlign: 'super' }}
                                    width={30}
                                />
                            </div>
                            <h6 className="mb-3">{reply.user}</h6>
                            <small className="text-muted ms-2 mb-3" style={{ fontSize: "10px", }}>{reply.date}</small>
                        </div>
                        <p style={{ marginLeft: "2.3rem", }}>{reply.message}</p>
                    </div>
                )}
            </div>


        </div>
    );
};

export default ReviewCard;

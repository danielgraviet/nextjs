"use client";

import { useState } from "react";

export default function LikeButton() {
    const [like, setLike] = useState(0);
    return (
        <div>
            <button onClick={() => setLike(like + 1)}>Like</button>
            <p>You have {like} likes</p>
        </div>
    );
}
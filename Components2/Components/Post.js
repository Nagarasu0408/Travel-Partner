//Post.js

// function Click() {
//     <div style={{ margin: '0 20%' }} >
//         <center><h1>Stroy</h1></center>
//         <img alt='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5t0OlUWXW2LkmZBEI68Dtg9UCj0uk07-s61uScgSljH-axgcaitjc_okNqTopOvjfhk&usqp=CAU"
//             style={{ float: 'center', width: "30%", height: "350px", margin: '0 20px' }}
//         />
//     </div>
// }

// import { FullPostDetails } from "./PostDetails";
import SinglePost from "./SinglePost";
import React, { useState } from 'react';
function Post() {
    const URL = "data:image/jpeg;base64,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";
    return (
        <div style={{ margin: '0 20%' }}>
            <div >
                <h2>Stroy</h2>
                <img alt='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5t0OlUWXW2LkmZBEI68Dtg9UCj0uk07-s61uScgSljH-axgcaitjc_okNqTopOvjfhk&usqp=CAU"
                    style={{ float: 'left', width: "15%", height: "150px", margin: '0 20px' }}
                />
                <p id='display'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <center><button type="button" name="ReadMore">Read More</button></center>
            </div>
            <br />
            <div>
                <h2>Cartoon</h2>
                <img src={URL} style={{ float: 'right', width: "15%", height: "150px", margin: '0 20px' }}
                />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <center><button type="button" name="ReadMore">Read More</button></center>
            </div>
            <div >
                <h2>L0v3</h2>
                <img src="data:image/jpeg;base64,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"
                    style={{ float: 'left', width: "15%", height: "150px", margin: '0 20px' }} />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <center><button type="button" name="ReadMore">Read More</button></center>
            </div>
            <br />
            <div >
                <h2>Alone</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuTLTGU1kI3hMQpzxIWOx125TzCl_XAC2Rag&usqp=CAU" style={{ float: 'right', width: "15%", height: "150px", margin: '0 20px' }}
                />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <center><button type="button" name="ReadMore">Read More</button></center>
            </div>
        </div>
    );
}
export default Post;

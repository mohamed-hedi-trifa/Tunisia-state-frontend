import apiRequest from "./apiRequest";
// import { defer } from "react-router-dom";


export const singlePageLoader = async ({request, params} ) => {
    const res = await apiRequest("/post/"+ params.id)
    return res.data
}

// export const listPageLoader = async ({ request }) => {
//     const query = request.url.split("?")[1];
//     const postPromise = apiRequest(`/post?${query}`);
//     return defer({
//         postResponse: postPromise,
//     });
// };


export const listPageLoader = async ({ request }) => {
   
    const query = request.url.split("?")[1];

    const postResponse = await apiRequest(`/post?${query}`); 
   
    return { postResponse }; // Return the resolved data
};

export const profilePageLoader = async ({ request }) => {
   
 
    const query = apiRequest("users/profilePosts")

    const postResponse = await apiRequest(`/post?${query}`); 
    return postResponse.data ; 
};



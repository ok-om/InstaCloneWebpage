import axios from "axios"

const api = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})





export async function getFeed() {
    const response = await api.get("/api/post/feed")
    return response.data
}


export async function createPost(imageFile,caption) {

    const formData = new FormData();

    formData.append("img",imageFile);
    formData.append("caption",caption);

    const response = await api.post("/api/post",formData);

    return response.data
}


export async function likePost(postid) {
    const response = await api.post("/api/post/like/" + postid)
    return response.data
}

export async function unlikePost(postid) {
    const response = await api.post("/api/post/unlike/" + postid)
    return response.data
}


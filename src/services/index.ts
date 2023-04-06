import { iCreatePost, iSignup, iSignin, iVerify, iComment, iEditPost, iGetPost, iSearch } from "./interface"
import axios, {AxiosInstance, AxiosResponse} from "axios"
import { setCookie, getCookie, deleteCookie } from 'cookies-next'

export const MAIN_SERVER = "http://localhost:4444"
export const STORAGE_SERVER = "http://localhost:8888"

const USER_SERVICE = (url: string) => {
    const axiosInstance: AxiosInstance = axios.create({ baseURL: url })
    // @ts-ignore
    axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
        // @ts-ignore
        const token = getCookie("token")
        if (token) {
            // @ts-ignore
            request.headers['token'] = `${token}`
        }
        return request
    })

    axiosInstance.interceptors.response.use(async (response: AxiosResponse) => {
        if (response.status == 401) {
            // Sign out here
            window.location.reload()
        }
        return response
    }, async (error) => {
        if (error.response) {
            if (error.response?.status === 401) {
                // Sign out here
                window.location.reload()
            }
            return {
                status: error.response?.status || 400,
                data: error.response?.data
            }
        }
        return Promise.reject(error)
    })
    return axiosInstance
}
const userService = USER_SERVICE(MAIN_SERVER)

export const signup = ({name, username, email, password, birthday, gender}:iSignup) => axios.post(MAIN_SERVER+"/user/signup", {name, username, email, password, birthday, gender})

export const signin = ({email, password}:iSignin) => axios.post(MAIN_SERVER+"/user/signin", {email, password})

export const verify = ({token, otp}:iVerify) => axios.post(MAIN_SERVER+"/user/verify", {token, otp})

export const createPost = ({content, medias}:iCreatePost) => userService.post("/post", {content, medias})
export const editPost = ({postId, content, medias}:iEditPost) => userService.put(`/post?id=${postId}`, { content, medias })
export const deletePost = (postId:string) => userService.delete(`/post?id=${postId}`)
export const getPost = ({postId, limit, part}:iGetPost) => userService.get(`/post`, { 
    params: {
        ...(!!postId && { id:postId }),
        ...(!!limit && { limit }),
        ...(!!part && { part })
    }
})

export const like = (postId:string) => userService.post("/post/like", {id:postId})

export const createComment = ({content, media, postId}:iComment) => userService.post("/post/comment", {content, media, postId})
export const editComment = ({content, media, postId, commentId}:iComment) => userService.put(`/post/comment?id=${commentId}`, {content, media, postId})
export const deleteComment = (commentId:string) => userService.delete(`/post/comment?id=${commentId}`)

export const makeFriend = (userId:string) => userService.post(`/community/friend/${userId}`)
export const getFriendRequests = () => userService.get(`/community/friend/requests`)
export const getListOfFriend = () => userService.get(`/community/friend/friends`)
export const makeFollow = (userId:string) => userService.post(`/community/follow/${userId}`)
export const getListOfFollowing = () => userService.get(`/community/follow/following`)
export const getListOfFollower = () => userService.get(`/community/follow/followers`)


export const getRecentSearchList = () => userService.get(`/search/recent`)
export const search = ({keyword, complete}:iSearch) => userService.get(`/search`, {params: {
    keyword, ...(!!complete && { complete }),
}})
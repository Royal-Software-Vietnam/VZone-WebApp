export interface iCreatePost {
    content?: string,
    medias?: Array<any>
}

export interface iEditPost {
    postId: string,
    content?: string,
    medias?: Array<any>
}

export interface iGetPost {
    postId?: string,
    limit?: number, 
    part?: number
}

export interface iSearch {
    keyword: string,
    complete?: number | any
}

export interface iSignup { name:string, username:string, email:string, password:string, birthday:Date|any, gender:string }

export interface iSignin { email:string, password:string }

export interface iVerify { token:string, otp:string|number }

export interface iComment { content?:string, media?:any, postId:string, commentId?:string }
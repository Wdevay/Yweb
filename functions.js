export async function getPosts(){
    const reponse = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await reponse.json()
    return data
}

export async function getIdbyPosts(posts){
    let ids=[]
    posts.forEach(post => {
        if(!ids.includes(post.userId)){
            ids.push(post.userId)
        }
        
    });
    return ids;
}

export async function getAuthors(ids) {
    const authors = []
    for (let index = 0; index < ids.length; index++) {
        const id = ids[index];
        const reponse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await reponse.json()
        authors.push(data)
    }
    return authors
}

export async function getCommentLength(posts) {
    const nbcoms = {}
    for (let index = 0; index < posts.length; index++) {
        const post = posts[index];
        const reponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        const data = await reponse.json()
        nbcoms[post.id]=data.length
        }
        return nbcoms
}

export async function getCommentsbyPostId(posts) {
    const coms ={}
    for (let index = 0; index < posts.length; index++) {
        const post = posts[index];
        const reponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        const data = await reponse.json()
        coms[post.id]=data
        }
        return coms
}

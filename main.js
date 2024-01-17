import { getPosts } from "./functions.js";
import { getAuthors } from "./functions.js";
import { getIdbyPosts } from "./functions.js";
import { getCommentLength } from "./functions.js";
import { getCommentsbyPostId } from "./functions.js";

async function main(){
    const posts = await getPosts()
    const ids = await getIdbyPosts(posts)
    const authors = await getAuthors(ids)
    const nombreCommentaire = await getCommentLength(posts)
    const comments = await getCommentsbyPostId(posts)
    console.log(comments)

    const comTemplate = document.getElementById('comments-tpl')
    function addComs(posts,comments){
        const template = comTemplate.content.cloneNode(true)
        const avatar = template.querySelectorAll('img')
        const para = template.querySelectorAll('p')
        const username = template.querySelectorAll('a')
        username[0].innerText = `@${comment.name}`
    }








    const divpost = document.getElementById('posts-container')
    const template = document.getElementById('posts-tpl')
    posts.forEach(element => {
        const newpost = template.content.cloneNode(true)
        const titre =newpost.querySelectorAll('h2')
        const para = newpost.querySelectorAll('p')
        const img = newpost.querySelectorAll('img')
        titre[0].textContent = element.title
        para[0].textContent = `@${authors.find((el) => el.id === element.userId).username}`
        para[1].textContent = element.body
        para[2].textContent = `${nombreCommentaire[element.id]} commentaire(s)`
        const nomAuteur = authors.find((el) => el.id === element.userId).name
        const nomAutSplit = nomAuteur.split(' ')
        img[0].src = `https://ui-avatars.com/api/?name=${nomAutSplit[1]}+${nomAutSplit[0]}&background=random`
        divpost.appendChild(newpost)
});
}

main()





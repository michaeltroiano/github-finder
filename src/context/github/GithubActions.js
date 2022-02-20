import axios from "axios"

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: {
        Authorization: `token ${GITHUB_TOKEN}` 
    }
})


// Get search results
export const searchUsers = async (text) => {

    const params = new URLSearchParams({
        q: text
    })

    // const response = await github.get(`/search/users?${params}`).catch(err => {
    //     console.log(err)
    // })

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        Authorization: `token ${GITHUB_TOKEN}` 
     })

    const {items} = await response.json()

    return items

    // return response.data.items
}

 // Get user and repos
 export const getUserAndRepos = async(login) => {
    const reposParams = new URLSearchParams({
        sort: "created",
        per_page: 10
    })

    // const [user, repos] = await Promise.all([
    //     github.get(`/users/${login}`),
    //     github.get(`/users/${login}/repos?${reposParams}`)
    // ])

    // return { user: user.data, repos: repos.data}

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
        Authorization: `token ${GITHUB_TOKEN}` 
     })

    const user = await response.json()
    console.log(user)
    

    const reporesponse = await fetch(`${GITHUB_URL}/users/${login}/repos?${reposParams}`, {
        Authorization: `token ${GITHUB_TOKEN}` 
     })

    const repos = await reporesponse.json()

    return { user: user, repos: repos}

 }
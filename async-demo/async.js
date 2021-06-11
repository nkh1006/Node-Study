// Async and Await approach

const user = await getUser(1);
const repos = await getRepositories(user.getRepositories);
const commits = await getCommits(repos[0]);

console.log(commits);
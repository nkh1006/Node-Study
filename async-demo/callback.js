console.log('Before');
getUser(1, getRepositories);
 console.log('After');

function getRepositories(user) {
    getRepositories(user.gitHubUserName, getCommits);
}

function getCommits(repos) {
    getCommits(repos, displayCommits);
};

function displayCommits(commits) {
    console.log(commits);
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database ...');
        callback({ id: id, gitHubUserName: 'mosh' });
        // return { id: id, gitHubUserName: 'mosh'};
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API ...');
        callback(['commit']);
    }, 2000);
}
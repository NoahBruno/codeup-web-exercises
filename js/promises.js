// fetch(url, {headers: {'Authorization': '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'}})

//linked to the promisesLecture html
fetch('https://api.github.com/users/NoahBruno/events/public', {headers: {'Authorization':'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' }})
    .then((res)=>{
        return res.json();
    }).then((githubData)=>{
    console.log(githubData[0])
    githubData.results
    console.log(githubData[0])
    $("#dogg").append("<div class='card'>"
        + "<div class='card-body'><p>" + "Full name: " + githubData[0].actor.login + "</p>"
        + "<p>" + "Push time: " + githubData[0].created_at + "</p>"
        + "<p>" + "Commit: " + githubData[0].payload.commits[0].message + "</p></div>")
});


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

wait(3000).then(() => console.log('runs after 3 seconds'));


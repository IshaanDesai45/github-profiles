
async function searchUserRepos(username) {
    // try{
        console.log(username)
        var data = await axios.get(username+"/repos");
        topEight(data.data);
    // }
    // catch(err){
    //     console.log("Error : " +err.message);
    // }
    
    //   .then(res => res.json())
    //   .then(res => topFour(res))
    //   .catch(err => console.log(err));

  }
  
  // if the other function is simple enough, and since these are doing one thing, we might consider joining them into one function
  function drawInfo(data) {
    let userInfo = ``;
    // rather than modifying elements on the page, it's cleaner to just create them!
    // here's a new length 4 empty array just to make a nice forEach loop.
    const NUM_INFO_ITEMS = 8;
    new Array(NUM_INFO_ITEMS).fill('').forEach((_, idx) => {
      // we can use "destructuring" to grab the data we need
      const { name, stargazers_count, forks,size } = data[idx];
      // info item template (backticks `` are called 'template literals' since they're great for templating)
      const infoItem = `
        <div class="repoCard">
            <div class="repoName">
                <h3>${name}</h3>
            </div>
            <div class="repoDetails">
                <div class="first">
                    <p class="lang">JavaScript</p>
                    <p class="stars"><i class="fas fa-star"></i>${stargazers_count}</p>
                    <p class="forks"><i class="fas fa-code-branch"></i>${forks}</p>
                </div>
                <p class="size">${size} KB</p>
            </div>
        </div>
          `;
      // add it to the string...
      // we could also append it directly here, but I prefer to do as fewer DOM manipulations when possible
      userInfo += infoItem;
    });
  
    document.getElementById("repoContainer").innerHTML = userInfo;
  }
  
  // what does "topFour" do? a better function name would describe what it does
  // like "renderTopFourRepos"
  function topEight(data) {
    console.log(data)
    const sortedData = data.sort(
      (b, a) => a.stargazers_count -  b.stargazers_count,
    );
  
    const TOP_EIGHT_REPOS = sortedData.slice(0, 8);
    drawInfo(TOP_EIGHT_REPOS);
  }
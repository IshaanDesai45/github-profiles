let  SEARCH         = document.getElementById("searchBtn");
let  LOCATION       = document.getElementById("place");
let  DATE           = document.getElementById("date");
let  AVATAR         = document.getElementById("avatar");
let  NAME           = document.getElementById("name");
let  USR            = document.getElementById("usernameHandle");
let  FOLLOW         = document.getElementById("followers");
let  FOLLOWING      = document.getElementById("following");
let  REPOS          = document.getElementById("noOfRepo");
let  SEARCHBAR      = document.getElementById("searchProfile");
let  USERPROFILE    = document.getElementById("user-profile");
let  REPOPROFILE    = document.getElementById("repo-profile");
let  INFO           = document.getElementById('info');

const url ="https://api.github.com/users/";

function drawUser(user){
    AVATAR.src              = user.avatar_url;
    USR.textContent         = '@'+user.login;
    NAME.textContent        = user.name || "not mentioned";
    DATE.textContent        = `Joined ${user.created_at.substring(0,10)}`;
    LOCATION.textContent    = user.location || "not mentioned";
    REPOS.textContent       = user.public_repos;
    FOLLOW.textContent      = user.followers;
    FOLLOWING.textContent   = user.following;
    

    USERPROFILE.classList.remove('hidden');
    REPOPROFILE.classList.remove('hidden');
    INFO.classList.add('hidden')
}
async function searchUser(event){
    if(!SEARCHBAR.value){
        alert('empty username not allowed');
    }
    else{
        try{
            
            let data= await axios.get(url+SEARCHBAR.value);
            drawUser(data.data);
            searchUserRepos(url+SEARCHBAR.value);
            SEARCHBAR.value         = '';
        }
        catch(err){
            console.log('ERROR: '+err.message)
        }
        
    }
}


SEARCH.addEventListener('click',searchUser);

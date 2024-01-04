let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0
 
function highlightScoreChange(element) {
    element.classList.add("change");
    setTimeout(() => {
        element.classList.remove("change");
    }, 1000);  
}

function checkLeader() {
    homeScoreEl.classList.remove("leader") 
    guestScoreEl.classList.remove("leader")   
    if (homeScore > guestScore) {
        homeScoreEl.classList.add("leader")     
    } else if (guestScore > homeScore) {
        guestScoreEl.classList.add("leader")
    }        
}   

function addScoreHome(points) {
    homeScore += points
    homeScoreEl.textContent = homeScore
    highlightScoreChange(homeScoreEl)
    checkLeader()
}

function addScoreGuest(points) {
    guestScore += points
    guestScoreEl.textContent = guestScore
    highlightScoreChange(guestScoreEl)
    checkLeader()   
}

function add1Home() { addScoreHome(1); }
function add2Home() { addScoreHome(2); }
function add3Home() { addScoreHome(3); }

function add1Guest() { addScoreGuest(1); }
function add2Guest() { addScoreGuest(2); }
function add3Guest() { addScoreGuest(3); }
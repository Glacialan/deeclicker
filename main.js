var cookies = 0;
var cursors = 0;
var crackheads = 0;
var cps = 0;

function cookieClick(number){
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = cookies;
};



function resetCookies() {
  cookies = 0;
  document.getElementById("cookies"),innerHTML = cookies;

}



function buyCursor(){
    var cursorCost = Math.floor(25 * Math.pow(1.5,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	  cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user

        cps = cps + 1;                                            //adds to total CPS
        document.getElementById('cps').innerHTML = cps;           //updates total CPS
    };
    var nextCursorCost = Math.floor(25 * Math.pow(1.7,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCursorCost;  //updates the cursor cost for the user
};

function buyCrackhead(){
    var crackheadCost = Math.floor(300 * Math.pow(1.2,crackheads));     //works out the cost of this cursor
    if(cookies >= crackheadCost){                                   //checks that the player can afford the cursor
        crackheads = crackheads + 1;                                   //increases number of cursors
    	  cookies = cookies - crackheadCost;                          //removes the cookies spent
        document.getElementById('crackheads').innerHTML = crackheads;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user

        cps = cps + 5;                                            //adds to total CPS
        document.getElementById('cps').innerHTML = cps;           //updates total CPS
    };
    var nextcrackheadCost = Math.floor(300 * Math.pow(1.2,crackheads));       //works out the cost of the next cursor
    document.getElementById('crackheadCost').innerHTML = nextcrackheadCost;  //updates the cursor cost for the user
};


window.setInterval(function(){

	cookieClick(cursors);

}, 1000);

window.setInterval(function() {

  cookieClick(crackheads * 5);

}, 1000);

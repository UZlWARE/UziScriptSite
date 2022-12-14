var i=0;
setInterval(function(){
    var titles=[
"uzi scripting. 👿",
"uzi scripting. 🤑",
"uzi scripting. 😇"
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 250);

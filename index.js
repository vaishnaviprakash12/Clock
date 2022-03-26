let a;
let time;
let date;
setInterval(() => {
    a = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ":" + (a.getMinutes() < 10 ? '0' : '') + a.getMinutes() + ":" + (a.getSeconds() < 10 ? '0' : '') + a.getSeconds();
    //adding date and time
    document.querySelector("#time").innerHTML = time + "<br>on " + date;
}, 1000);


console.log();
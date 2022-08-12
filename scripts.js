window.addEventListener("load", function(event) {
    const takeoff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const abortMission = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    const status = document.getElementById("flightStatus");
    const bkgrd = document.getElementById("shuttleBackground");
    const height = document.getElementById("spaceShuttleHeight");
    const move = document.querySelector(".rocket");
    const rocket = document.getElementById("rocket");
    let style = getComputedStyle(move);
    let moveUpDown = 0;
    let moveLeftRight = 0;

    takeoff.addEventListener("click", function(event) {
        let confirmation = confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmation) {
            status.innerHTML = "Shuttle in flight.";
            bkgrd.style.backgroundColor = "blue";
            height.innerHTML = 10000;
        };
    });

    landing.addEventListener("click", function(event) {
        alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        bkgrd.style.backgroundColor = "green";
        height.innerHTML = 0;
        rocket.style.bottom = "0px";
        rocket.style.right = "225px";
    });

    abortMission.addEventListener("click", function(event) {
        let confirmation = confirm("Confirm that you want to abort the mission.");
        if (confirmation) {
            // console.log("testing!!!")
            status.innerHTML = "Mission aborted.";
            bkgrd.style.backgroundColor = "green";
            height.innerHTML = 0;
            rocket.style.bottom = "0px";
            rocket.style.right = "225px";
        };
    });

    up.addEventListener("click", function(event) {
        let currentHeight = Number(height.innerHTML);
        let parse = parseInt(style.bottom);
        if (currentHeight > 0 && parse < 250){
            height.innerHTML = currentHeight + 10000;
            // move up 10px
            let newParse = parse + 10;
            let newBottom = `${newParse}px`;
            rocket.style.bottom = newBottom;
        } else {
            alert("Launch rocket before steering.");
        }
    });

    down.addEventListener("click", function(event) {
        let currentHeight = Number(height.innerHTML);
        let parse = parseInt(style.bottom);
        if (currentHeight > 0) {
            height.innerHTML = currentHeight - 10000;
            // move down 10px
            let newParse = parse - 10;
            let newBottom = `${newParse}px`;
            rocket.style.bottom = newBottom;
        } else {
            alert ("Rocket is on the ground.");
        }
    });

    left.addEventListener("click", function(event) {
        // move left 10px
        let currentHeight = Number(height.innerHTML);
        let parse = parseInt(style.right);
        if (currentHeight > 0 && parse < 455) {
            let newParse = parse + 10;
            let newRight = `${newParse}px`;
            rocket.style.right = newRight;
            // console.log(newRight);
        } else if (currentHeight > 0) {
            alert("Please remain in defined flight zone.")
        } else {
            alert("Launch rocket before steering.");
        }
    });

    right.addEventListener("click", function(event) {
        // move right 10px
        let currentHeight = Number(height.innerHTML);
        let parse = parseInt(style.right);
        if (currentHeight > 0 && parse > -15) {
            let newParse = parse - 10;
            let newRight = `${newParse}px`;
            rocket.style.right = newRight;
            // console.log(newRight);
        } else if (currentHeight > 0) {
            alert("Please remain in defined flight zone.")
        } else {
            alert("Launch rocket before steering.");
        }
    });
})
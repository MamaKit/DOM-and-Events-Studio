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
    const height = document.getElementById("spaceShuttleHeight")

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
    });

    abortMission.addEventListener("click", function(event) {
        let confirmation = confirm("Confirm that you want to abort the mission.");
        if (confirmation) {
            // console.log("testing!!!")
            status.innerHTML = "Mission aborted.";
            bkgrd.style.backgroundColor = "green";
            height.innerHTML = 0;
        };
    });

    up.addEventListener("click", function(event) {
        let currentHeight = Number(height.innerHTML);
        height.innerHTML = currentHeight + 10000;
        // move up 10px
    });

    down.addEventListener("click", function(event) {
        let currentHeight = Number(height.innerHTML);
        height.innerHTML = currentHeight - 10000;
        // move down 10px
    });

    left.addEventListener("click", function(event) {
        // move left 10px
    });

    right.addEventListener("click", function(event) {
        // move right 10px
    });
})
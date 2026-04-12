function updateTime() {
    const newTime = new Date().toLocaleString("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
    })
    document.getElementById("time").textContent = newTime;
}
updateTime()
setInterval(updateTime, 1000);

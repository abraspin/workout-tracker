init();

async function init() {
  console.log("init -> location.search.split(' = ')[1]", location.search.split("=")[1]);
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    console.log("init -> workout", workout);
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none");
    }
  }
}

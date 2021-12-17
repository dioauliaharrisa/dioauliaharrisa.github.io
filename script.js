function inputGuestName() {
  let state = document.getElementById ("guestInput")
  if (state.style.display === "none") {
    state.style.display = "block"
  } else {
    state.style.display = "none"
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const offerForm = document.querySelector(".offer-form")

  offerForm.addEventListener("submit", function (event) {
    event.preventDefault()
    alert("Your request for an offer has been submitted!")
  })
})

function openForm() {
    document.getElementById("popup-form").style.display = "flex";
  }

  function closeForm() {
    document.getElementById("popup-form").style.display = "none";
  }
  $("#ajaxForm").submit(function(e){
    e.preventDefault();
    var action = $(this).attr("action");
    $.ajax({
    type: "POST",
    url: action,
    crossDomain: true,
    data: new FormData(this),
    dataType: "json",
    processData: false,
    contentType: false,
    headers: {
    "Accept": "application/json"
    }
}).done(function() {
    alert('The form was submitted successfully.')
}).fail(function() {
    alert('An error occurred! Please try again later.')
});
});

  function changeProjectImage(imagePath) {
    document.getElementById("project-image").src = imagePath;
    let details = document.querySelectorAll(".project-details div");
    details.forEach((detail) => {
      detail.classList.remove("active");
    });
    event.target.classList.add("active");
  }
 

 
document.addEventListener("DOMContentLoaded", function () {
    // Function to show the state dialog
    function showStateDialog() {
      var stateDialog = document.getElementById("stateDialog");
      var stateDialogContent = document.getElementById("stateDialogContent");
  
      // Clear existing content
      stateDialogContent.innerHTML = "";
  
      // Add state options dynamically
      var indianStates = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];
  
      indianStates.forEach(function (state) {
        var option = document.createElement("div");
        option.textContent = state;
        option.addEventListener("click", function () {
          selectState(state);
        });
        stateDialogContent.appendChild(option);
      });
  
      // Show the dialog
      stateDialog.style.display = "block";
    }
  
    // Function to handle state selection
    function selectState(state) {
      document.getElementById("victimState").value = state;
      closeStateDialog();
    }
  
    // Function to close the state dialog
    function closeStateDialog() {
      document.getElementById("stateDialog").style.display = "none";
    }
  
    // Function to show the caste dialog
    function showCasteDialog() {
      var casteDialog = document.getElementById("casteDialog");
      var casteDialogContent = document.getElementById("casteDialogContent");
  
      // Clear existing content
      casteDialogContent.innerHTML = "";
  
      // Add caste options dynamically
      var casteOptions = ["General", "OBC", "SC", "ST", "Others"];
  
      casteOptions.forEach(function (caste) {
        var option = document.createElement("div");
        option.textContent = caste;
        option.addEventListener("click", function () {
          selectCaste(caste);
        });
        casteDialogContent.appendChild(option);
      });
  
      // Show the dialog
      casteDialog.style.display = "block";
    }
  
    // Function to handle caste selection
    function selectCaste(caste) {
      document.getElementById("victimCaste").value = caste;
      closeCasteDialog();
    }
  
    // Function to close the caste dialog
    function closeCasteDialog() {
      document.getElementById("casteDialog").style.display = "none";
    }
  
    // Function to submit the form
    function submitForm() {
      if (validateForm()) {
        showLoadingIndicator();
        setTimeout(function () {
          hideForm();
          displaySuccessMessage();
          redirectToThankYouPage();
        }, 1500);
      }
    }
  
    // Function to validate the form
    function validateForm() {
      var nameInput = document.getElementById("reporterName");
      if (!nameInput.value.trim()) {
        alert("Please enter your name.");
        return false;
      }
      return true;
    }
  
    // Function to show the loading indicator
    function showLoadingIndicator() {
      document.getElementById("loadingIndicator").style.display = "block";
    }
  
    // Function to hide the form
    function hideForm() {
      var form = document.getElementById("complaintForm");
      form.style.transition = "opacity 0.5s ease-in-out";
      form.style.opacity = 0;
    }
  
    // Function to display the success message
    function displaySuccessMessage() {
      var successMessage = document.getElementById("successMessage");
      successMessage.style.transition = "opacity 0.5s ease-in-out";
      successMessage.style.opacity = 1;
    }
  
    // Function to redirect to the thank you page
    function redirectToThankYouPage() {
      // Replace 'thankyou.html' with your actual thank-you page URL
      window.location.href = 'thankyou.html';
    }
  
    // Attach the showStateDialog function to the click event of elements with specific IDs
    document.getElementById("victimState").addEventListener("click", showStateDialog);
  
    // Attach the showCasteDialog function to the click event of the caste element
    document.getElementById("victimCaste").addEventListener("click", showCasteDialog);
  
    // Attach the submitForm function to the click event of the submit button
    document.getElementById("submitBtn").addEventListener("click", submitForm);
  });
  
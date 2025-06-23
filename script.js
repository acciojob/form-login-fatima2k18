function getFormvalue() {
    //Write your code here
	  event.preventDefault(); // Prevent form reload

      const form = document.forms[0]; // Get the first (and only) form
      let fname = form.fname.value.trim();
      let lname = form.lname.value.trim();

      // Optional edge case: if both fields are empty
      if (!fname && !lname) {
        alert("Please enter your full name.");
        return;
      }

      alert(`${fname} ${lname}`); // Show full name

}

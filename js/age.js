  // Replace these with your actual date of birth (DOB) values
  const dob = new Date('2000-12-04');
  
  // Function to calculate age
  function calculateAge(dob) {
    const now = new Date();
    const ageDiff = now - dob;
    const ageDate = new Date(ageDiff);
    return ageDate.getUTCFullYear() - 1970;
  }
  
  // Update age elements
  const ageElement = document.getElementById('age');
  const age1Element = document.getElementById('age1');
  
  const calculatedAge = calculateAge(dob);
  ageElement.textContent = calculatedAge;
  age1Element.textContent = calculatedAge;
async function generate() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const adviceId = data.slip.id;
      const adviceText = data.slip.advice;
      document.getElementById("adviceId").innerText = `A D V I C E    #${data.slip.id}`;
    document.getElementById("adviceText").innerText = `"${data.slip.advice}"`;
      console.log(adviceId)
      
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
    
  }
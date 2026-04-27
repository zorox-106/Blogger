async function testEmailApi() {
  try {
    const formData = new FormData();
    formData.append('email', 'test@test.com');
    
    const response = await fetch('http://localhost:3000/api/email', {
      method: 'POST',
      body: formData
    });
    const data = await response.json();
    console.log("Response:", response.status, data);
  } catch (error) {
    console.error("Fetch Error:", error.message);
  }
}

testEmailApi();

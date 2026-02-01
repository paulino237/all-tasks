
async function getCleanPostData() {
  // Using JSONPlaceholder 
  const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

  try {
    const response = await fetch(API_URL);

    
    if (!response.ok) {
      throw new Error(`API Response Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

 
    return {
      id: data.id,
      title: data.title,
      bodyPreview: data.body.substring(0, 50) + "...", 
      userId: data.userId
    };

  } catch (error) {
    
    console.error("Fetch Operation Failed:", error.message);
    
   
    return { 
      success: false, 
      message: "Could not retrieve data. Please try again later." 
    };
  }
}

/**
 
  ARCHITECTURE 

  If this were part of a larger production backend, I would:
   1. SERVICE LAYER: Move the API call logic to a dedicated 'ApiService' or 'PostService' 
  class to keep the business logic separate from the HTTP logic.
  2. ENV VARIABLES: Store the Base URL (and API Keys if any) in a .env file 
  using 'dotenv' to avoid hardcoding credentials.
  3. VALIDATION: Use a library like 'Zod' or 'Joi' to validate the API response 
  schema before processing it to prevent runtime crashes.
  4. LOGGING: Implement a professional logger (like Winston or Pino) instead of 
  console.error for better traceability in production logs.
  5. RETRY LOGIC: Add an exponential backoff retry mechanism for transient network errors.
 */

// Test 
//tap command node task3.js in terminal
getCleanPostData().then(result => console.log("Clean JSON Output:", result));
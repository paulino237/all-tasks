
function getRateLimitStatus(events, window = 10) {
  if (!events || !Array.isArray(events)) return [];

  const userLastTimestamp = new Map();

  return events.map(([timestamp, userId]) => {
    const lastAllowedTime = userLastTimestamp.get(userId);

    // Rule: Allow if first occurrence or if timestamp gap is >= window
    if (lastAllowedTime === undefined || (timestamp - lastAllowedTime >= window)) {
      userLastTimestamp.set(userId, timestamp);
      return true;
    }

    return false;
  });
}

// Example usage: decomment the lines below to test the function and tap command node task2.js in terminal
// const events = [[30, "A"], [5, "A"], [25, "A"], [12, "B"], [20, "B"], [22, "B"]];
// console.log(getRateLimitStatus(events, 10));  
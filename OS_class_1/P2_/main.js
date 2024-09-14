const update_Clcok = () => {
  const now = new Date();
  console.log(now);

  // Get current time values
  const hours = now.getHours() % 12; // Convert to 12-hour format
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Select clock hands
  const second_hand = document.querySelector(".needle_second");
  const minute_hand = document.querySelector(".needle_minute"); // Fix typo here
  const hour_hand = document.querySelector(".needle_hour");

  // Calculate degree of rotation for each hand
  const seconds_degree_of_rotation = (seconds / 60) * 360;
  const minutes_degree_of_rotation = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hours_degree_of_rotation = hours * 30 + (minutes / 60) * 30;

  // / Update time display
  document.getElementById("H1").textContent = Math.floor(hours / 10);
  document.getElementById("H2").textContent = hours % 10;
  document.getElementById("M1").textContent = Math.floor(minutes / 10);
  document.getElementById("M2").textContent = minutes % 10;
  document.getElementById("S1").textContent = Math.floor(seconds / 10);
  document.getElementById("S2").textContent = seconds % 10;

  // Update date display
  const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });
  const day = now.getDate();
  const month = now.toLocaleDateString("en-US", { month: "short" });
  const year = now.getFullYear();

  document.getElementById("D").textContent = day;
  document.getElementById("M").textContent = month;
  document.getElementById("Y").textContent = year;
  document.getElementById("Day").textContent = dayOfWeek;

  // Apply rotation to each hand
  second_hand.style.transform = `rotate(${seconds_degree_of_rotation}deg)`;
  minute_hand.style.transform = `rotate(${minutes_degree_of_rotation}deg)`;
  hour_hand.style.transform = `rotate(${hours_degree_of_rotation}deg)`;
};

// Update clock every second
setInterval(update_Clcok, 1000);

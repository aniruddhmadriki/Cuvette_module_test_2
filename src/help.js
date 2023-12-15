export function randomVal() {
  const alphaAndDigits =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLen = alphaAndDigits.length;
  for (let i = 0; i < 10; i++) {
    result += alphaAndDigits.charAt(
      Math.floor(Math.random() * charactersLen)
    );
  }
  return result;
}

export function trimString(s) {
  if (s === null || s.trim() === "") {
    return null;
  } else {
    return s.trim();
  }
}

export function getCurrentDateTime() {
  const now = new Date();

  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const day = now.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  return { date: formattedDate, time: formattedTime };
}

export function getInitials(s) {
  let words = s.split(" ");
  if (words.length === 1) {
    return words[0].substring(0, 2).toUpperCase();
  } else {
    return words[0][0].toUpperCase() + words[1][0].toUpperCase();
  }
}

export function checkPropertyInArray(property, value, a) {
  let capital = value.toUpperCase();
  for (let i = 0; i < a.length; i++) {
    if (a[i][property].toUpperCase() === capital) {
      return true;
    } else {
      return false;
    }
  }
}

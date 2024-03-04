export function checkInput(value, type) {
  if (value.length < 1) {
    return true;
  }

  if (type === "email") {
    return value.includes("@");
  } else if (type === "password") {
    if (value.length >= 6) {
      return true;
    } else {
      return false;
    }
  }
}

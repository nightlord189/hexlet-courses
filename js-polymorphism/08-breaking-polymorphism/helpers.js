// @ts-check

// BEGIN (write your solution here)
const getGreeting = (user) => {
  if (user.isGuest()) {
    return `Nice to meet you Guest!`;
  } else {
    return `Hello ${user.getName()}!`;
  }
}

export default getGreeting;
// END

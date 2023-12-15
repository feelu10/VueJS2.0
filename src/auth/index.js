// auth.js

export function isAuthenticated() {
  // Check if the user is authenticated based on the presence of a JWT token
  return !!getAuthToken();
}

const tokens = [
  "U2FsdGVkX1+Gn2wR7zJgkZ1r3Y0c5UzQe5g1l6LHgRvDm1qXW3Z9qoK9ZtXr2pJnU3b1rOe9mNWj5Zp7Z1r3Y0c5UzQe5g1l6LHgRvDm1qXW3Z9qoK9ZtXr2pJnU3b1rOe",
  "U2FsdGVkX18sP2JZPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn",
  "5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz",
  "3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9f",
  "M2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3s",
  "VW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3",
  "bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5",
  "CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3",
  "dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2",
  "dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW",
  "9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ",
  "3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD",
  "3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn",
  "5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz",
  "3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9f",
  "M2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3",
];

export function setAuthenticated(status) {
  // Check if the status matches any of the tokens
  const isValidToken = tokens.includes(status);

  // Set the authenticated status in a cookie
  if (isValidToken) {
    document.cookie = `authenticated=${status}; expires=Session; path=/`;
  } else {
    document.cookie =
      "authenticated=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
}

export function setAuthToken(token) {
  // Save the token in localStorage
  localStorage.setItem("authToken", token);
}

export function getAuthToken() {
  // Retrieve the token from localStorage
  return localStorage.getItem("authToken");
}

export function removeAuthToken() {
  // Remove the token from localStorage
  localStorage.removeItem("authToken");
}

export function getUserRole() {
  // Retrieve the user role from localStorage
  return localStorage.getItem("userRole");
}

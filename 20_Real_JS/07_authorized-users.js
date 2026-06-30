function isAuthorizedUser(authorizedIds) {
  // Convert the array to a Set for O(1) lookups (optional but efficient)
  const authorizedSet = new Set(authorizedIds);
  return function(id) {
    return authorizedSet.has(id);
  };
}

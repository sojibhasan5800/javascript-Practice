var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

var biggestName = friends.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
});


console.log(biggestName);  
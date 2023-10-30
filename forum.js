const FREELANCER_CONTAINER = document.getElementById("freelanceContainer");
const AVERAGE_PRICE_VIEW = document.getElementById("average");

const freelancers = [
  { name: "Gaven", Price: 30, Occupation: "virtural Assistant" },
  { name: "Dave", Price: 30, Occupation: "Landscaping" },
  { name: "Andrew", Price: 30, Occupation: "Teacher" },
  { name: "Blair", Price: 30, Occupation: "Teacher" },
];

const freelancerNames = [
  "Trisha",
  "Kimberly",
  "Jermol",
  "Frank",
  "Jake",
  "Sammantha",
  "craig",
  "Donald",
];

const occupations = [
  "virtural Assistant",
  "Landscaping",
  "Teacher",
  "Powerwasher",
  "Thumbnail Artis",
  "video Editor",
  "video Editor",
  "Social Media Markter",
  "Grapic Designer",
  "Ux designer",
  "Web Developer",
];

function makeRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createNewFreelancer() {
  const randomNameIndex = makeRandomIndex(freelancerNames);

  const randomOccuIndex = makeRandomIndex(occupations);

  const randomPrice = Math.trunc(Math.random() * 75) + 35;

  const randomFreelancer = {
    name: freelancerNames[randomNameIndex],
    Occupation: occupations[randomOccuIndex],
    Price: randomPrice,
  };
  return randomFreelancer;
}

function calculateAverageFreelancerPrice() {
  //total for all the freelancers(use a loop)
  const sum = freelancers.reduce((total, current) => total + current.Price, 0);
  //divde the toal price by the number of freelancers
  const average = sum / freelancers.length;
  return average;
}
console.log(average);
console.log(freelancers);
const list = document.createElement("ul");
FREELANCER_CONTAINER.append(list);

function render() {
  list.innerHTML = "";

  for (const freelancer of freelancers) {
    const listItem = document.createElement("li");

    const freelancerString = `Name: ${freelancer.name}, Price: ${freelancer.Price}, Occupation: ${freelancer.Occupation}`;
    listItem.textContent = freelancerString;
    list.append(listItem);
  }

  //re-calculate average
  //update avarage html element

  const averagePrice = calculateAverageFreelancerPrice();
  AVERAGE_PRICE_VIEW.textContent = `Average Price ${averagePrice.toFixed(2)}`;
}

render();
const clearInterval = setInterval(() => {
  const newFreelancer = createNewFreelancer();
  freelancers.push(newFreelancer);
  //   average.push(averagePrice);
  render();
}, 2000);

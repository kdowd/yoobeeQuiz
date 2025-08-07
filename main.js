const map1 = new Map();
map1.set("q1", "");
map1.set("q2", "");
map1.set("q3", "");
map1.set("q4", "");
map1.set("q5", "");
map1.set("q6", "");
map1.set("q7", "");
map1.set("q8", "");
map1.set("q9", "");
map1.set("q10", "");
map1.set("q11", "");
map1.set("q12", "");
map1.set("q13", "");
map1.set("q14", "");
map1.set("q15", "");

var qw = document.querySelector(".quiz-wrapper");
qw.addEventListener("click", (e) => {
  window.pigg = e.target.closest("sl-radio-group");
  var questionRoot = e.target.closest("sl-radio-group");
  var questionAnswer = e.target.value;
  var isGood = false;

  if (!questionRoot) return;
  questionRoot.getAttributeNames().forEach((element) => {
    if (element == "name") {
      isGood = true;
    }
  });

  if (isGood && questionAnswer) {
    map1.set(questionRoot.getAttribute("name"), questionAnswer);
    console.log(questionRoot.getAttribute("name"));
    console.log(questionAnswer);
  }
});

function compareMaps(map1, map2) {
  let testVal;
  if (map1.size !== map2.size) {
    return false;
  }
  for (let [key, val] of map1) {
    testVal = map2.get(key);

    if (testVal !== val || (testVal === undefined && !map2.has(key))) {
      return false;
    }
  }
  return true;
}

const mapA = new Map();
mapA.set("q1", "1");
mapA.set("q2", "2");
mapA.set("q3", "3");

const mapB = new Map();
mapB.set("q1", "1");
mapB.set("q2", "2");
mapB.set("q3", "4");

console.log(compareMaps(mapA, mapB));

const beforeUnloadHandler = (event) => {
  event.preventDefault();
  event.returnValue = true;
};

if (location.hostname != "127.0.0.63") {
  window.addEventListener("beforeunload", beforeUnloadHandler);
}

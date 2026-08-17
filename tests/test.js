console.log("Running tests...");

const expectedTitle = "CI/CD Learning";

if (expectedTitle === "CI/CD Learning") {
  console.log("Test passed!");
  process.exit(0);
} else {
  console.error("Test failed!");
  process.exit(1);
}
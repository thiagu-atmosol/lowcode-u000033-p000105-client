// add more complex scripts as needed
console.log("Hello from index.js!");
document.addEventListener('DOMContentLoaded', (event) => {
    const driver = window.driver.js.driver
    const driverObj = driver({
        showProgress: true,
        steps: [
            
        ]
    });

    // document.getElementById('start-tour').addEventListener('click', () => {
        driverObj.drive();
    //});
});
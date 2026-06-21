// car vehicles 

function calculateFines(carData) {
    const vehicles = JSON.parse(carData);
    let totalFines = 0;
    const finedCars = [];

    // loop over Vehicles
    for (const vehicle of vehicles) {
        const [make, model, reg, year, fuel] = vehicle;

        let fine = 0;

        // Rule 1.
        if (year < 2000) {
            fine = 20;
        }

        // Rule 2: diesel and registered  before 2015
        // only applied if rule 1 did not apply
        else if (fuel === "diesel" && year < 2015) {
            fine = 10;
        }

        if (fine > 0 ) {
            totalFines += fine;
            finedCars.push ({
                reg: reg,
                year: year,
                fuel: fuel,
                fine: fine,
            })
        }
    } 

    return JSON.stringify({ totalFines, cars: finedCars});


}

const carData = '[["Toyota", "Camry", "ABC123", 2014, "diesel"], ["Ford", "Focus", "XYZ456", 1999, "petrol"]]';
console.log(calculateFines(carData));
let nameRaw: string = "Will Seese";

console.log(nameRaw.toUpperCase());

console.log("Current job: Truck Driver (Local delivery)");

console.log("Description: Jack of all trades looking to get into a single trade and stay there");

console.log("\n" + "My Interests:");

let interests: string[] = ["Golf", "Hiking", "Cars", "Learning"];

for (let i = 0; i < interests.length ; i++) {
    console.log("* " + interests[i]);
}

console.log("\n" + "My Previous Experience:");

function displayPosition(companyName: string, jobTitle: string, jobDesc: string): void {
    console.log("* " + jobTitle + " at " + companyName + " - " + jobDesc);
}

displayPosition("Shamrock Foods", "CDL Delivery Driver", "delivered bulk food to restaurants and other large volume establishments");
displayPosition("O'Reilly Auto", "Parts Desk Sales", "sold auto parts");
displayPosition("The Plateau Club", "Spray Tech/Crew Foreman", "in charge of chemical storage and application to the turf; also supervised general crew members");

console.log("\n" + "My Skills:");

function displaySkill(skill: string, isCool: string): void {
    if (isCool === "cool") {
        console.log("* " + "BAM: " + skill);
    } else {
        console.log("* " + skill);
    }
}

let skillSet: string[] = ["Golf", "Car Work", "Basic German", "Landscaping", "Offroading", "Math", "Excel coding"];
let skillCool: any[] = ["cool", 0, 0, 0, "cool", 0, 0];

for (let i = 0 ; i < skillSet.length ; i++) {
    displaySkill(skillSet[i], skillCool[i]);
}
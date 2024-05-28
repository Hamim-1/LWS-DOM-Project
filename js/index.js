const milestonesData = JSON.parse(data);
const unFinishedModuleSection = document.getElementById('unfinished-module');
let milestones;
for (const x in milestonesData) {
    milestones = milestonesData[x];

}

milestones.forEach(milestone => {
    console.log(milestone);
})


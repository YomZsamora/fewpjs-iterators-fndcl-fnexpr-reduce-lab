const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce( (batteryAmount, assembledBatteries) => {
   return batteryAmount + assembledBatteries
})

// Code your solution here

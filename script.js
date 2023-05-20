// Get input elements
const weightInput = document.getElementById('vehicle-weight');
const accelerationInput = document.getElementById('acceleration');
const initialSpeedInput = document.getElementById('initial-speed');
const brakingForceInput = document.getElementById('braking-force');
const calculateAccelerationBtn = document.getElementById('calculate-acceleration-btn');
const calculateBrakingDistanceBtn = document.getElementById('calculate-braking-distance-btn');
const resultOutput = document.getElementById('result-output');

// Add event listeners to the calculate buttons
calculateAccelerationBtn.addEventListener('click', calculateAcceleration);
calculateBrakingDistanceBtn.addEventListener('click', calculateBrakingDistance);

function calculateAcceleration() {
  // Get user input values
  const weight = parseFloat(weightInput.value);
  const acceleration = parseFloat(accelerationInput.value);

  // Perform acceleration calculation
  const force = weight * acceleration;
  const result = `The force required to accelerate the vehicle is ${force.toFixed(2)} N.`;

  // Display the result
  resultOutput.textContent = result;
}

function calculateBrakingDistance() {
  // Get user input values
  const initialSpeed = parseFloat(initialSpeedInput.value);
  const brakingForce = parseFloat(brakingForceInput.value);

  // Validate input values
  if (isNaN(initialSpeed) || isNaN(brakingForce)) {
    resultOutput.textContent = 'Please enter valid values.';
    return;
  }

  // Convert initial speed to meters per second
  const initialSpeedMps = initialSpeed * 1000 / 3600;

  // Perform braking distance calculation
  const brakingDistance = (initialSpeedMps ** 2) / (2 * brakingForce);
  const result = `The braking distance is ${brakingDistance.toFixed(2)} meters.`;

  // Display the result
  resultOutput.textContent = result;
}

function calculateCorneringForce() {
    // Get user input values
    const weight = parseFloat(weightInput.value);
    const tireCoefficient = parseFloat(tireCoefficientInput.value);
    const corneringRadius = parseFloat(corneringRadiusInput.value);
  
    // Validate input values
    if (isNaN(weight) || isNaN(tireCoefficient) || isNaN(corneringRadius)) {
      resultOutput.textContent = 'Please enter valid values.';
      return;
    }
  
    // Perform cornering force calculation
    const corneringForce = (weight * (initialSpeedMps ** 2)) / (corneringRadius * tireCoefficient);
    const result = `The cornering force is ${corneringForce.toFixed(2)} N.`;
  
    // Display the result
    resultOutput.textContent = result;
  }

  function simulateWeightTransferDuringAcceleration() {
    // Get user input values
    const weight = parseFloat(weightInput.value);
    const acceleration = parseFloat(accelerationInput.value);
    const cgHeight = parseFloat(cgHeightInput.value);
    const wheelbase = parseFloat(wheelbaseInput.value);
  
    // Validate input values
    if (isNaN(weight) || isNaN(acceleration) || isNaN(cgHeight) || isNaN(wheelbase)) {
      resultOutput.textContent = 'Please enter valid values.';
      return;
    }
  
    // Perform weight transfer calculation during acceleration
    const rearAxleWeight = (weight * wheelbase * acceleration) / (2 * cgHeight);
    const frontAxleWeight = weight - rearAxleWeight;
    const result = `During acceleration, the rear axle weight is ${rearAxleWeight.toFixed(2)} N and the front axle weight is ${frontAxleWeight.toFixed(2)} N.`;
  
    // Display the result
    resultOutput.textContent = result;
  }
  
  function simulateWeightTransferDuringBraking() {
    // Get user input values
    const weight = parseFloat(weightInput.value);
    const brakingForce = parseFloat(brakingForceInput.value);
    const cgHeight = parseFloat(cgHeightInput.value);
    const wheelbase = parseFloat(wheelbaseInput.value);
  
    // Validate input values
    if (isNaN(weight) || isNaN(brakingForce) || isNaN(cgHeight) || isNaN(wheelbase)) {
      resultOutput.textContent = 'Please enter valid values.';
      return;
    }
  
    // Perform weight transfer calculation during braking
    const rearAxleWeight = weight + ((brakingForce * wheelbase) / (2 * cgHeight));
    const frontAxleWeight = weight - ((brakingForce * wheelbase) / (2 * cgHeight));
    const result = `During braking, the rear axle weight is ${rearAxleWeight.toFixed(2)} N and the front axle weight is ${frontAxleWeight.toFixed(2)} N.`;
  
    // Display the result
    resultOutput.textContent = result;
  }
  
  function simulateWeightTransferDuringCornering() {
    // Get user input values
    const weight = parseFloat(weightInput.value);
    const corneringForce = parseFloat(corneringForceInput.value);
    const cgHeight = parseFloat(cgHeightInput.value);
    const trackWidth = parseFloat(trackWidthInput.value);
  
    // Validate input values
    if (isNaN(weight) || isNaN(corneringForce) || isNaN(cgHeight) || isNaN(trackWidth)) {
      resultOutput.textContent = 'Please enter valid values.';
      return;
    }
  
    // Perform weight transfer calculation during cornering
    const outerWheelWeight = weight - ((corneringForce * trackWidth) / (2 * cgHeight));
    const innerWheelWeight = weight + ((corneringForce * trackWidth) / (2 * cgHeight));
    const result = `During cornering, the outer wheel weight is ${outerWheelWeight.toFixed(2)} N and the inner wheel weight is ${innerWheelWeight.toFixed(2)} N.`;
  
    // Display the result
    resultOutput.textContent = result;
  }
  
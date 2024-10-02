// Smiley class (OOP)
class Smiley {
  constructor() {
    this.faces = {
      normal: `🙂`, // Normal face
      blink: `😑`,  // Blinking face
      wink: `😉`,   // Winking face
      smile: `😊`,  // Smiling face
      frown: `☹️`,  // Frowning face
    };
    this.currentFace = this.faces.normal; // Start with the normal face
  }

  // Function to display the face (Functional)
  displayFace() {
    console.clear(); // Clear the console for animation effect
    console.log(this.currentFace);
  }

  // Function to change the face (Switch case)
  changeFace(expression) {
    switch (expression) {
      case 'blink':
        this.currentFace = this.faces.blink;
        break;
      case 'wink':
        this.currentFace = this.faces.wink;
        break;
      case 'smile':
        this.currentFace = this.faces.smile;
        break;
      case 'frown':
        this.currentFace = this.faces.frown;
        break;
      default:
        this.currentFace = this.faces.normal;
        break;
    }
    this.displayFace(); // Show the new face
  }

  // Blink animation using setTimeout
  blink() {
    this.changeFace('blink');
    setTimeout(() => this.changeFace('normal'), 500); // Return to normal after 500ms
  }

  // Wink animation
  wink() {
    this.changeFace('wink');
    setTimeout(() => this.changeFace('normal'), 500); // Return to normal after 500ms
  }

  // Smile for a moment
  smile() {
    this.changeFace('smile');
    setTimeout(() => this.changeFace('normal'), 1000); // Smile for 1 second, then back to normal
  }

  // Frown for a moment
  frown() {
    this.changeFace('frown');
    setTimeout(() => this.changeFace('normal'), 1000); // Frown for 1 second, then back to normal
  }
}

// Animation Loop
const smiley = new Smiley();

const runAnimation = async () => {
  const actions = ['blink', 'wink', 'smile', 'frown']; // Array of actions
  
  for (let i = 0; i < 10; i++) { // Loop for 10 iterations
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    smiley[randomAction](); // Call the smiley action

    await new Promise(resolve => setTimeout(resolve, 1500)); // Wait 1.5 seconds before the next action
  }
};

// Start the animation
runAnimation();
function generateSmiley() {
    const size = 7; // Size of the smiley face

    for (let i = 0; i < size; i++) {
        let line = '';
        for (let j = 0; j < size; j++) {
            // Top and bottom curved lines
            if ((i === 0 || i === size - 1) && (j > 0 && j < size - 1)) {
                line += '*';
            }
            // Left and right edges
            else if ((j === 0 || j === size - 1) && (i > 0 && i < size - 1)) {
                line += '*';
            }
            // Eyes
            else if (i === 2 && (j === 1 || j === 5)) {
                line += '*';
            }
            // Mouth
            else if (i === 4 && j > 1 && j < 5) {
                line += '*';
            }
            // Empty spaces
            else {
                line += ' ';
            }
        }
        console.log(line);
    }
}

// Call the function to generate the smiley
generateSmiley();
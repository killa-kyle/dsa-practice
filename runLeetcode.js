const fs = require('fs');
const path = require('path');

// Get the number from the command line arguments
const num = process.argv[2];

// Define the directory to search
const dir = path.join(__dirname, 'leetcode');

// Read the files in the directory
fs.readdir(dir, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        process.exit(1);
    }

    // Find the file that starts with the specified number
    const fileToRun = files.find(file => file.startsWith(num) && file.endsWith('.ts') || file.startsWith(num) && file.endsWith('.js'));

    if (fileToRun) {
        // If found, run nodemon with the file
        const nodemon = require('nodemon');
        nodemon({
            script: path.join(dir, fileToRun),
            ext: 'ts',
            exec: 'ts-node',
            watch: [dir]
        });

        nodemon.on('start', () => {
            console.log(`Nodemon started for ${fileToRun}`);
        }).on('quit', () => {
            console.log('Nodemon has quit');
            process.exit();
        }).on('error', (err) => {
            console.error('Nodemon error:', err);
        });
    } else {
        console.error(`No file found starting with ${num}`);
        process.exit(1);
    }
}); 
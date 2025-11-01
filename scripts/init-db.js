const { execSync } = require('child_process');
const path = require('path');

// Build the TypeScript files first
console.log('Building TypeScript files...');
execSync('npx tsc --build', { stdio: 'inherit' });

// Import and run the seed function
const seedDatabase = require('../src/lib/seed.ts').default;

console.log('Initializing database...');
seedDatabase();
console.log('Database initialization complete!');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

// This is a strict database auth verification tool
// It will directly verify if the email/password combination exists in the database
async function verifyCredentials(email, password) {
  console.log(`\n======== AUTHENTICATION VERIFICATION ========`);
  console.log(`Checking credentials for: ${email}`);
  
  try {
    // Look up the user in the database
    const user = await prisma.user.findUnique({
      where: { email }
    });
    
    if (!user) {
      console.log(`RESULT: FAIL - User does not exist in database`);
      return false;
    }
    
    console.log(`User found in database with ID: ${user.id}`);
    
    // Verify password against stored hash
    const passwordValid = await bcrypt.compare(password, user.password);
    
    if (passwordValid) {
      console.log(`RESULT: SUCCESS - Password is valid`);
      return true;
    } else {
      console.log(`RESULT: FAIL - Password is invalid`);
      return false;
    }
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    return false;
  } finally {
    console.log(`===========================================\n`);
  }
}

async function main() {
  try {
    // Test hard-coded credentials (admin@example.com / password123)
    console.log("Testing credentials that should work (correct database values):");
    await verifyCredentials('admin@example.com', 'password123');
    
    // Test incorrect password
    console.log("Testing incorrect password:");
    await verifyCredentials('admin@example.com', 'wrongpassword');
    
    // Test non-existent user
    console.log("Testing non-existent user:");
    await verifyCredentials('nonexistent@example.com', 'anypassword');
    
    // Test the old password the user mentioned
    console.log("Testing old password that should NOT work:");
    await verifyCredentials('admin@example.com', 'oldpassword'); // Replace with whatever old password still works
    
  } catch (error) {
    console.error(`Main error: ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
}

main();

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  try {
    console.log("Attempting to reset admin user password...");
    
    // Find the admin user
    const user = await prisma.user.findUnique({
      where: { email: 'admin@example.com' }
    });

    if (!user) {
      console.log("Admin user not found. Creating new admin user...");
      
      // Create a new admin user with hashed password
      const hashedPassword = await bcrypt.hash('password123', 12);
      
      const newUser = await prisma.user.create({
        data: {
          email: 'admin@example.com',
          name: 'Admin User',
          password: hashedPassword,
        }
      });
      
      console.log(`Created new admin user with ID: ${newUser.id}`);
      return;
    }
    
    // User exists, update the password
    const hashedPassword = await bcrypt.hash('password123', 12);
    
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword }
    });
    
    console.log(`Successfully reset password for admin user (ID: ${updatedUser.id})`);
    console.log("You can now log in with:");
    console.log("Email: admin@example.com");
    console.log("Password: password123");
    
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();

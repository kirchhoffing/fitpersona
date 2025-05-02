const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: 'admin@example.com' }
    });

    if (existingUser) {
      console.log('Admin user already exists');
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash('123', 12);

    // Create the admin user
    const user = await prisma.user.create({
      data: {
        email: 'admin@example.com',
        name: 'Admin',
        password: hashedPassword,
      }
    });

    console.log(`Created admin user with ID: ${user.id}, email: ${user.email}`);
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();

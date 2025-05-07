import { PrismaClient } from '../src/generated/client';

const prisma = new PrismaClient();

async function deleteUser(userId: string) {
  try {
    // Delete the user and all related records in a single transaction
    const deletedUser = await prisma.user.delete({
      where: { id: userId },
      include: {
        profile: true,
        workouts: {
          include: {
            exercises: true
          }
        }
      }
    });
    
    console.log(`Successfully deleted user: ${deletedUser.email}`);
    return deletedUser;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}

// Example usage
async function main() {
  // Replace with the actual user ID you want to delete
  const userId = process.argv[2];
  
  if (!userId) {
    console.error('Please provide a user ID as an argument');
    process.exit(1);
  }

  try {
    await deleteUser(userId);
    console.log('User deletion completed successfully');
  } catch (error) {
    console.error('Failed to delete user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();

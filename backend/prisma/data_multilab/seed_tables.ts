import { PrismaClient } from '@prisma/client';
import * as data from './data';

const prisma = new PrismaClient();

async function seedMedicalCenter() {
  await Promise.all(
    data.getMedicalCenter().map((medical_center) => {
      return prisma.medical_center.create({
        data: {
          ...medical_center,
        },
      });
    }),
  );
}

async function seedDoctors() {
  await Promise.all(
    data.getDoctors().map((doctor) => {
      return prisma.doctors.create({
        data: {
          ...doctor,
        },
      });
    }),
  );
}

async function seedPatients() {
  await Promise.all(
    data.generatePatients().map((patient) => {
      return prisma.patient.create({
        data: {
          ...patient,
        },
      });
    }),
  );
}

async function seedMedicalTests() {
  await Promise.all(
    data.generateMedicalTests().map((medicalTest) => {
      return prisma.medical_test.create({
        data: {
          ...medicalTest,
        },
      });
    }),
  );
}

async function seedUsers() {
  await Promise.all(
    data.generateUsers().map((user) => {
      return prisma.users.create({
        data: {
          ...user,
        },
      });
    }),
  );
}

async function seedOrders() {
  await Promise.all(
    data.generateOrders().map((order) => {
      return prisma.order.create({
        data: {
          ...order,
        },
      });
    }),
  );
}

async function seedOrderDetails() {
  await Promise.all(
    data.generateOrderDetail().map(async (orderDetail) => {
      try {
        const result = await prisma.medical_test.findUnique({
          where: {
            pk_medical_test: orderDetail.fk_medical_test,
          },
        });
        orderDetail.price = result.price;
      } catch (error) {
        orderDetail.price = 0;
      }

      return prisma.order_details.create({
        data: {
          ...orderDetail,
        },
      });
    }),
  );
}

async function seedDatabase() {
  await seedMedicalCenter();
  await seedDoctors();
  await seedPatients();
  await seedMedicalTests();
  await seedUsers();
  await seedOrders();
  await seedOrderDetails();
}

seedDatabase()
  .catch((err) => {
    console.error('Error seeding database:', err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

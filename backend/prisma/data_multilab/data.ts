/* 10 MedicalCenter */
export function getMedicalCenter() {
  return [
    {
      name: 'Clinica Montevideo',
      address: 'Jr. Montevideo 448, Surco',
    },
    {
      name: 'Clinica Javier Prado',
      address: 'Av. Javier Prado 708, San Isidro',
    },
    {
      name: 'Clinica San Borja',
      address: 'Av. San Borja Norte 123, San Borja',
    },
    {
      name: 'Clinica Los Olivos',
      address: 'Av. Los Olivos 567, Los Olivos',
    },
    {
      name: 'Clinica La Molina',
      address: 'Av. La Molina 890, La Molina',
    },
    {
      name: 'Clinica Miraflores',
      address: 'Av. Miraflores 321, Miraflores',
    },
    {
      name: 'Clinica Barranco',
      address: 'Av. Barranco 456, Barranco',
    },
    {
      name: 'Clinica Surquillo',
      address: 'Av. Surquillo 789, Surquillo',
    },
    {
      name: 'Clinica San Isidro',
      address: 'Av. San Isidro 234, San Isidro',
    },
    {
      name: 'Clinica Villa El Salvador',
      address: 'Av. Villa El Salvador 567, Villa El Salvador',
    },
  ];
}

/* 20 Doctors */
export function getDoctors() {
  const doctors = [];
  const firstNames = [
    'Miguel',
    'Ana',
    'Carlos',
    'Luis',
    'María',
    'Pedro',
    'Laura',
    'David',
    'Sofía',
    'Juan',
  ];
  const lastNames = [
    'Peralta',
    'López',
    'González',
    'Martínez',
    'Rodríguez',
    'Hernández',
    'Fernández',
    'Díaz',
    'Moreno',
    'Álvarez',
  ];

  for (let i = 0; i < 20; i++) {
    const fkMedicalCenter = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]; // Selecciona un nombre de la lista de firstNames aleatoriamente
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]; // Selecciona un apellido de la lista de lastNames aleatoriamente
    const codePrefix =
      firstName.charAt(0) + lastName.charAt(0) + fkMedicalCenter; // Crea el prefijo del código alfanumérico
    const randomNumbers = Math.floor(100 + Math.random() * 800); // Genera un número aleatorio de 3 dígitos

    const doctor = {
      fk_medical_center: fkMedicalCenter,
      first_name: firstName,
      last_name: lastName,
      code: `${codePrefix}${randomNumbers}`,
    };

    doctors.push(doctor);
  }

  return doctors;
}

/* 50 Patients */
export function generatePatients() {
  const patients = [];

  const firstNames = [
    'John',
    'Mary',
    'David',
    'Emma',
    'Michael',
    'Sophia',
    'James',
    'Olivia',
    'William',
    'Ava',
  ];
  const lastNames = [
    'Smith',
    'Johnson',
    'Williams',
    'Brown',
    'Jones',
    'Garcia',
    'Miller',
    'Davis',
    'Rodriguez',
    'Martinez',
  ];
  const emailExtensions = [
    '@gmail.com',
    '@hotmail.com',
    '@yahoo.com',
    '@outlook.com',
  ];

  for (let i = 0; i < 50; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const birthYear = Math.floor(Math.random() * (2010 - 1980 + 1)) + 1980;
    const birthMonth = Math.floor(Math.random() * 12) + 1;
    const birthDay = Math.floor(Math.random() * 28) + 1; // Limitamos a 28 días para evitar fechas inválidas
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    const phoneNumber = `9${Math.floor(10000000 + Math.random() * 90000000)}`; // Genera un número de 9 dígitos que empiece con 9
    const emailExtension =
      emailExtensions[Math.floor(Math.random() * emailExtensions.length)];
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${Math.floor(Math.random() * 999)}${emailExtension}`;

    const patient = {
      first_name: firstName,
      last_name: lastName,
      birth_date: birthDate,
      phone_number: phoneNumber,
      email: email,
    };

    patients.push(patient);
  }

  return patients;
}

/*10 MedicalTest*/
export function generateMedicalTests() {
  const medicalTests = [];

  const medicalTestNames = [
    'Hemograma completo',
    'Colesterol total',
    'Glucosa en sangre',
    'Examen de orina',
    'Radiografía de tórax',
    'Electrocardiograma',
    'Ecografía abdominal',
    'Tomografía computarizada',
    'Resonancia magnética',
    'Colonoscopia',
  ];

  const medicalTestDescriptions = [
    'Análisis de sangre para evaluar diferentes componentes celulares.',
    'Medición del nivel total de colesterol en la sangre.',
    'Prueba para medir los niveles de glucosa en la sangre.',
    'Análisis de la composición de la orina.',
    'Radiografía para visualizar los órganos y estructuras del tórax.',
    'Registro de la actividad eléctrica del corazón.',
    'Imagen de los órganos abdominales mediante ultrasonido.',
    'Exploración de imágenes detalladas de estructuras internas del cuerpo.',
    'Técnica de diagnóstico por imágenes que produce imágenes detalladas de órganos y tejidos del cuerpo.',
    'Exploración del intestino grueso mediante un tubo flexible con una cámara.',
  ];

  const fixedPrices = [
    75.5, 85.25, 120.0, 90.75, 150.0, 65.8, 110.5, 180.25, 200.0, 95.3,
  ];

  for (let i = 0; i < 10; i++) {
    const medicalTest = {
      name: medicalTestNames[i],
      description: medicalTestDescriptions[i],
      price: fixedPrices[i],
    };

    medicalTests.push(medicalTest);
  }

  return medicalTests;
}

/* 5 User */
export function generateUsers() {
  const users = [];

  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emma'];
  const emailExtensions = ['@gmail.com', '@hotmail.com', '@outlook.com'];
  const specialNumbers = ['123', '080', '487'];

  for (let i = 0; i < 5; i++) {
    const name = names[i];
    const emailExtension =
      emailExtensions[Math.floor(Math.random() * emailExtensions.length)];
    const email = `${name.toLowerCase()}${Math.floor(Math.random() * 100)}${emailExtension}`;
    const randomSpecialNumber =
      specialNumbers[Math.floor(Math.random() * specialNumbers.length)];
    const password = name.substring(0, 3).toLowerCase() + randomSpecialNumber;

    const user = {
      email: email,
      name: name,
      password: password,
    };

    users.push(user);
  }

  return users;
}

/* 15 Orders */
export function generateOrders() {
  const orders = [];
  const currentCode = 10020030;

  for (let i = 0; i < 15; i++) {
    const fkDoctor = Math.floor(Math.random() * 20) + 1; // Genera un número aleatorio entre 1 y 20 para fk_doctor
    const fkPatient = Math.floor(Math.random() * 50) + 1; // Genera un número aleatorio entre 1 y 50 para fk_patient
    const fkUser = Math.floor(Math.random() * 5) + 1; // Genera un número aleatorio entre 1 y 5 para fk_user
    const code = (currentCode + i).toString();

    const order = {
      fk_doctor: fkDoctor,
      fk_patient: fkPatient,
      fk_user: fkUser,
      code: code,
    };

    orders.push(order);
  }

  return orders;
}

/* 15 Order_detail */
export function generateOrderDetail() {
  const orderDetails = [];

  for (let i = 1; i <= 15; i++) {
    const fkOrder = i;
    const fkMedicalTest = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10 para fk_medical_test

    const orderDetail = {
      fk_order: fkOrder,
      fk_medical_test: fkMedicalTest,
    };

    orderDetails.push(orderDetail);
  }

  return orderDetails;
}

# Test Multilab

##  Programing Language
### Backend
- [ ] Php -> Laravel
- [x] Node -> Nest.js

### Frontend
- [ ] Node -> Next.js - React

### Database / ORM
- [x] Mysql - Prisma

## Technical expectations
 
- [x] Exercise 1: 
    show the medical centers available to associate a doctor.
    Simulated endpoint type GET that returns a list of medical centers      in JSON format with the following structure.

- **GET /centrosmedicos**
```json
[
  {
    "id": 1,
    "name": "CLINICA MONTEVIDEO",
    "address": "Jr. Montevideo 448, Surco.",
    "created_at": "2022-05-27 12:07:17"
  },
  {
    "id": 2,
    "name": "CLINICA JAVIER PRADO",
    "address": "Av. Javier Prado 708, San Isidro",
    "created_at": "2022-08-27 12:07:17"
  }
]

```

- [x] Exercise 2:  manage patients using a REST api that contains a CRUD for patient entry, using standard HTTP verbs. It does not require authentication of any kind.

- **GET /pacientes** -> returns the list of patients.
- **GET /pacientes/:id** -> returns the patient with the specified id.
- **POST /pacientes/:id** -> create a patient.
- **PUT /pacientes/:id** -> update a patient.
- **DELETE /pacientes/:id** -> eliminates a patient.

  - [x] Scenario 1: Create patient. POST request with correct data → New record created in database, returns JSON object of new record (status 201).
  - [x] Scenario 2: Create patient. POST request with incorrect or incomplete data → Returns validation error message, does not create database user (status 400).
  - [x] Scenario 3: List patients. GET request → Returns array with same field structure in database (status 200, JSON format).
  - [x] Scenario 4: List patients. GET request, no records → Returns empty array (status 200, JSON format).
  - [x] Scenario 5: List patient by ID. GET request with valid id → Returns JSON object with same field structure in database (status 200).
  - [x] Scenario 6: List patient by ID. GET request with invalid id (status 404).
  - [x] Scenario 7: Update patient. PUT request with valid id and required user data → Updated in database (status 204).
  - [x] Scenario 8: Update patient. PUT request with valid id and incorrect or incomplete data → Returns validation error message, does not update database user (status 400).
  - [x] Scenario 9: Update patient. PUT request with invalid id (status 404).
  - [x] Scenario 10: Delete patient. DELETE request with valid id → Patient deleted (status 204).
  - [x] Scenario 11: Delete patient. DELETE request with invalid id (status 404).

- [ ] Exercise 3: User authentication system based on the users table, which allows me to log in with my email and password.
  - [ ] Frontend:
    - [ ] Scenario 1: Successful login. Since I enter a valid username and password to the login form, the session is created and the browser is redirected to a welcome screen or to the order list (Exercise 4).

    - [ ] Scenario 2: Incorrect login data: Since I entered an invalid username and password (the user does not exist in the database or the password is incorrect), a message of please verify your email and password is displayed.
  - [x] Backend:
    - [x] API implementation to verify if a user can log in.

- [ ] Exercise 4: NOT COMPLETE

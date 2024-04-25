-- CreateTable
CREATE TABLE `doctors` (
    `pk_doctor` BIGINT NOT NULL AUTO_INCREMENT,
    `fk_medical_center` BIGINT NOT NULL,
    `firt_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `code` VARCHAR(6) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`pk_doctor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `patient` (
    `pk_patient` BIGINT NOT NULL AUTO_INCREMENT,
    `firt_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `birth_date` DATETIME(3) NOT NULL,
    `phone_number` CHAR(9) NULL,
    `email` VARCHAR(50) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`pk_patient`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `pk_user` BIGINT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(50) NOT NULL,
    `name` VARCHAR(50) NULL,
    `password` VARCHAR(50) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`pk_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `medical_test` (
    `pk_medical_test` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NULL,
    `description` VARCHAR(500) NULL,
    `price` FLOAT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`pk_medical_test`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order` (
    `pk_order` BIGINT NOT NULL AUTO_INCREMENT,
    `fk_doctor` BIGINT NOT NULL,
    `fk_patient` BIGINT NOT NULL,
    `fk_user` BIGINT NOT NULL,
    `code` CHAR(8) NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`pk_order`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_details` (
    `pk_order_detail` BIGINT NOT NULL AUTO_INCREMENT,
    `fk_order` BIGINT NOT NULL,
    `fk_medical_test` BIGINT NOT NULL,
    `price` FLOAT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`pk_order_detail`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_fk_doctor_fkey` FOREIGN KEY (`fk_doctor`) REFERENCES `doctors`(`pk_doctor`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_fk_patient_fkey` FOREIGN KEY (`fk_patient`) REFERENCES `patient`(`pk_patient`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_fk_user_fkey` FOREIGN KEY (`fk_user`) REFERENCES `users`(`pk_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_details` ADD CONSTRAINT `order_details_fk_order_fkey` FOREIGN KEY (`fk_order`) REFERENCES `order`(`pk_order`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_details` ADD CONSTRAINT `order_details_fk_medical_test_fkey` FOREIGN KEY (`fk_medical_test`) REFERENCES `medical_test`(`pk_medical_test`) ON DELETE RESTRICT ON UPDATE CASCADE;

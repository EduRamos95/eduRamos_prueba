/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `order` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `order_code_key` ON `order`(`code`);

-- CreateIndex
CREATE UNIQUE INDEX `users_email_key` ON `users`(`email`);

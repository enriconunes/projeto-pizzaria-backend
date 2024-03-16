/*
  Warnings:

  - You are about to drop the column `tabel` on the `orders` table. All the data in the column will be lost.
  - Added the required column `table` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "tabel",
ADD COLUMN     "table" INTEGER NOT NULL;

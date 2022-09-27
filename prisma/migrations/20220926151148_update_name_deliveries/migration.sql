-- DropForeignKey
ALTER TABLE `deliveries` DROP FOREIGN KEY `Deliveries_id_client_fkey`;

-- DropForeignKey
ALTER TABLE `deliveries` DROP FOREIGN KEY `Deliveries_id_deliveryman_fkey`;

-- AddForeignKey
ALTER TABLE `deliveries` ADD CONSTRAINT `deliveries_id_client_fkey` FOREIGN KEY (`id_client`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `deliveries` ADD CONSTRAINT `deliveries_id_deliveryman_fkey` FOREIGN KEY (`id_deliveryman`) REFERENCES `deliveryman`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

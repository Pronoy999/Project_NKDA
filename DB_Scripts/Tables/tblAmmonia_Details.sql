DROP PROCEDURE IF EXISTS sp_tblAmmonia_Details;
CREATE PROCEDURE sp_tblAmmonia_Details()
BEGIN
    CREATE TABLE IF NOT EXISTS `ammonia_details` (
      `id` int(11) NOT NULL AUTO_INCREMENT,
      `toilet_seat_id` int(11) NOT NULL,
      `ammonia_level` decimal(10,2) DEFAULT '0.00',
      `created_by` int(11) NOT NULL,
      `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
      `updated_by` int(11) DEFAULT NULL,
      `updated` timestamp NULL DEFAULT NULL,
      PRIMARY KEY (`id`),
      KEY `FK_toilet_seat` (`toilet_seat_id`),
      CONSTRAINT `FK_toilet_seat` FOREIGN KEY (`toilet_seat_id`) REFERENCES `toilet_details` (`id`)
    );
end;
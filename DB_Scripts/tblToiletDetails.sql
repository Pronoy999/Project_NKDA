DROP PROCEDURE if exists sp_tblToilet_details;
CREATE PROCEDURE sp_tblToilet_Details()
BEGIN 
    CREATE TABLE IF NOT EXISTS `toilet_details` (
          `id` int(11) NOT NULL AUTO_INCREMENT,
          `seat_number` int(11) DEFAULT '0',
          `toilet_id` int(11) DEFAULT '0',
          `created_by` int(11) NOT NULL,
          `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
          `updated_by` int(11) DEFAULT NULL,
          `updated` timestamp NULL DEFAULT NULL,
          PRIMARY KEY (`id`),
          KEY `fk_toilet_id` (`toilet_id`),
          KEY `idx_toilet_seat_id` (`id`),
          CONSTRAINT `fk_toilet_id` FOREIGN KEY (`toilet_id`) REFERENCES `toilet_master` (`id`)
    ) ;
end;
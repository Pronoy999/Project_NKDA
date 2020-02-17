DROP PROCEDURE IF EXISTS sp_tblToilet_Master;
CREATE PROCEDURE sp_tblToilet_Master()
BEGIN
    CREATE TABLE IF NOT EXISTS toilet_master(
          `id` int(11) NOT NULL AUTO_INCREMENT,
          `toilet_name` varchar(255) DEFAULT NULL,
          `address` varchar(255) DEFAULT NULL,
          `total_seats` int(11) DEFAULT '0',
          `technician_id` int(11) DEFAULT '0',
          `created_by` int(11) NOT NULL,
          `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
          `updated_by` int(11) DEFAULT NULL,
          `updated` timestamp NULL DEFAULT NULL,
          PRIMARY KEY (`id`),
          KEY `idx_toilet_id` (`id`),
          KEY `toilet_master_ibfk_1` (`technician_id`),
          CONSTRAINT `toilet_master_ibfk_1` FOREIGN KEY (`technician_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE
    );
end;
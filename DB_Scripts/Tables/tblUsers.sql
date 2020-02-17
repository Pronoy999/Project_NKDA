DROP PROCEDURE IF EXISTS sp_tblUsers;
CREATE PROCEDURE sp_tblUsers()
BEGIN
        DECLARE CurrentSchema varchar(20);
        SELECT DATABASE() INTO CurrentSchema;
        IF NOT EXISTS(
        SELECT 1 FROM information_schema.TABLES
            WHERE TABLE_SCHEMA='nkda'
            AND TABLE_NAME='users'
        ) THEN
            BEGIN
                CREATE TABLE `users` (
                  `id` int(11) NOT NULL AUTO_INCREMENT,
                  `first_name` varchar(255) NOT NULL,
                  `last_name` varchar(255) NOT NULL,
                  `email_id` varchar(255) NOT NULL,
                  `role_id` enum('Admin','User') NOT NULL DEFAULT 'User',
                  `created_by` int(11) NOT NULL,
                  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                  `updated_by` int(11) DEFAULT NULL,
                  `updated` timestamp NULL DEFAULT NULL,
                  PRIMARY KEY (`id`),
                  UNIQUE KEY `email_id` (`email_id`),
                  KEY `idx_email` (`email_id`),
                  KEY `idx_id` (`id`)
                ) ;
            end;
        end if;
END;

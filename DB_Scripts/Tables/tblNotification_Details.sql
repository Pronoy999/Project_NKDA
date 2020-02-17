DROP PROCEDURE IF EXISTS sp_tblNotification_Details;
CREATE PROCEDURE sp_tblNotification_Details()
BEGIN
    CREATE TABLE IF NOT EXISTS `notification_details` (
      `id` int(11) NOT NULL AUTO_INCREMENT,
      `notification_content` varchar(255) NOT NULL,
      `ammonia_details_id` int(11) NOT NULL,
      `is_send` int(11) DEFAULT '1',
      `created_by` int(11) NOT NULL,
      `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
      `updated_by` int(11) DEFAULT NULL,
      `updated` timestamp NULL DEFAULT NULL,
      PRIMARY KEY (`id`),
      KEY `frk_ammonia` (`ammonia_details_id`),
      CONSTRAINT `frk_ammonia` FOREIGN KEY (`ammonia_details_id`) REFERENCES `ammonia_details` (`id`)
    );
end;
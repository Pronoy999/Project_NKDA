DROP PROCEDURE IF EXISTS sp_tblLoginMaster;
CREATE PROCEDURE sp_tblLoginMaster()
BEGIN
    DECLARE CurrentSchema varchar(100);
    SELECT DATABASE() INTO CurrentSchema;
    IF NOT EXISTS(
        SELECT 1 FROM information_schema.TABLES
        WHERE TABLE_SCHEMA=CurrentSchema
            AND TABLE_NAME='login_master'
        ) THEN
            BEGIN
                CREATE TABLE login_master(
                    id INT AUTO_INCREMENT PRIMARY KEY ,
                    email_id VARCHAR(255) UNIQUE,
                    password_hash varchar(255),
                    created_by int,
                    created timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                    updated_by int,
                    updated timestamp,
                    constraint fk_email_id FOREIGN KEY (email_id) REFERENCES users(email_id)
                );
            end;
    end if;
end;
CALL sp_tblLoginMaster();
DROP PROCEDURE IF EXISTS sp_tblLoginMaster;
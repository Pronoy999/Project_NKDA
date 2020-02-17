DROP PROCEDURE IF EXISTS sp_CreateUser;
CREATE PROCEDURE sp_CreateUser(IN firstName varchar(255), IN lastName varchar(255), IN emailId varchar(255),
                               IN role varchar(6), IN password varchar(255),out userID INT)
BEGIN
    SELECT AUTO_INCREMENT INTO userID FROM information_schema.TABLES WHERE TABLE_NAME = 'users' LIMIT 1;
    INSERT INTO users(first_name,
                      last_name,
                      email_id,
                      role_id,
                      created_by)
    VALUES (firstName, lastName, emailId, role, 1);
    INSERT INTO login_master(email_id, password_hash, created_by)
    VALUES (emailId, password, userID);
    SELECT userID;
end;

CALL sp_CreateUser('Pronoy'
    ,'Mukherjee','mukherjee_pronoy999@gmail.com',
    'Admin','abc123',@userID);
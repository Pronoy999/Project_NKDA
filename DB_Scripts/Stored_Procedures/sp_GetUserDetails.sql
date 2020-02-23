DROP PROCEDURE IF EXISTS sp_GetUserDetails;
CREATE PROCEDURE sp_GetUserDetails(IN email varchar(255), IN firstName varchar(255), IN lastName varchar(255),
                                   IN userID INT)
BEGIN
    DECLARE whereClaus varchar(200) DEFAULT '';
    DECLARE andFlag INT DEFAULT 0;
    #SELECT length(firstName);
    IF length(firstName) > 1 AND andFlag = 0 THEN
        SET whereClaus = concat(' u.first_name=', '''', firstName, '''');
        SET andFlag = 1;
    END IF;
    IF length(lastName) > 1 AND andFlag = 1 THEN
        SET whereClaus = concat(whereClaus, ' and u.last_name=', '''', lastName, '''');
    ELSEIF length(lastName) > 1 AND andFlag = 0 THEN
        SET whereClaus = concat(whereClaus, ' u.last_name=', '''', lastName, '''');
        SET andFlag = 1;
    END IF;
    IF length(email) > 3 AND andFlag = 1 THEN
        SET whereClaus = concat(whereClaus, ' and u.email_id=', '''', email, '''');
    ELSEIF length(email) > 3 AND andFlag = 0 THEN
        SET whereClaus = concat(whereClaus, ' u.email_id=', '''', email, '''');
        SET andFlag = 1;
    END IF;

    IF userID > 0 and andFlag = 1 THEN
        SET whereClaus = concat(whereClaus, ' and u.id=', '''', userID, '''');
    ELSEIF userID > 0 AND andFlag = 0 THEN
        SET whereClaus = concat(whereClaus, ' u.id=', userID);
    END IF;
    IF userID <= 0 and andFlag = 0 THEN
        set whereClaus = '1 = 2';
    END IF;

    SET @q= concat('SELECT u.id, u.first_name, u.last_name, u.email_id, u.role_id FROM users u WHERE ', whereClaus);

    PREPARE stmt FROM @q;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
END;



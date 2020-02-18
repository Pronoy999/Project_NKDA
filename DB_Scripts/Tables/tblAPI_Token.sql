DROP PROCEDURE IF EXISTS sp_tblAPI_Token;
CREATE PROCEDURE sp_tblAPI_Token()
BEGIN
    CREATE TABLE IF NOT EXISTS api_token
    (
        id         int primary key auto_increment,
        api_token  varchar(255),
        validity   INT,
        created_by INT NOT NULL,
        created    timestamp DEFAULT current_timestamp,
        updated_by INT,
        updated    timestamp
    );
end;
CALL sp_tblAPI_Token();
DROP PROCEDURE IF EXISTS sp_tblAPI_Token;
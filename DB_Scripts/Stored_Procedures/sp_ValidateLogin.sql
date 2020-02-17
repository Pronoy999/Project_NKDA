DROP PROCEDURE IF EXISTS sp_ValidateLogin;
CREATE PROCEDURE sp_ValidateLogin(IN email varchar(255), IN password VARCHAR(255))
BEGIN
    SELECT  u.id, u.first_name, u.last_name, u.email_id, u.role_id
    FROM login_master l
    INNER JOIN users u
    ON l.email_id=u.email_id
    WHERE l.email_id=email AND l.password_hash=password LIMIT 1;
end;

CALL sp_ValidateLogin('mukherjee_pronoy@yahoo.in','abc124');
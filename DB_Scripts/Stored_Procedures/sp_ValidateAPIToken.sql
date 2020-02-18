DROP PROCEDURE IF EXISTS sp_ValidateAPIToken;
CREATE PROCEDURE sp_ValidateAPIToken(IN token varchar(255))
BEGIN
    DECLARE tokenId int DEFAULT -1;
    SELECT id into tokenId FROM api_token WHERE api_token = token AND (validity > NOW() OR validity = -1);
    SELECT tokenId;
end;


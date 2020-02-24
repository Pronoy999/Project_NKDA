DROP PROCEDURE IF EXISTS sp_CreateToilet;
CREATE PROCEDURE sp_CreateToilet(IN toiletName varchar(255),
                                 IN address varchar(255),
                                 IN totalSeats INT,
                                 IN technicianId INT, IN userID INT)
BEGIN
    BEGIN
        SELECT AUTO_INCREMENT
        INTO @toiletID
        FROM information_schema.TABLES
        WHERE TABLE_SCHEMA = (SELECT DATABASE())
          AND TABLE_NAME = 'toilet_master'
        LIMIT 1;
        INSERT INTO toilet_master(toilet_name, address, total_seats, technician_id, created_by)
        VALUES (toiletName, address, totalSeats, technicianId, userID);
    END;
    IF totalSeats > 0 THEN
        BEGIN
            DECLARE seatNumber INT DEFAULT 1;
            WHILE seatNumber <= totalSeats
                DO
                    INSERT INTO toilet_details(seat_number, toilet_id, created_by)
                    VALUES (seatNumber, @toiletID, userID);
                    SET seatNumber = (seatNumber + 1);
                end while;
        end;
    end if;
end;

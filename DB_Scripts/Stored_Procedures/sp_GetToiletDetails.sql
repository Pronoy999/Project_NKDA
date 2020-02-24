DROP PROCEDURE IF EXISTS sp_GetToiletDetails;
CREATE PROCEDURE sp_GetToiletDetails(IN toiletID INT)
BEGIN
    IF toiletID > 0 THEN
        SELECT tm.id,
               tm.toilet_name,
               tm.address,
               tm.total_seats,
               tm.technician_id,
               td.id,
               td.seat_number
        FROM toilet_master tm
                 INNER JOIN toilet_details td
                            ON td.toilet_id = tm.id
        WHERE tm.id = toiletID;
    ELSE
        SELECT -1;
    END IF;
end;
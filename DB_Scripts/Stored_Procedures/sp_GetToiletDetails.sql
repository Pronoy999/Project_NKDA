DROP PROCEDURE IF EXISTS sp_GetToiletMasters;
CREATE PROCEDURE sp_GetToiletMasters()
BEGIN
    SELECT tm.id,
           tm.toilet_name,
           tm.address,
           tm.total_seats,
           tm.technician_id
    FROM toilet_master tm;
end;


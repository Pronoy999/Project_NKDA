DROP PROCEDURE IF EXISTS sp_ammoniaTrans;
CREATE PROCEDURE sp_ammoniaTrans(IN par_toilet_id int, IN par_seat_id INT, IN ammoniaLevel decimal(10, 2),
                                 IN user_id INT)
BEGIN
    INSERT INTO ammonia_details(toilet_seat_id,
                                ammonia_level,
                                created_by)
    SELECT id,
           ammoniaLevel,
           user_id
    FROM toilet_details
    WHERE toilet_id = par_toilet_id
      AND seat_number = par_seat_id;
end;
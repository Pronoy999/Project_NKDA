const config = {};
config.port = 7010;

/**
 * data base configurations.
 * @type {string}
 */
config.databaseHost = "hx-db.cy5gosef4el7.ap-south-1.rds.amazonaws.com";
config.databasePort = 3306;
config.databaseUserName = "db_admin";
config.databaseName = "project_night_crawler_staging";
config.databasePassword = "hxadmin123";

/**
 * exporting the Config.
 */
module.exports = config;
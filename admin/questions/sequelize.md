in config file
- why doesn't the info from index.js and database.js live in one file?
- please explain index as an entry file

what is the process object?

process.env is this a property of an object called process or is it the .env file or both

I'd like to store the migrations and perhaps the seeders in json such that I don't have to view the SequelizeMeta table when browsing the db in vs code


basically sequelize is automating the use of SQL but allows the additional functionality of js
the sequelize-cli is the actor performing structural changes to the database
the app user is the actor performing changes to the data (CRUD operations)
both of these types of actions can be automated via code or quazi manually via app interface or cli interface

I understand the models are js representations of a table as classes
and each object property passed in to tablename.init is equivalent
to a something on the table
the key seems to be the actual table column key (aka header)
the value seems to be describing the type and constraints

Per sequelize docs:
Sequelize will only use Model files, it's the table representation.
On the other hand, the migration file is a change in that model or more specifically that table, used by CLI.
Treat migrations like a commit or a log for some change in database.

So should we NOT change migration files maunally?

Or do we make changes in migration then running migration updates the model and records update?

Or do we update both manually and use migration running as version control?

The seed is of course the first records added to a table. Usually used for sample or test data.


Given how so much is done on the front end and with store and state management...is it best to have frontend validations?
I guess ideally both...but it seems front end is particularly important for the user experience...

what is this?

/** @type {import('sequelize-cli').Migration} */

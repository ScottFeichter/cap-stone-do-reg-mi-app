
===========================================================================================

TEST MODEL GENERATOR

npx sequelize-cli model:generate --name test --attributes firstName:string

npx sequelize-cli model:generate --name Best --attributes firstName:string

===========================================================================================

MODEL GENERATORS

npx sequelize-cli model:generate --name user --attributes firstName:string,lastName:string,username:string,email:string,hashedPassword:string

npx sequelize-cli model:generate --name branch --attributes name:string,street:string,city:string,state:string,zip:string

npx sequelize-cli model:generate --name facility --attributes name:string,branchId:integer

npx sequelize-cli model:generate --name accesslevel --attributes level:string

npx sequelize-cli model:generate --name academicdepartment --attributes name:string,chair:string,imgurl:string

npx sequelize-cli model:generate --name employeedepartment --attributes name:string,imgurl:string

npx sequelize-cli model:generate --name employee --attributes employeeDepartmentId:integer,academicDepartmentId:integer,accessLevelId:integer,firstName:string,nickName:string,middleName:string,lastName:string,familyName:string,phone:string,email:string,street:string,city:string,state:string,zip:string,dob:string,ssn:string,firstLang:string,secondLang:string,thirdLang:string,firstInst:string,secondInst:string,thirdInst:string,primaryTitle:string,primaryStartDate:string,primaryEndDate:string,primaryPayRate:string,secondaryTitle:string,secondaryStartDate:string,secondaryEndDate:string,secondaryPayRate:integer,tertiaryTitle:string,tertiaryStartDate:string,tertiaryEndDate:string,tertiaryPayRate:integer,quarternaryTitle:string,quarternaryStartDate:string,quarternaryEndDate:string,quarternaryPayRate:integer,biography:text,notes:text

npx sequelize-cli model:generate --name household --attributes name:string,notes:text

npx sequelize-cli model:generate --name student --attributes householdId:integer,headOfHousehold:boolean,accesslevelId:integer,firstName:string,nickName:string,middleName:string,lastName:string,familyName:string,phone:string,email:string,street:string,city:string,state:string,zip:string,dob:string,firstLang:string,secondLang:string,thirdLang:string,firstInst:string,secondInst:string,thirdInst:string,yearlyIncome:integer,biography:text,notes:text

===========================================================================================

TEST SEEDER GENERATOR

npx sequelize-cli seed:generate --name demo-test

npx sequelize-cli seed:generate --name demo-Best


===========================================================================================


SEEDER GENERATORS

npx sequelize-cli seed:generate --name demo-user

npx sequelize-cli seed:generate --name demo-branche

npx sequelize-cli seed:generate --name demo-facilitie

npx sequelize-cli seed:generate --name demo-accesslevel

npx sequelize-cli seed:generate --name demo-academicdepartment

npx sequelize-cli seed:generate --name demo-employeedepartment

npx sequelize-cli seed:generate --name demo-employee

npx sequelize-cli seed:generate --name demo-household

npx sequelize-cli seed:generate --name demo-student

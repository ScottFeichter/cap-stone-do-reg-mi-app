
npx sequelize-cli model:generate --name users --attributes firstName:string,lastName:string,username:string,email:string,hasedPassword:string,createdAt:date,updatedAt:date

npx sequelize-cli model:generate --name branches --attributes name:string,street:string,city:string,state:string,zip:integer,createdAt:date,updatedAt:date

npx sequelize-cli model:generate --name facilities --attributes name:string,branchId:integer,createdAt:date,updatedAt:date

npx sequelize-cli model:generate --name accesslevels --attributes type:string,createdAt:date,updatedAt:date

npx sequelize-cli model:generate --name academicdepartments --attributes name:string,chair:string,imgurl:string,createdAt:date,updatedAt:date

npx sequelize-cli model:generate --name employeedepartments --attributes name:string,imgurl:string,createdAt:date,updatedAt:date

npx sequelize-cli model:generate --name employees --attributes employeeDepartmentId:integer,academicDepartmentId:integer,accessLevelId,firstName:string,nickName:string,middleName:string,lastName:string,familyName:string,phone:string,email:string,street:string,city:string,state:string,zip:string,dob:string,ssn:string,firstLang:string,secondLang:string,thirdLang:string,firstInst:string,secondInst:string,thirdInst:string,primaryTitle:string,primaryStartDate:string,primaryEndDate:string,primaryPayRate:string,secondaryTitle:string,secondaryStartDate:string,secondaryEndDate:string,secondaryPayRate:integer,tertiaryTitle:string,tertiaryStartDate:string,tertiaryEndDate:string,tertiaryPayRate:integer,quarternaryTitle:string,quarternaryStartDate:string,quarternaryEndDate:string,quarternaryPayRate:integer,biography:text,notes:text,createdAt:date,updatedAt:date

npx sequelize-cli model:generate --name households --attributes name:string,notes:text,createdAt:date,updatedAt:date

npx sequelize-cli model:generate --name students --attributes householdId:integer,headOfHousehold:boolean,accesslevelId:integer,firstName:string,nickName:string,middleName:string,lastName:string,familyName:string,phone:string,email:string,street:string,city:string,state:string,zip:string,dob:string,firstLang:string,secondLang:string,thirdLang:string,firstInst:string,secondInst:string,thirdInst:string,yearlyIncome:integer,biography:text,notes:text,createdAt:date,updatedAt:date

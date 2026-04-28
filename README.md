# dev_mob_backend
Backend of the mobile REST application


## Endpoints
To get all of db's content: **[url]**/enseignants/ with **GET** method

To add data on the database: **[url]**/enseignants/ with **POST** method

To get stats data on the database: **[url]**/enseignants/stats with **GET** method

To change data of a line on db's content: **[url]**/enseignants/:id with **PUT** method

To delete a line on db's content: **[url]**/enseignants/:id with **DELETE** method


## Env File
PORT= **port_number**

DB_NAME= **nom_base_de_donnees**

DB_USERNAME=**username_db**

DB_PASSWORD=**password_db**

DB_HOSTNAME="localhost"

DB_DIALECT="mysql"


## Starting :

"dev": "nodemon --watch src --exec ts-node src/index.ts",

"build": "tsc",

"start": "node dist/index.js",

"test": "echo \"Error: no test specified\" && exit 1"

*Before using "yarn start", don't forget to do "yarn build"*

*You can directly use by typing the command "yarn dev"*

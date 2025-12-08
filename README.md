### Important steps before launching the application:
1. Make sure you have a PostgreSQL database installed locally and a service is run
2. Create a "typedevs" user with an appropriate password as specified in the .env file
- To do that enter psql using this command ``sudo -u postgres psql``
- Then create a user with admin priviliges ``CREATE USER your_admin_username WITH PASSWORD 'your_secure_password' SUPERUSER;``
- Then create a database ``CREATE DATABASE db_name;``
- Then assign this database to a user created earlier ``ALTER DATABASE db_name OWNER TO new_owner_username;``

3. Follow the steps defined here (I cba) https://www.prisma.io/docs/getting-started/prisma-orm/quickstart/postgresql
4. After prisma setup, you can run the app using ``pnpm dev`` command.

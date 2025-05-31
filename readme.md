# Docker Compose Multi-Service Project

**Name:** Durlabh Tilavat
**Student ID:** 8938972

---

## 📚 Overview

It uses Docker Compose to develop a strong multi-service architecture for the project.
Best practices are applied to field the code, manage services and manage diverse environments.
There is a database, an admin graphical user interface (GUI), a React frontend and a Node.js server behind the application.
Some important features are scalability, using Nginx to balance load and checking service health.
Using Docker volumes, persistent data storage is set up to ensure a reliable service.

##The project is structured into two Docker Compose files, each reflecting a specific assignment section:

-✅ Multiple Services: MySQL with PHPMyAdmin

-✅ Application with Dependencies: PostgreSQL, pgAdmin, ReactJS frontend, and a scalable NodeJS API with Nginx load balancing
---

## 🛠️ Services Overview

---

### `docker-compose.mysql.yml`

-✅ MySQL database running on port 3306
-✅ PHPMyAdmin GUI accessible on port 8081
-✅ Secure credential management using environment variables
-✅ Persistent data storage implemented with Docker volumes

## 📝 Screenshots
<img width="952" alt="image" src="https://github.com/user-attachments/assets/673d9176-bf5b-4aea-9275-750c1ef8b66b" />


<img width="947" alt="image" src="https://github.com/user-attachments/assets/2f53d5aa-36b7-49c7-b43b-b48ce0220d63" />



---

### `docker-compose.pg.yml`

-✅ pgAdmin4 GUI on port 8082, launched only after PostgreSQL is healthy (depends_on + healthcheck)
-✅ PostgreSQL database on port 5432
-✅ Backend API scaled to 3 replicas and load balanced via Nginx
-✅ ReactJS (Next.js) frontend and NodeJS (Express) backend API
-✅ Multi-stage builds for optimized React and NodeJS images
-✅ Nginx serves the React static build as a single entry point, eliminating CORS issues

## 📝 Screenshots

![image](https://github.com/user-attachments/assets/1d2fc817-2033-4e90-8ec9-084263f3774d)

![image](https://github.com/user-attachments/assets/1a47d1d0-6511-423a-bd16-8fa8f794bea1)

![image](https://github.com/user-attachments/assets/12424169-fe64-494f-8666-fc68353f1655)




---

## 🚀 How to Run Services

---

### 1️⃣ MySQL + PHPMyAdmin

```bash
docker-compose -f docker-compose.mysql.yml up --build
```

Access:

- PHPMyAdmin → [http://localhost:8081](http://localhost:8081)
- MySQL database → `localhost:3306`

---

### 2️⃣ PostgreSQL + pgAdmin + React + NodeJS API

```bash
docker-compose -f docker-compose.pg.yml up --build
```

Access:

- React app → [http://localhost:3000](http://localhost:3000)
- pgAdmin → [http://localhost:8082](http://localhost:8082)
- PostgreSQL database → `localhost:5432`
- API → `/todos` (load balanced through Nginx)

---

## ⚙️ Ports Summary

| Service       | Port                                            |
| ------------- | ----------------------------------------------- |
| MySQL         | 3306                                            |
| PHPMyAdmin    | 8081                                            |
| PostgreSQL    | 5432                                            |
| pgAdmin4      | 8082                                            |
| React + Nginx | 3000                                            |
| NodeJS API    | Load balanced internally (not exposed directly) |

---

## ✅ Key Features Demonstrated

- ✅ Multiple services in Compose
- ✅ Environment variables for DB credentials
- ✅ Persistent storage with volumes
- ✅ Application dependencies and health checks
- ✅ Multi-stage builds for React and NodeJS
- ✅ Scaling and load balancing with Nginx upstream config
- ✅ Clean architecture → Nginx as single entry point → no CORS issues
- ✅ Organized Compose files → aligned with assignment sections

---

## 🧭 Compose Files Summary

| Compose File               | Purpose                                                                                            |
| -------------------------- | -------------------------------------------------------------------------------------------------- |
| `docker-compose.mysql.yml` | MySQL + PHPMyAdmin (**Multiple Services**)                                                         |
| `docker-compose.pg.yml`    | PostgreSQL + pgAdmin + React + API (**Dependencies, Scaling, Load balancing, Multi-stage builds**) |

---

## 📁 Repository Structure

```
/
├── backend/            # NodeJS API (multi-stage Dockerfile)
├── frontend/           # ReactJS app (multi-stage Dockerfile)
├── nginx/default.conf  # Nginx reverse-proxy config
├── docker-compose.mysql.yml  # MySQL + PHPMyAdmin
├── docker-compose.pg.yml     # PostgreSQL + pgAdmin + React + API
└── README.md           # Project documentation (this file)
```

---

## 🧑 Author

**Rishikumar Patel**
Student ID: **8972657**

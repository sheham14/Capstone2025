# 🧾 Capstone Insurance Quoting Web App
![React](https://img.shields.io/badge/Frontend-React-blue)
![Spring Boot](https://img.shields.io/badge/Backend-SpringBoot-brightgreen)
![AWS](https://img.shields.io/badge/Hosted_on-AWS-orange)
![Status](https://img.shields.io/badge/Status-Live-green)

A full-stack insurance quoting platform built with **React**, **Spring Boot**, and **MariaDB**, deployed entirely on **AWS**. Users can register, log in, and receive insurance quotes through a sleek, responsive UI. Backend is securely hosted with HTTPS and domain routing via DuckDNS + Let’s Encrypt.

### 🔗 Live Demo
- **Frontend:** [https://main.dojq4677oq2fu.amplifyapp.com](https://main.dojq4677oq2fu.amplifyapp.com)
- **Backend:** [https://sheham-capstone.duckdns.org](https://sheham-capstone.duckdns.org)

> 🔐 **Test Credentials**
> - **Admin login:**  
>   Email: `repman@example.com`  
>   Password: `adminpass`
>
> - **Customer login:**  
>   You can register with your own credentials and sign in.

---

## ⚙️ Tech Stack

| Layer        | Technology                         |
| ------------ | ---------------------------------- |
| Frontend     | React, JavaScript, AWS Amplify     |
| Backend      | Spring Boot, Java                  |
| Database     | MariaDB (Amazon RDS)               |
| Hosting      | EC2 (Amazon Linux 2023), Nginx     |
| Domain + SSL | DuckDNS, Let’s Encrypt, Certbot    |

---

## 🚀 Features

- 🔐 Secure user registration and login
- 📄 Quote form submission
- 🧾 Dynamic quote calculations
- 📊 Responsive UI (Amplify-hosted)
- 🛡️ Backend protected with HTTPS via Nginx + Certbot

---

## 🛠️ Local Development

### Prerequisites

- Java 17+
- Node.js + npm
- MySQL/MariaDB
- `.env` file in frontend:
  ```env
  REACT_APP_BACKEND_URL=http://localhost:8080

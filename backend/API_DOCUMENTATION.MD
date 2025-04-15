# API Documentation
Authored by Parker Wallace

> This document seeks to accuratley document the Java RESTful API as Designed for the Josh Taylor Insurance Application and contains all endpoints, response and request examples.

# /Users/register

## Description
utilized for creating a user account for use in the system

## Request Body (Form Data)
|Field|Type|Example|Description|
|---|---|---|---|
|email|String|Test@notarealdomain.net|the user email for the user|
|password|String|Password1|the plaintext raw password for the user|
|name|String|John Smith|the full name of the user|
|date of birth|LocalDate|2002-12-31|the date of birth for the user|


## Example Request
```plainText
POST /Users/register
Content-Type: application/x-www-form-urlencoded

email=Test@notarealdomain.net&password=Password1&name=Parker%20Wallace&dateofBirth=2002-12-31
```

```bash
curl -X POST localhost:8080/users/register -d "name=parker" -d "password=Password1" -d "email=parker@gmail.com" -d "dateofBirth=2001-09-26"
```
## Example Response
```
"CREATED"
```
## Notes

# /Users/login

## Description
utilized for creating and using a login token for the user. all main functionality will require passing the token into the PATH

## Request Body (Form Data)
|Field|Type|Example|Description|
|---|---|---|---|
|email|String|Test@notarealdomain.net|the user email for the login|
|password|String|Password1|the plaintext raw password for the login|

## Example Request
```plainText
POST /Users/Login
Content-Type: application/x-www-form-urlencoded

email=Test@notarealdomain.net&password=Password1
```

```bash
 curl -X POST localhost:8080/users/login -d "password=Password1" -d "email=parker@gmail.com"
```
## Example Response
```
"1335d8ed-33d3-4fd6-8bbf-9b7caba4aa8e"
```
## Notes

Being a resource creation for tokenization the response is just the token which will be used for the remainder of the session

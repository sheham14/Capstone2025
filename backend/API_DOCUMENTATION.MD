# API Documentation
Authored by Parker Wallace

> This document seeks to accuratley document the Java RESTful API as Designed for the Josh Taylor Insurance Application and contains all endpoints, response and request examples.

# Table Of Contents
|Function|Endpoint|
|---|---|
|[**Create Resources**](#create)||
|[Register Customers](#register)|`/register`|
|[Register Represenatives](#registerrepresenative)|`/registerrepresenative`|
|[Login Users](#login)|`/login`|
|[Create a home insurance policy](#tokenhomepolicy)|`/{TOKEN}/homepolicy`|
|[Create a home insurance quote](#tokenhomequote)|`/{TOKEN}/homequote`|
|[Create an auto insurance policy](#tokenautopolicy)|`/{TOKEN}/autopolicy`|
|[Create an auto insurance quote](#tokenautoquote)|`/{TOKEN}/autoquote`|
|[**Read Resources**](#read)||
|[Retrieve all policies for any given user](#tokenalluserpolicies)|`{TOKEN}/alluserpolicies`|
|[Retrieve all policies for any given user](#tokenalluserhomepolicies)|`{TOKEN}/alluserhompolicies`|
|[Retrieve all auto insurance policies for any given user](#tokenalluserautopolicies)|`/{TOKEN}/alluserautopoliicies`|
|[Retrieve all current policies available in the system](#tokenallpolicies)|`/{TOKEN}/allpolicies`|
|[Retrieve all current home policies in the system](#tokenallhomepolicies)|`/{TOKEN}/allhomepolicies`|
|[Retrieve all current auto policies in the system](#tokenallautopolicies)|`/{TOKEN}/allautopolicies`|
|[Retrieve all current users in the system](#tokenallusers)|`/{TOKEN}/allusers`|
|[Retrieve all information about a specific user](#getuserid)|`/getuser/{id}`|
|[Updates a user](#updateuserid)|`/updateuser/{id}`|
|[Retrieves all information about a specified home policy](#tokenidgethomepolicy)|`/{TOKEN}/{id}/getHomePolicy`|
|[Retrieves all information about a specified auto policy](#tokenidgetautopolicy)|`/{TOKEN}/{id}/getAutoPolicy`|
|[Updates information about a specified home policy](#tokenidupdatehomepolicy)|`/{TOKEN}/{id}/updateHomePolicy`|
|[Updates information about a specified auto policy](#tokenidupdateautopolicyautomobile)|`/{TOKEN}/{id}/updateAutoPolicy`|
|[Changes a specified home insurance policy from quote to policy](#tokenidcreatehomepolicyfromquote)|`/{TOKEN}/{id}/createHomePolicyfromquote`|
|[Changes a specified auto insurance policy from quote to policy](#tokenidcreateautopolicyfromquote)|`/{TOKEN}/{id}/createAutoPolicyfromquote`|
|[Deactivates a home insurance policy](#tokenidcancelhomepolicy)|`/{TOKEN}/{id}/cancelHomePolicy`|
|[Deactivates an auto insurance policy](#tokenidcancelautopolicy)|`/{TOKEN}/{id}/cancelAutoPolicy`|

# Create

## /register

### Description
utilized for creating a user account for use in the system

### Request Body (Form Data)

|Field|Type|Example|Description|
|---|---|---|---|
|email|String|Test@notarealdomain.net|the user email for the user|
|password|String|Password1|the plaintext raw password for the user|
|name|String|John Smith|the full name of the user|
|date of birth|LocalDate|2002-12-31|the date of birth for the user|


### Example Request

```plainText
POST /register
Content-Type: application/x-www-form-urlencoded

email=Test@notarealdomain.net&password=Password1&name=Parker%20Wallace&dateofBirth=2002-12-31
```

```bash
curl -X POST localhost:8080/register -d "name=parker" -d "password=Password1" -d "email=parker@gmail.com" -d "dateofBirth=2001-09-26"
```

### Example Response

```
"CREATED"
```

### Notes

## /registerrepresenative

### Description
utilized for creating a user account for use in the system

### Request Body (Form Data)

|Field|Type|Example|Description|
|---|---|---|---|
|email|String|Test@notarealdomain.net|the user email for the user|
|password|String|Password1|the plaintext raw password for the user|
|name|String|John Smith|the full name of the user|
|date of birth|LocalDate|2002-12-31|the date of birth for the user|


### Example Request

```plainText
POST /register
Content-Type: application/x-www-form-urlencoded

email=Test@notarealdomain.net&password=Password1&name=Parker%20Wallace&dateofBirth=2002-12-31
```

```bash
curl -X POST localhost:8080/register -d "name=parker" -d "password=Password1" -d "email=parker@gmail.com" -d "dateofBirth=2001-09-26"
```

### Example Response

```
"CREATED"
```

### Notes


## /login

### Description
utilized for creating and using a login token for the user. all main functionality will require passing the token into the PATH

### Request Body (Form Data)

|Field|Type|Example|Description|
|---|---|---|---|
|email|String|Test@notarealdomain.net|the user email for the login|
|password|String|Password1|the plaintext raw password for the login|

### Example Request

```plainText
POST /Login
Content-Type: application/x-www-form-urlencoded

email=Test@notarealdomain.net&password=Password1
```

```bash
 curl -X POST localhost:8080/login -d "password=Password1" -d "email=parker@gmail.com"
```

### Example Response

```
"1335d8ed-33d3-4fd6-8bbf-9b7caba4aa8e"
```

### Notes

Being a resource creation for tokenization the response is just the token which will be used for the remainder of the session

## /{TOKEN}/homepolicy

### Description

utilized for creating home policies

### Request Body (Form Data)

|Field|Type|Example|Description|
|---|---|---|---|
|startdate|LocalDate|2001-12-31|the date the policy begins|
|basepremium|double|1500.00|the base premium for the policy|
|taxRate|double|15.00|the tax rate for the policy|
|activestatus|boolean|true|the active status for the policy. TRUE being an active policy|
|hasAutopolicydiscoutn|boolean|boolan|wether or not the user also has an auto policy, this provides a discount|
|totalPremium|double|1000.00|the total premium for the policy|
|insuredHome.homevalue|double|150000.00|the home's value|
|insuredHome.liabilityLimit|double|90000.00|the liability limit for the home under policy|
|insuredHome.dwellingType|string|BUNGALOW|enumerated dwelling type for the home under policy. options are [ BUNGALOW, STANDALONE]|
|insuredHome.heatingType|string|GAS|enumerated heating type for the home under policy. options are [GAS, OIL, ELECTRI]|
|insuredHome.locationType|string|RURAL|enumerated location type for the home under policy, options are [RURAL, URBAN]|

### Example Request

```plainText
POST /1335d8ed-33d3-4fd6-8bbf-9b7caba4aa8e/homepolicy
Content-Type: application/x-www-form-urlencoded

startdate=2000-12-31&basepremium=15000&taxRate=20&activestatus=true&hasAutopolicydiscount=false&totalPremium=99999&insuredHome.homevalue=250000&insuredHome.liabilityLimit=250000&insuredHome.dwellingType=BUNGALOW&insuredHome.heatingType=OIL&insuredHome.locationType=RURAL
```

```bash
 curl -X POST localhost:8080/1335d8ed-33d3-4fd6-8bbf-9b7caba4aa8e/homepolicy  -d "startdate=2000-12-31" -d "basepremium=15000" -d "taxRate=20" -d "activestatus=true" -d "hasAutopolicydiscount=false" -d "totalPremium=99999" -d "insuredHome.homevalue=250000" -d "insuredHome.liabilityLimit=250000" -d "insuredHome.dwellingType=BUNGALOW" -d "insuredHome.heatingType=OIL" -d "insuredHome.locationType=RURAL"
```

### Example Response

```
CREATED
```

### Notes

## /{TOKEN}/homequote

### Description
utilized for creating home quote

### Request Body (Form Data)
|Field|Type|Example|Description|
|---|---|---|---|
|startdate|LocalDate|2001-12-31|the date the policy begins|
|basepremium|double|1500.00|the base premium for the policy|
|taxRate|double|15.00|the tax rate for the policy|
|activestatus|boolean|true|the active status for the policy. TRUE being an active policy|
|hasAutopolicydiscoutn|boolean|boolan|wether or not the user also has an auto policy, this provides a discount|
|totalPremium|double|1000.00|the total premium for the policy|
|insuredHome.homevalue|double|150000.00|the home's value|
|insuredHome.liabilityLimit|double|90000.00|the liability limit for the home under policy|
|insuredHome.dwellingType|string|BUNGALOW|enumerated dwelling type for the home under policy. options are [ BUNGALOW, STANDALONE]|
|insuredHome.heatingType|string|GAS|enumerated heating type for the home under policy. options are [GAS, OIL, ELECTRI]|
|insuredHome.locationType|string|RURAL|enumerated location type for the home under policy, options are [RURAL, URBAN]|

### Example Request

```plainText
POST /1335d8ed-33d3-4fd6-8bbf-9b7caba4aa8e/homequote
Content-Type: application/x-www-form-urlencoded

startdate=2000-12-31&basepremium=15000&taxRate=20&activestatus=true&hasAutopolicydiscount=false&totalPremium=99999&insuredHome.homevalue=250000&insuredHome.liabilityLimit=250000&insuredHome.dwellingType=BUNGALOW&insuredHome.heatingType=OIL&insuredHome.locationType=RURAL

```

```bash
 curl -X POST localhost:8080/1335d8ed-33d3-4fd6-8bbf-9b7caba4aa8e/homequote  -d "startdate=2000-12-31" -d "basepremium=15000" -d "taxRate=20" -d "activestatus=true" -d "hasAutopolicydiscount=false" -d "totalPremium=99999" -d "insuredHome.homevalue=250000" -d "insuredHome.liabilityLimit=250000" -d "insuredHome.dwellingType=BUNGALOW" -d "insuredHome.heatingType=OIL" -d "insuredHome.locationType=RURAL"
```

### Example Response
```
CREATED
```

### Notes

## /{TOKEN}/autoquote

### Description

utilized for creating auto quote

### Request Body (Form Data)

|Field|Type|Example|Description|
|---|---|---|---|
|startdate|LocalDate|2001-12-31|the date the policy begins|
|basepremium|double|1500.00|the base premium for the policy|
|taxRate|double|15.00|the tax rate for the policy|
|activestatus|boolean|true|the active status for the policy. TRUE being an active policy|
|hasHomepolicydiscoutn|boolean|boolan|wether or not the user also has an home policy, this provides a discount|
|totalPremium|double|1000.00|the total premium for the policy|
|insuredAutomobile.vehicleMake|String|Honda|the home's value|
|insuredAutomobile.vehicleModel|String|Accord|the liability limit for the home under policy|
|insuredAutomobile.manufactureDate|LocalDate|2000-12-31|enumerated dwelling type for the home under policy. options are [ BUNGALOW, STANDALONE]|
|insuredAutomobile.numberofAccidents|Integer|2|enumerated heating type for the home under policy. options are [GAS, OIL, ELECTRI]|

### Example Request

```plainText
POST /1335d8ed-33d3-4fd6-8bbf-9b7caba4aa8e/autoquote
Content-Type: application/x-www-form-urlencoded

startdate=2000-12-31&basepremium=15000&taxRate=20&activestatus=true&hasHomepolicydiscount=false&totalPremium=99999&insuredAutomobile.homevalue=250000&insuredAutomobile.vehicleMake=Honda&insuredAutomobile.vehicleModel=Accord&insuredAutomobile.numberOfAccidents=5&insuredAutomobile.manufacturedate=2000-12-31
```

```bash
 curl -X POST localhost:8080/1335d8ed-33d3-4fd6-8bbf-9b7caba4aa8e/homequote  -d "startdate=2000-12-31" -d "basepremium=15000" -d "taxRate=20" -d "activestatus=true" -d "hasHomepolicydiscount=false" -d "totalPremium=99999&" -d "insuredAutomobile.homevalue=250000" -d "insuredAutomobile.vehicleMake=Honda" -d "insuredAutomobile.vehicleModel=Accord" -d "insuredAutomobile.numberOfAccidents=5" -d "insuredAutomobile.manufacturedate=2000-12-31"
```

### Example Response

```
CREATED
```

### Notes 

## /{TOKEN}/autopolicy

### Description

utilized for creating home policy

### Request Body (Form Data)

|Field|Type|Example|Description|
|---|---|---|---|
|startdate|LocalDate|2001-12-31|the date the policy begins|
|basepremium|double|1500.00|the base premium for the policy|
|taxRate|double|15.00|the tax rate for the policy|
|activestatus|boolean|true|the active status for the policy. TRUE being an active policy|
|hasHomepolicydiscoutn|boolean|boolan|wether or not the user also has an home policy, this provides a discount|
|totalPremium|double|1000.00|the total premium for the policy|
|insuredAutomobile.vehicleMake|String|Honda|the home's value|
|insuredAutomobile.vehicleModel|String|Accord|the liability limit for the home under policy|
|insuredAutomobile.manufactureDate|LocalDate|2000-12-31|enumerated dwelling type for the home under policy. options are [ BUNGALOW, STANDALONE]|
|insuredAutomobile.numberofAccidents|Integer|2|enumerated heating type for the home under policy. options are [GAS, OIL, ELECTRI]|

### Example Request

```plainText
POST /1335d8ed-33d3-4fd6-8bbf-9b7caba4aa8e/autoquote
Content-Type: application/x-www-form-urlencoded

startdate=2000-12-31&basepremium=15000&taxRate=20&activestatus=true&hasHomepolicydiscount=false&totalPremium=99999&insuredAutomobile.homevalue=250000&insuredAutomobile.vehicleMake=Honda&insuredAutomobile.vehicleModel=Accord&insuredAutomobile.numberOfAccidents=5&insuredAutomobile.manufacturedate=2000-12-31
```

```bash
 curl -X POST localhost:8080/1335d8ed-33d3-4fd6-8bbf-9b7caba4aa8e/homequote  -d "startdate=2000-12-31" -d "basepremium=15000" -d "taxRate=20" -d "activestatus=true" -d "hasHomepolicydiscount=false" -d "totalPremium=99999&" -d "insuredAutomobile.homevalue=250000" -d "insuredAutomobile.vehicleMake=Honda" -d "insuredAutomobile.vehicleModel=Accord" -d "insuredAutomobile.numberOfAccidents=5" -d "insuredAutomobile.manufacturedate=2000-12-31"
```

### Example Response

```
CREATED
```

### Notes

# Read

## /{TOKEN}/alluserpolicies

### Description

Retrieves all policies for a given user

### Example Request

```plaintext
GET http://localhost:8080/123e4567-e89b-12d3-a456-426614174000/allusers
Host: localhost:8080
```

```bash
curl -X GET http://localhost:8080/123e4567-e89b-12d3-a456-426614174000/allusers

```
### Example Response

>Not Available

### Notes

## /{TOKEN}/alluserautopolicies

### Description

Retrieves all auto policies and quotes for a specific user

### Example Request

```plaintext
GET http://localhost:8080/123e4567-e89b-12d3-a456-426614174000/alluserautopolicies
Host: localhost:8080
```

```bash
curl -X GET http://localhost:8080/123e4567-e89b-12d3-a456-426614174000/alluserautopolicies

```
### Example Response

>Not Available

### Notes

## /{TOKEN}/alluserhomepolicies

### Description

Retrieves all home insurance policies and quotes for a specific user

### Example Request

```plaintext
GET http://localhost:8080/123e4567-e89b-12d3-a456-426614174000/alluserhomepolicies
Host: localhost:8080
```

```bash
curl -X GET http://localhost:8080/123e4567-e89b-12d3-a456-426614174000/alluserhomepolicies

```
### Example Response

>Not Available

### Notes

## /{TOKEN}/allpolicies

### Description

Retrieves all available policies and quotes from the database. this can only be accomplished if the token is owned by a represenative

### Example Request

```plaintext
GET http://localhost:8080/123e4567-e89b-12d3-a456-426614174000/allpolicies
Host: localhost:8080
```

```bash
curl -X GET http://localhost:8080/123e4567-e89b-12d3-a456-426614174000/allpolicies

```
### Example Response

>Not Available

### Notes

## /{TOKEN}/allhomepolicies

### Description

Retrieves all available home policies in the database. this can only be accomplished if the token is owned by a represenative

### Example Request

```plaintext
GET http://localhost:8080/123e4567-e89b-12d3-a456-426614174000/allhomepolicies
Host: localhost:8080
```

```bash
curl -X GET http://localhost:8080/123e4567-e89b-12d3-a456-426614174000/allhomepolicies

```
### Example Response

>Not Available

### Notes

## /{TOKEN}/allautopolicies

### Description

Retrieves all auto policies from the database. this can only be accomplished if the token is owned by a represenative

### Example Request

```plaintext
GET http://localhost:8080/123e4567-e89b-12d3-a456-426614174000/allautopolicies
Host: localhost:8080
```

```bash
curl -X GET http://localhost:8080/123e4567-e89b-12d3-a456-426614174000/allautopolicies

```
### Example Response

>Not Available

### Notes

## /{TOKEN}/allusers

### Description

Retrieves all users from the database. this can only be accomplished if the token is owned by a represenative.

### Example Request

```plaintext
GET http://localhost:8080/123e4567-e89b-12d3-a456-426614174000/allusers
Host: localhost:8080
```

```bash
curl -X GET http://localhost:8080/123e4567-e89b-12d3-a456-426614174000/allusers

```
### Example Response

>Not Available

### Notes

## /getuser/{id}

### Description

Retrieves information about a specified user

### Example Request

```plaintext
GET http://localhost:8080/getuser/5
Host: localhost:8080
```

```bash
curl -X GET http://localhost:8080/getuser/5

```
### Example Response

>Not Available

### Notes

# Update

## /updateuser/{id}

### Description

updates a user with new information based on the path id

### Example Request

```plaintext
GET http://localhost:8080/updateuser/5
Host: localhost:8080
```

```bash
curl -X GET http://localhost:8080/updateuser/5

```
### Example Response

>Not Available

### Notes

## /{TOKEN}/{id}/getHomePolicy

### Description

Retrieves a Home policy for a specific user

### Example Request

```plaintext
GET http://localhost:8080/123e4567-e89b-12d3-a456-426614174000/5/getHomePolicy
Host: localhost:8080
```

```bash
curl -X GET http://localhost:8080/123e4567-e89b-12d3-a456-426614174000/5/getHomePolicy

```
### Example Response

>Not Available

### Notes

## /{TOKEN}/{id}/updatehomepolicyhome

### Description

updates a home insurance policy with new information

### Example Request

```plaintext
GET http://localhost:8080/123e4567-e89b-12d3-a456-426614174000/5/updatehomepolicyhome
Host: localhost:8080
```

```bash
curl -X GET http://localhost:8080/123e4567-e89b-12d3-a456-426614174000/5/updatehomepolicyhome

```
### Example Response

>Not Available

### Notes

## /{TOKEN}/{id}/createhomepolicyfromquote

### Description

creates a home policy from a quote by changing the viewingtype property

### Response Body (Form Data)
### Example Request
### Example Response
### Notes
## /{TOKEN}/{id}/cancelhomepolicy
### Description
### Response Body (Form Data)
### Example Request
### Example Response
### Notes
## /{TOKEN}/{id}/getAutoPolicy
### Description
### Response Body (Form Data)
### Example Request
### Example Response
### Notes
## /{TOKEN}/{id}/updateautopolicyautomobile
### Description
### Response Body (Form Data)
### Example Request
### Example Response
### Notes
## /{TOKEN}/{id}/createautopolicyfromquote
### Description
### Response Body (Form Data)
### Example Request
### Example Response
### Notes
## /{TOKEN}/{id}/cancelautopolicy
### Description
### Response Body (Form Data)
### Example Request
### Example Response
### Notes




























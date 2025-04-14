# API Documentation
Authored by Parker Wallace

> This document seeks to accuratley document the Java RESTful API as Designed for the Josh Taylor Insurance Application and contains all endpoints, response and request examples.

# Table Of Contents
|Function|Endpoint|
|---|---|
|[Register Users](#register)|`/register`|
|[Login Users](#login)|`/register`|
|[create a home insurance policy](#tokenhomepolicy)|`/{TOKEN}/homepolicy`|
|[create a home insurance quote](#tokenhomequote)|`{TOKEN}/homequote`|
|[create an auto insurance policy](#tokenautopolicy)|`/{TOKEN}/autopolicy`|
|[create an auto insurance quote](#tokenautoquote)|`/{TOKEN}/autoquote`|
|[retrieve all policies for any given user](#tokenalluserpolicies)|`{TOKEN}/alluserpolicies`|
|[retrieve all policies for any given user](#tokenalluserpolicies)|`{TOKEN}/alluserpolicies`|
|[retrieve all auto insurance policies for any given user](#tokenallautopolicies)|`/{TOKEN}/alluserautopoliicies`|



## /register

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
POST /register
Content-Type: application/x-www-form-urlencoded

email=Test@notarealdomain.net&password=Password1&name=Parker%20Wallace&dateofBirth=2002-12-31
```

```bash
curl -X POST localhost:8080/register -d "name=parker" -d "password=Password1" -d "email=parker@gmail.com" -d "dateofBirth=2001-09-26"
```

## Example Response

```
"CREATED"
```

## Notes

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
## /{TOKEN}/alluserhomepolicies
## /{TOKEN}/allpolicies
## /{TOKEN}/allhomepolicies
## /{TOKEN}/allautopolicies
## /{TOKEN}/allusers
## /getuser/{id}
## /updateuser/{id}
## /{TOKEN}/{id}/getHomePolicy
## /{TOKEN}/{id}/updatehomepolicyhome
## /{TOKEN}/{id}/createhomepolicyfromquote
## /{TOKEN}/{id}/cancelhomepolicy
## /{TOKEN}/{id}/getAutoPolicy
## /{TOKEN}/{id}/updateautopolicyautomobile
## /{TOKEN}/{id}/createautopolicyfromquote
## /{TOKEN}/{id}/cancelautopolicy
## /registerrepresenative



























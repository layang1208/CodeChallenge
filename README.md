# Phyxable_CodeChallenge
## Introduction
Phyxable Application.

## Setup
### Install the Dependencies
    npm i
### Start Backend Server
    npm start
### Start Frontend Server
    npm run-script client
### Start Full-Stack Application (Frontend & Backend)
    npm run-script dev



## PATIENTS API DOCUMENTATION

###  GET /api/patients

Get all patients' profile

#### Request
- Header

#### Response
Json array of all patients' profile with field:
- email: the unique email of a patient

example:
`[{"_id":"6147fdf24dadca835785ff50","email":"josh4122@gmail.com"}]`


### POST /api/patients/new

Add a patient's profile

#### Request
- Header
- Body (JSON)
    - email: the unique email of a patient want to add

#### Response
Json object of the new added patient profile with field:
- email: the unique email of a patient

example:
`[{"_id":"6147fdf24dadca835785ff50","email":"josh4122@gmail.com"}]`

### POST /api/patients/search
Search a patient's profile

#### Request
- Header
- Body (JSON)
    - email: the unique email of a patient want to search

#### Response
Json object of the searched patient profile with field:
- email: the unique email of the searched patient

example:
`[{"_id":"6147fdf24dadca835785ff50","email":"josh4122@gmail.com"}]`

### POST /api/patients/delete
Delete a patient's profile

#### Request
- Header
- Body
    - email: the unique email of a patient want to delete

#### Response
Json object of the deleted patient profile with field:
- email: the unique email of the deleted patient

example:
`[{"_id":"6147fdf24dadca835785ff50","email":"josh4122@gmail.com"}]`# Phyxable_CodeExercise


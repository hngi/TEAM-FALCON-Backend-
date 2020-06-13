# file-manager (TEAM-FALCON-Backend)

> A dockerized micro-service for adding, updating, retrieving and deleting files

### Quick Start

```bash
# Install dependencies
npm i

# Install dev-dependencies
npm i -D

# Serve on localhost:5555 (development)
npm run dev

# Serve on localhost:5555 (production)
npm start

# Test Routes
npm run test
```

### Testing

### Users

| Routes&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Description |
| ------------------------------------------------------------------------------------------------------- | ----------- |
| POST :: /v1/users/signup                                                                                | User Signup |
| POST :: /v1/users/signin                                                                                | User Login  |

#### User Signup

- Method - POST

- URL - http://localhost:5555/api/v1/users/signup

- Sample Request

```
{
  "fullName": "Eark Mssien",
  "email": "eark.mssien@hng.com",
  "password": "EarkMssien@20Covid"
}
```

- Sample Response

```
{
    "message": "User created",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZTQ5ODM5NmM2YTEyMDAxMmNjNWExZiIsImlhdCI6MTU5MjAzOTQ4MSwiZXhwIjoxNTkyMDc1NDgxfQ.T-5c2-tacuzDn2GgSlLb4TuyIhemImwBHJ66HBPUJ3Y",
        "uid": "5ee498396c6a120012cc5a1f",
        "fullName": "Eark Mssien",
        "email": "eark.mssien@hng.com"
    },
    "success": true
}
```

#### User Login

- Method - POST

- URL - http://localhost:5555/api/v1/users/signin

- Sample Request

```
{
  "email": "eark.mssien@hng.com",
  "password": "EarkMssien@20Covid"
}
```

- Sample Response

```
{
    "message": "User",
    "data": {
        "uid": "5ee498396c6a120012cc5a1f",
        "email": "eark.mssien@hng.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZTQ5ODM5NmM2YTEyMDAxMmNjNWExZiIsImlhdCI6MTU5MjA1NDA3NywiZXhwIjoxNTkyMDkwMDc3fQ.kjffSvKxfleADn7b_G53qX89tDQCyhsQ49qzv8yJlwU"
    },
    "success": true
}
```

### Testing

### Files

| Routes&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Description   |
| ------------------------------------------------------------------------------------------------------- | ------------- |
| POST :: /v1/files                                                                                       | Create a file |
| GET :: /v1/files                                                                                        | Get all files |
| GET :: /v1/files/:fileId                                                                                | Get a file    |
| UPDATE :: /v1/files/:fileId                                                                             | Update a file |
| DELETE :: /v1/files/:fileId                                                                             | Delete a file |

#### Create a File

- Method - POST

- URL - http://localhost:5555/v1/files

- Sample Request

```
Headers
Authorization: Bearer Token
Body: form-data
    key - title      | value - mark_dp
    Key - file(file) | Value - select file
```

- Sample Response

```
{
    "message": "File created",
    "data": {
        "title": "mark_dp",
        "fileURL": "uploads/mark_dp.png",
        "userId": "eark.mssien@hng.com",
        "_id": "Vs24LJZ5l"
    },
    "success": true
}
```

#### Get all Files

- Method - GET

- URL - http://localhost:5555/v1/files

- Sample Request

```
Headers
Authorization: Bearer Token
```

- Sample Response

```
{
    "message": "All Files Found",
    "data": [
        {
            "_id": "Vs24LJZ5l",
            "title": "mark_dp",
            "fileURL": "uploads/mark_dp.png",
            "userId": "eark.mssien@hng.com",
            "createdAt": "2020-06-13T10:01:01.354Z",
            "updatedAt": "2020-06-13T10:01:01.354Z",
            "__v": 0
        },
        {
            "_id": "1s5uG2fKB",
            "title": "mark_dp_1",
            "fileURL": "uploads/mark_dp_1.jpeg",
            "userId": "eark.mssien@hng.com",
            "createdAt": "2020-06-13T13:32:18.813Z",
            "updatedAt": "2020-06-13T13:32:18.813Z",
            "__v": 0
        }
    ],
    "success": true
}
```

#### Get a File

- Method - GET

- URL - http://localhost:5555/v1/files/:fileId

```
Headers
Authorization: Bearer Token
```

- Sample Response

```
{
    "message": "File Found",
    "data": {
        "_id": "Vs24LJZ5l",
        "title": "mark_dp",
        "fileURL": "uploads/mark_dp.png",
        "userId": "eark.mssien@hng.com",
        "createdAt": "2020-06-13T10:01:01.354Z",
        "updatedAt": "2020-06-13T10:01:01.354Z",
        "__v": 0
    },
    "success": true
}
```

#### Update a File

- Method - PUT

- URL - http://localhost:5555/v1/files/:fileId

- Sample Request

```
Headers
Authorization: Bearer Token
Body: form-data
    key - name       | value - updated_mark_dp
    Key - file(file) | Value - select file
```

- Sample Response

```
{
    "status": true,
    "message": "File Updated",
    "data": null
}
```

#### Delete a File

- Method - DELETE

- URL - http://localhost:5555/api/v1/files/:fileId

- Sample Response

```
{
    "status": true,
    "message": "File Deleted",
    "data": null
}
```

#### File structure

```
+- config/
+----- db.js - handles db connection
+----- multerConfig.js - multer middleware, handles file upload
+- controllers/
+----- files.js - handles file controller
+----- users.js - handles user controller
+- middleware/
+----- async.js - handles async in routes
+----- auth.js - auth middleware
+----- error.js - handles error response
+- models/
+----- File.js - file model
+----- Users.js - user model
+- node_modules/
+- routes/
+----- files.js - handles file controller
+----- users.js - handles user controller
+- utils/
+----- CustomError.js - handles custom error response
+----- response.js
+----- toXML.js
+----- validate.js
+----- verifyLink.js
+- .dockerignore
+- .gitignore
+- Dockerfile
+- README.md
+- docker-compose.yml
+- index.html
+- index.js
+- LICENSE
+- package-lock.json
+- package.json
+- swagger.json
+- wait-for.sh
```

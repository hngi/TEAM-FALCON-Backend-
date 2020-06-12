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

### Files

| Routes&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Description                                                        |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| POST api/v1/files                                                | Create a file                         |
| GET api/v1/files                                                 | Get all files                         |
| GET api/v1/files/:fileId                                         | Get a file                            |
| UPDATE api/v1/files/::fileId                                     | Update a file                         |
| DELETE api/v1/files/:fileId                                      | Delete a file                         |

#### Create a File

* Method - POST

* URL - http://localhost:5555/api/v1/files

* Sample Request

```
Headers 
Body: form-data
    Key - file(file)
    Value - select file
```

* Sample Response

```
{
    "status": true,
    "message": "File Uploaded",
    "data": null
}
```

#### Get all Files

* Method - GET

* URL - http://localhost:5555/api/v1/files

* Sample Response

```
{
    "status": true,
    "message": "Files Found",
    "data": [
        {
            "id": "5e6288bc8c7fec6308a1d499",
            "file": "https://res.cloudinary.com/major-stark/image/upload/v1591884570/files/mark.png"
        },
        {
            "id": "5e6288bc8c7fec6308a1d498",
            "file": "https://res.cloudinary.com/major-stark/image/upload/v1591884570/files/essien.jpeg"
        },
        {
            "id": "5e6288bc8c7fec6308a1d497",
            "file": "https://res.cloudinary.com/major-stark/image/upload/v1591884570/files/saucecode.svg"
        },
        {
            "id": "5e6288bc8c7fec6308a1d496",
            "file": "https://res.cloudinary.com/major-stark/image/upload/v1591884570/files/hng.mp4"
        },
        {
            "id": "5e6288bc8c7fec6308a1d495",
            "file": "https://res.cloudinary.com/major-stark/image/upload/v1591884570/files/doe.gif"
        }
    ]
}
```

#### Get a File

* Method - GET

* URL - http://localhost:5555/api/v1/files/5e6288bc8c7fec6308a1d499

* Sample Response

```
{
    "status": true,
    "message": "File Found",
    "data": {
        "id": "5e6288bc8c7fec6308a1d499",
        "file": "https://res.cloudinary.com/major-stark/image/upload/v1591884570/files/mark.png"
    }
}
```

#### Update a File

* Method - PUT

* URL - http://localhost:5555/api/v1/files/5e6288bc8c7fec6308a1d499

* Sample Request

```
Headers 
Body: form-data
    Key - file(file)
    Value - select file
```

* Sample Response

```
{
    "status": true,
    "message": "File Updated",
    "data": null
}
```

#### Delete a File

* Method - DELETE

* URL - http://localhost:5555/api/v1/files/5e6288bc8c7fec6308a1d499

* Sample Response

```
{
    "status": true,
    "message": "File Deleted",
    "data": null
}
```

### Testing

### Users

| Routes&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Description                                                        |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| POST api/v1/users/signup                                         | Signup                                |
| POST api/v1/users/auth                                           | Login                                 |

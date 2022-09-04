# Random User API
A rest API that is created and store in local `user.json` file format. It convey through URL and interact as a direct backend.

## Features
* To **get a random user** type `http://localhost:5000/user/random`
* To **get all user** type `http://localhost:5000/user/all`
* To **post a user** type `http://localhost:5000/user/save` and example data:
```bash
{
    "id": 11,
    "gender": "Female",
    "name": "Sadia Khanum",
    "contact": "123-456-78915",
    "address": "19-C Narsingdi, Dhaka",
    "photoURL": "https://robohash.org/eteosquidem.png?size=500x500&set=set1"
}
```
* To **update a user** type `http://localhost:5000/user/update/11`
```bash
{
    "id": 11,
    "gender": "Male",
    "name": "Rakib Mia",
    "contact": "01905-458493",
    "address": "04-D Gazipur, Dhaka",
    "photoURL": "https://robohash.org/eteosquidem.png?size=500x500&set=set1"
}
```
* To **update multiple user** type `http://localhost:5000/user/bulk-update?id=1-10-11`
```bash
[
    {
        "id": 1,
        "gender": "Non-binary",
        "name": "Agnes Siveter1",
        "contact": "141-988-7479",
        "address": "01 Hoffman Center",
        "photoURL": "https://robohash.org/etlaborumquod.png?size=500x500&set=set1"
    },
    {
        "id": 10,
        "gender": "Female",
        "name": "Nell Castano1",
        "contact": "367-938-6123",
        "address": "3073 Larry Pass",
        "photoURL": "https://robohash.org/adquidolores.png?size=500x500&set=set1"
    },
    {
        "id": 11,
        "gender": "Female",
        "name": "Sadia Khanum1",
        "contact": "123-456-78915",
        "address": "19-C Narsingdi, Dhaka",
        "photoURL": "https://robohash.org/eteosquidem.png?size=500x500&set=set1"
    }
]
```
* To **delete a user** type `http://localhost:5000/user/delete/9`
---
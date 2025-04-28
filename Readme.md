# chai aur code backend series

This is a backend series on javascript
- [Model link] (https://app.eraser.io/workspace/
YtPqZ1VogxGy1jzIDkzj?origin=share)


# 12th video:
difference bwteen http and https
-http mai jaisa data hai waisa hi exact chale jaata hai - abc hai toh udhar bhi abc hi jaata hai
-https mai bass ek extra layer aa jati hai - woh layer basically data ko bass encrypt karti hai

Hyper text transfer protocol

URL/ URI/ URN - zyada differnece nahi hai - sab basically addresses hai 

what are http headers:?
-metada - key value paires sent along with request and response
-uses - caching, authentication, state management(type of user-loggedin,loggedout,newuser etc)
categories:-
>Request Headers -> from client
>Response Headers -> from server
>Representation Headers -> encoding/ compression
>Payload Headers -> data

Most common Headers:
> Accept: Application/json
> User-Agent
> Authorization
> Content-Type
> cookie
> cache-control

CORS: }
                } FOR COMPANY PURPOSES
SECURITY: } 

http methods:
-Basic set of operations that can be used to interact with server

>GET - retrieve a resource
>HEAD - no message body (response headers only)
>OPTIONS - what options are available
>TRACE - loopback test (debugging)
>DELETE - remove a resource
>PUT - replace a resource
>POST - interact with resource (mostly add)
>PATCH - change a part of a resource

HTTPS Status Code
> 1 xx information
> 2 xx success
> 3 xx redirection
> 4 xx client error
> 5 xx server error

>100 continue
>102 processing
>200 ok
>201 created
>202 accepted
>307 temporary redirect
>308 permament redirect
>400 bad request
>401 unauthorized
>402 payment required
>404 not found
>500 internal server error
>504 gate way timeout

# 14th video
completed the logic building of controller user!
    //get user details from frontend
    //validation - not empty
    //check if user already exists
    //check for images, check for avatar
    //upload them to cloudinary, check avatar in cloudinary
    //create a user object - create entry in db
    //remove password and refresh token field from response
    //check for user creation
    //return res 
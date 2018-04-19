# React + Redux shopping cart

[Live demo](https://pasierb.github.io/case-study-shopping-cart/)

Implementing backend server for this scenario is an overkill at best,
so we are going to mock it.

To make it more "real world" scenario let's make some assumptions:

- we are dealing with REST API
- it's slow (response time 400ms)
- our REST API does not return associated objects
- products are in many-to-one relation to promotion (to avoid making up stacking logic)
- error handling will mud the waters so we'll conviniently ignore it here
# Spring Boot, MVC, Data and MongoDB CRUD Java Web Application

This project was generated with [SPRING INITIALIZR](https://start.spring.io/).

## Credits

Thanks to the author **Didin J.**
[Source](https://www.djamware.com/post/59b606e280aca768e4d2b13b/spring-boot-mvc-data-and-mongodb-crud-java-web-application)

## Breaking changes with new versions

findOne doesn't exist in CrudRepository. Now, the name is findById that returns an Optional<T>.

So, in the code, in Product, override as before, but in the controller, add .orElse(null) to the findById call.
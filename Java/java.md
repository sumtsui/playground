https://www.javatpoint.com/spring-vs-spring-boot-vs-spring-mvc

| Spring                                                       | Spring Boot                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Spring Framework** is a widely used Java EE framework for building applications. | **Spring Boot Framework** is widely used to develop **REST APIs**. |
| It aims to simplify Java EE development that makes developers more productive. | It aims to shorten the code length and provide the easiest way to develop **Web Applications**. |
| The primary feature of the Spring Framework is **dependency injection**. | The primary feature of Spring Boot is **Autoconfiguration**. It automatically configures the classes based on the requirement. |
| It helps to make things simpler by allowing us to develop **loosely coupled** applications. | It helps to create a **stand-alone** application with less configuration. |
| The developer writes a lot of code (**boilerplate code**) to do the minimal task. | It **reduces** boilerplate code.                             |
| To test the Spring project, we need to set up the sever explicitly. | Spring Boot offers **embedded server** such as **Jetty** and **Tomcat**, etc. |
| It does not provide support for an in-memory database.       | It offers several plugins for working with an embedded and **in-memory** database such as **H2**. |
| Developers manually define dependencies for the Spring project in **pom.xml**. | Spring Boot comes with the concept of **starter** in pom.xml file that internally takes care of downloading the dependencies **JARs** based on Spring Boot Requirement. |





| Spring Boot                                                  | Spring MVC                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Spring Boot** is a module of Spring for packaging the Spring-based application with sensible defaults. | **Spring MVC** is a model view controller-based web framework under the Spring framework. |
| It provides default configurations to build **Spring-powered** framework. | It provides **ready to use** features for building a web application. |
| There is no need to build configuration manually.            | It requires build configuration manually.                    |
| There is **no requirement** for a deployment descriptor.     | A Deployment descriptor is **required**.                     |
| It avoids boilerplate code and wraps dependencies together in a single unit. | It specifies each dependency separately.                     |
| It **reduces** development time and increases productivity.  | It takes **more** time to achieve the same.                  |






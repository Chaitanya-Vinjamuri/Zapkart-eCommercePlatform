package com.zapkart.ecommerce_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class EcommerceBackendApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(EcommerceBackendApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(EcommerceBackendApplication.class, args);
        System.out.println("project is working successfully!!!");
    }
}

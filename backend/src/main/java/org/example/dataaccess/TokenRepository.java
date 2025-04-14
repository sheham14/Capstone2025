package org.example.dataaccess;

import java.util.UUID;

import org.example.pojos.Core.LoginToken;
import org.springframework.data.repository.CrudRepository;


/**
 * User Repository interface that will be used by String to create a bean that handles all the CRUD operations
 */
public interface TokenRepository extends CrudRepository<LoginToken, UUID> {
   LoginToken Token(UUID token);


    // This is where you write code needed beyond the basics

}
package org.example.dataaccess;

import org.example.pojos.Core.User;
import org.example.pojos.Home.Home;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.converter.json.GsonBuilderUtils;

/**
 * User Repository interface that will be used by String to create a bean that handles all the CRUD operations
 */
public interface UserRepository extends CrudRepository<User, Long> {
   User getUserById(Integer id);

    // This is where you write code needed beyond the basics

}
package org.example.dataaccess;

import org.example.pojos.Auto.AutoInsurance;
import org.example.pojos.Auto.Automobile;
import org.example.pojos.Core.User;
import org.example.pojos.Home.HomeInsurance;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Home Repository interface that will be used by String to create a bean that handles all the CRUD operations
 */
public interface AutoPoliciesRepository extends CrudRepository<AutoInsurance, Integer> {

    Iterable<AutoInsurance> getAllByid(Long id);
    Iterable<AutoInsurance> findBypolicyOwner(User user_id);
    Iterable<AutoInsurance> findBypolicyOwnerAndactiveStatus(User policyOwner, boolean activeStatus);
    //Note: I am surprised this works! Spring detects it and fills in the method. Crazy.
    //If this didn't work I would have retrieved all the homes and looped through and grab the homes that
    //matched the user id.



}
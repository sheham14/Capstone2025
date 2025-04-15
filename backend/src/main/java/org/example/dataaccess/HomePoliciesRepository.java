    package org.example.dataaccess;

    import java.util.List;
    import org.example.pojos.Core.User;
    import org.example.pojos.Home.HomeInsurance;
    import org.springframework.data.repository.CrudRepository;
    import org.springframework.stereotype.Repository;

    /**
     * Home Repository interface that will be used by String to create a bean that handles all the CRUD operations
     */
    public interface HomePoliciesRepository extends CrudRepository<HomeInsurance, Integer> {

        /**
         * Get all homes for a user
         * @param id
         * @return
         */
        Iterable<HomeInsurance> getAllById(Integer id);
        Iterable<HomeInsurance> findBypolicyOwner(User policyOwner);
        Iterable<HomeInsurance> findBypolicyOwnerAndactiveStatus(User policyOwner, boolean activeStatus);

        //Note: I am surprised this works! Spring detects it and fills in the method. Crazy.
        //If this didn't work I would have retrieved all the homes and looped through and grab the homes that
        //matched the user id.



    }
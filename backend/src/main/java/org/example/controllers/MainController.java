package org.example.controllers;

import org.example.dataaccess.HomeRepository;
import org.example.dataaccess.UserRepository;
import org.example.pojos.Home.Home;
import org.example.pojos.Core.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Optional;

/**
 * The main controller for this application. Controllers can be split by the base URL in the request mapping
 */
@Controller
public class MainController {


    //Wire the ORM
    @Autowired private UserRepository userRepository;
    @Autowired private HomeRepository homeRepository;

    

    /**
     * Get all homes for a specific User
     */
    @GetMapping(path = RESTNouns.USER +  RESTNouns.ID + RESTNouns.HOME)
    public @ResponseBody Iterable<Home> getAllHomesByUser(@PathVariable("id") Long userId) {
        Iterable<Home> homes = null;
        if (userRepository.existsById(userId)) {
            Optional<User> user = userRepository.findById(userId);
            if(user.isPresent()){
                // homeRepository

                homes = homeRepository.getAllByUserId(userId);
            }
        }

        //TODO handle errors

        return homes;
    }

    /**
     * Create a home for a user
     * @param userId user id
     * @param dateBuilt date built
     * @param value value of the home as an int
     * @return
     */
    @PostMapping(path = RESTNouns.USER + RESTNouns.ID + RESTNouns.HOME)
    public @ResponseBody Home createHomeByUser(
            @PathVariable("id") Long userId,
            @RequestParam LocalDate dateBuilt, @RequestParam int value) {
//
        Home home = null;
        if (userRepository.existsById(userId)) {
            Optional<User> user = userRepository.findById(userId);

            home = new Home();
            home.setHomeValue(value);
            home.setDateBuilt(dateBuilt);
            homeRepository.save(home);

        }

        //TODO handle error codes

        return home;
    }

}
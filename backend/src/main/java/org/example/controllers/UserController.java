package org.example.controllers;

import org.example.dataaccess.TokenRepository;
import org.example.dataaccess.UserRepository;
import org.example.pojos.Core.LoginToken;
import org.example.pojos.Core.User;
import org.example.pojos.Core.User.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.time.LocalDate;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(path = RESTNouns.USER)
public class UserController {
    @Autowired private UserRepository userRepository;
    @Autowired private TokenRepository tokenRepository;

    /**
     * Post mapping for Login token
     */
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/login")
    public UUID createAuthToken(@RequestParam String email, @RequestParam String password) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        User user = userRepository.getUserByEmail(email);
        if (user == null || !encoder.matches(password, user.getPassword())) {
            return null; 
        }
        LoginToken loginToken = new LoginToken();

        loginToken.setTokenOwner(user);
        tokenRepository.save(loginToken);

        return loginToken.getToken();
    }

    /**
     * Get Mapping for all users
     */
    @GetMapping(RESTNouns.TOKEN + "/allusers")
    public Iterable<User> getAllUsers(@PathVariable("token") UUID token) {
        if (tokenRepository.Token(token).getTokenOwner().getRole() != Role.REPRESENTATIVE) {
            return null;
        }
        else {
        return userRepository.findAll();
        }
        
    }

    /**
     * Get for a user
     * @param userId
     * @return
     */
    @GetMapping("/getuser" + RESTNouns.ID)
    public @ResponseBody Optional<User> getUser(@PathVariable("id") Long userId) {
        return userRepository.findById(userId);
    }

    /**
     * Post Mapping for a new customers
     * @param name name
     * @param email email
     * @return
     */
    @PostMapping("/register")
    public HttpStatus createCustomer(
            @ModelAttribute User user) {
                user.setRole(User.Role.CUSTOMER);
                userRepository.save(user);
        return HttpStatus.CREATED;
    }

    /**
     * Delete Mapping for a user by ID
     * @param userId The ID of the user to delete
     * @return A response indicating success or failure
     */
    @DeleteMapping(path = RESTNouns.TOKEN)
    public @ResponseBody String deleteUser(@PathVariable("id") Long userId) {
        if (userRepository.existsById(userId)) {
            userRepository.deleteById(userId);
            return "User with ID " + userId + " deleted successfully.";
        } else {
            return "User with ID " + userId + " not found.";
        }
    }

    /**
     * Put mapping for user
     * @param userId
     * @param name
     * @param email
     * @return
     */
    @PutMapping(path = RESTNouns.USER + RESTNouns.ID)
    public @ResponseBody String updateUser(
            @PathVariable("id") Long userId, @RequestParam String name, @RequestParam String email){
        if (userRepository.existsById(userId)) {
            Optional<User> user = userRepository.findById(userId);
            if(user.isPresent()){
                user.get().setUsername(name);
                user.get().setEmail(email);
            }
            userRepository.save(user.get());
            return "User with ID " + userId + " updated successfully.";
        } else {
            return "User with ID " + userId + " not found.";
        }

    }
}
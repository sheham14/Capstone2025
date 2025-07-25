package org.example.controllers;

import org.example.dataaccess.AutoPoliciesRepository;
import org.example.dataaccess.HomePoliciesRepository;
import org.example.dataaccess.TokenRepository;
import org.example.dataaccess.UserRepository;
import org.example.pojos.Home.HomeInsurance;
import org.example.pojos.Responses.UserPoliciesResponse;
import org.example.pojos.Auto.AutoInsurance;
import org.example.pojos.Core.User;
import org.example.pojos.Core.Policy.POLICYVIEWINGTYPE;
import org.example.pojos.Core.User.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

/**
 * The main controller for this application. Controllers can be split by the base URL in the request mapping
 */
@RestController
@CrossOrigin(origins = {"http://localhost:3000", "https://main.dojq4677oq2fu.amplifyapp.com"})
@RequestMapping(path = RESTNouns.TOKEN)
public class MainController {

    @Autowired private TokenRepository tokenRepository;
    @Autowired private HomePoliciesRepository homePoliciesRepository;
    @Autowired private AutoPoliciesRepository autoPoliciesRepository;
    @Autowired private UserRepository userRepository;

    /**
     * Post mapping for a new home insurance policy
     * @param token the UUID for the logged in user
     * @param policy the HomeInsurance object provided by the form data
     * @return HTTP status depending on the success of the request
     */
    @PostMapping("/homepolicy")
    public HttpStatus addHomeInsurance(@PathVariable("token") UUID token, @ModelAttribute HomeInsurance policy ) {
        HomeInsurance homeInsurancePolicy = policy;
        homeInsurancePolicy.setPolicyOwner(tokenRepository.Token(token).getTokenOwner());
        homeInsurancePolicy.setViewingType(POLICYVIEWINGTYPE.POLICY);
        homePoliciesRepository.save(homeInsurancePolicy);
        return HttpStatus.CREATED;
    }

        /**
     * Post mapping for a new home insurance quote
     * @param token the UUID for the logged in user
     * @param policy the HomeInsurance object provided by the form data
     * @return HTTP status depending on the success of the request
     */
    @PostMapping("/homequote")
    public HomeInsurance addHomeInsuranceQuote(@PathVariable("token") UUID token, @ModelAttribute HomeInsurance policy ) {
        HomeInsurance homeInsurancePolicy = policy;
        homeInsurancePolicy.setPolicyOwner(tokenRepository.Token(token).getTokenOwner());
        homeInsurancePolicy.setViewingType(POLICYVIEWINGTYPE.QUOTE);
        return homePoliciesRepository.save(homeInsurancePolicy);
    }

    @PostMapping("/autoquote")
    public AutoInsurance addAutoInsuranceQuote(@PathVariable("token") UUID token, @ModelAttribute AutoInsurance policy ) {
        AutoInsurance autoInsurancePolicy = policy;
        autoInsurancePolicy.setPolicyOwner(tokenRepository.Token(token).getTokenOwner());
        autoInsurancePolicy.setViewingType(POLICYVIEWINGTYPE.QUOTE);
        return autoPoliciesRepository.save(autoInsurancePolicy);
    }

    @PostMapping("/homequotebyId" + RESTNouns.ID)
    public HomeInsurance addHomeInsuranceQuotebyId(@PathVariable("id") Integer userId, @ModelAttribute HomeInsurance policy ) {
        HomeInsurance homeInsurancePolicy = policy;
        homeInsurancePolicy.setPolicyOwner(userRepository.getUserById(userId));
        homeInsurancePolicy.setViewingType(POLICYVIEWINGTYPE.QUOTE);
        return homePoliciesRepository.save(homeInsurancePolicy);
    }

    @PostMapping("/autoquotebyId" + RESTNouns.ID)
    public AutoInsurance addAutoInsuranceQuotebyId(@PathVariable("id") Integer userId, @ModelAttribute AutoInsurance policy ) {
        AutoInsurance autoInsurancePolicy = policy;
        autoInsurancePolicy.setPolicyOwner(userRepository.getUserById(userId));
        autoInsurancePolicy.setViewingType(POLICYVIEWINGTYPE.QUOTE);
        return autoPoliciesRepository.save(autoInsurancePolicy);
    }

    @PostMapping("/autopolicy")
    public AutoInsurance addAutoInsurance(@PathVariable("token") UUID token, @ModelAttribute AutoInsurance policy ) {
        AutoInsurance autoInsurancePolicy = policy;
        autoInsurancePolicy.setPolicyOwner(tokenRepository.Token(token).getTokenOwner());
        autoInsurancePolicy.setViewingType(POLICYVIEWINGTYPE.POLICY);
        return autoPoliciesRepository.save(autoInsurancePolicy);
    }

    @GetMapping("/alluserpolicies")
    public UserPoliciesResponse getAllPoliciesByUser(@PathVariable("token") UUID token) {
        User user = tokenRepository.Token(token).getTokenOwner();
        Iterable<HomeInsurance> homePolicies = homePoliciesRepository.findBypolicyOwner(user);
        Iterable<AutoInsurance> autoPolicies = autoPoliciesRepository.findBypolicyOwner(user);
        UserPoliciesResponse allPoliciesResponse = new UserPoliciesResponse(homePolicies, autoPolicies);
        return allPoliciesResponse;
    }

    @GetMapping("/alluserautopolicies")
    public Iterable<AutoInsurance> getAllAutoPoliciesByUser(@PathVariable("token") UUID token) {
        User user = tokenRepository.Token(token).getTokenOwner();
        Iterable<AutoInsurance> autoPolicies = autoPoliciesRepository.findBypolicyOwner(user);
        return autoPolicies;
    }

    @GetMapping("/alluserautopoliciesbyid" + RESTNouns.ID)
    public Iterable <AutoInsurance> getAllAutoPoliciesByUserid(@PathVariable("id") Integer userId) {
        User user = userRepository.getUserById(userId);
        Iterable<AutoInsurance> autoPolicies = autoPoliciesRepository.findBypolicyOwner(user);
        return autoPolicies;
    }

    @GetMapping("/alluserhomepolicies")
    public Iterable <HomeInsurance> getAllHomePoliciesByUser(@PathVariable("token") UUID token) {
        User user = tokenRepository.Token(token).getTokenOwner();
        Iterable<HomeInsurance> homePolicies = homePoliciesRepository.findBypolicyOwner(user);
        return homePolicies;
    }

    @GetMapping("/alluserhomepoliciesbyid" + RESTNouns.ID)
    public Iterable <HomeInsurance> getAllHomePoliciesByUserid(@PathVariable("id") Integer userId) {
        User user = userRepository.getUserById(userId);
        Iterable<HomeInsurance> homePolicies = homePoliciesRepository.findBypolicyOwner(user);
        return homePolicies;
    }

    @GetMapping("/alluserpoliciesbyid" + RESTNouns.ID)
    public UserPoliciesResponse getAllPoliciesByUserid(@PathVariable("id") Integer userId) {
        User user = userRepository.getUserById(userId);
        Iterable<HomeInsurance> homePolicies = homePoliciesRepository.findBypolicyOwner(user);
        Iterable<AutoInsurance> autoPolicies = autoPoliciesRepository.findBypolicyOwner(user);
        UserPoliciesResponse allPoliciesResponse = new UserPoliciesResponse(homePolicies, autoPolicies);
        return allPoliciesResponse;
    }

    @GetMapping("/allhomepolicies")
    public Iterable<HomeInsurance> getAllHomePolicies(@PathVariable("token") UUID token) {

  
        Iterable<HomeInsurance> homePolicies = homePoliciesRepository.findAll();
        return homePolicies;
        
        
    }

    @GetMapping("/allautopolicies")
    public Iterable<AutoInsurance> getAllAutoPolicies(@PathVariable("token") UUID token) {

        Iterable<AutoInsurance> autoPolicies = autoPoliciesRepository.findAll();
        return autoPolicies;
    
        
    }

    @GetMapping("/allpolicies")
    public UserPoliciesResponse getAllActivePolicies(@PathVariable("token") UUID token) {
        Iterable<HomeInsurance> homePolicies = homePoliciesRepository.findAll();
        Iterable<AutoInsurance> autoPolicies = autoPoliciesRepository.findAll();
        UserPoliciesResponse allPoliciesResponse = new UserPoliciesResponse(homePolicies, autoPolicies);
        return allPoliciesResponse;
        
        
    }
    
}
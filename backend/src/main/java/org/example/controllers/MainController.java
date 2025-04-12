package org.example.controllers;

import org.example.dataaccess.HomePoliciesRepository;
import org.example.dataaccess.TokenRepository;
import org.example.pojos.Home.Home;
import org.example.pojos.Home.HomeInsurance;
import org.example.pojos.Core.LoginToken;
import org.example.pojos.Core.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Optional;
import java.util.UUID;

/**
 * The main controller for this application. Controllers can be split by the base URL in the request mapping
 */
@Controller
@RequestMapping(path = RESTNouns.TOKEN)
public class MainController {

    @Autowired private TokenRepository tokenRepository;
    @Autowired private HomePoliciesRepository homePoliciesRepository;

    @PostMapping("/HomePolicy")
    public @ResponseBody HomeInsurance addHomeInsurance(@PathVariable("token") UUID token, @ModelAttribute HomeInsurance policy ) {
        HomeInsurance homeInsurancePolicy = policy;
        homeInsurancePolicy.setPolicyOwner(tokenRepository.Token(token).getTokenOwner());
        return homePoliciesRepository.save(homeInsurancePolicy);
    }

}
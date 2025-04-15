package org.example.controllers;

import java.util.Optional;

import org.example.dataaccess.HomePoliciesRepository;
import org.example.pojos.Core.User;
import org.example.pojos.Core.Policy.POLICYVIEWINGTYPE;
import org.example.pojos.Home.HomeInsurance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = RESTNouns.TOKEN + RESTNouns.ID)
public class HomePolicyController {
    @Autowired
    private HomePoliciesRepository homePoliciesRepository;

    /**
     * Get for a homeIsnurance
     * 
     * @param userId
     * @return
     */
    @GetMapping("/getHomePolicy")
    public @ResponseBody Optional<HomeInsurance> getUser(@PathVariable("id") Integer policyId) {
        return homePoliciesRepository.findById(policyId);
    }

    /**
     * Put mapping for user
     * 
     * @param userId
     * @param name
     * @param email
     * @return
     */
    @PutMapping("/updatehomepolicyhome")
    public @ResponseBody HttpStatus updateUser(
            @PathVariable("id") Integer policyId, @ModelAttribute HomeInsurance homeInsurance) {
        if (homePoliciesRepository.existsById(policyId)) {
            Optional<HomeInsurance> homePolicy = homePoliciesRepository.findById(policyId);
            if (homePolicy.isPresent()) {
                homePolicy.get().setInsuredHome(homeInsurance.getInsuredHome());
            }
            homePoliciesRepository.save(homePolicy.get());
            return HttpStatus.ACCEPTED;
        } else {
            return HttpStatus.CONFLICT;
        }
    }

    @PutMapping("createhomepolicyfromquote")
    public @ResponseBody HttpStatus createPolicyFromQuote(
            @PathVariable("id") Integer policyId) {
        if (homePoliciesRepository.existsById(policyId)) {
            Optional<HomeInsurance> homePolicy = homePoliciesRepository.findById(policyId);
            if (homePolicy.isPresent()) {
                homePolicy.get().setViewingType(POLICYVIEWINGTYPE.POLICY);
            }
            homePoliciesRepository.save(homePolicy.get());
            return HttpStatus.ACCEPTED;
        } else {
            return HttpStatus.CONFLICT;
        }

    }

    @PutMapping("cancelhomepolicy")
        public @ResponseBody HttpStatus cancelPolicy(
            @PathVariable("id") Integer policyId){
        if (homePoliciesRepository.existsById(policyId)) {
            Optional<HomeInsurance> homePolicy = homePoliciesRepository.findById(policyId);
            if(homePolicy.isPresent()){
            homePolicy.get().setActiveStatus(false);
            }
            homePoliciesRepository.save(homePolicy.get());
            
        return HttpStatus.ACCEPTED;
        }else {
            return HttpStatus.CONFLICT;
        }

}
}
package org.example.controllers;

import java.time.LocalDate;
import java.util.Optional;

import org.example.dataaccess.HomePoliciesRepository;
import org.example.pojos.Core.Policy.POLICYVIEWINGTYPE;
import org.example.pojos.Home.HomeInsurance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
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
    public @ResponseBody HttpStatus updateinsuredhome(
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

    @PutMapping("/renewhomepolicy")
    public @ResponseBody HttpStatus renewPolicy(
        @PathVariable("id") Integer policyId){
            if (homePoliciesRepository.existsById(policyId)) {
                Optional<HomeInsurance> homePolicy = homePoliciesRepository.findById(policyId);
                if (homePolicy.isPresent()) {
                    LocalDate newEnddate = homePolicy.get().getEndDate().plusYears(1);
                    homePolicy.get().setEndDate(newEnddate);
                }
                homePoliciesRepository.save(homePolicy.get());
                
            return HttpStatus.ACCEPTED;
            }else {
                return HttpStatus.CONFLICT;
            }
    
    }

    @PutMapping("/createhomepolicyfromquote")
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

    @PutMapping("/cancelhomepolicy")
        public @ResponseBody HttpStatus cancelPolicy(
            @PathVariable("id") Integer policyId){
        if (homePoliciesRepository.existsById(policyId)) {
            Optional<HomeInsurance> homePolicy = homePoliciesRepository.findById(policyId);
            if (homePolicy.isPresent()) {
                homePolicy.get().setActiveStatus(false);
            }
            homePoliciesRepository.save(homePolicy.get());
            
        return HttpStatus.ACCEPTED;
        }else {
            return HttpStatus.CONFLICT;
        }

}

@PutMapping("/activatehomepolicy")
public @ResponseBody HttpStatus acticatepolicy(
    @PathVariable("id") Integer policyId){
if (homePoliciesRepository.existsById(policyId)) {
    Optional<HomeInsurance> homePolicy = homePoliciesRepository.findById(policyId);
    if (homePolicy.isPresent()) {
        homePolicy.get().setActiveStatus(true);
    }
    homePoliciesRepository.save(homePolicy.get());
    
return HttpStatus.ACCEPTED;
}else {
    return HttpStatus.CONFLICT;
}

}
}
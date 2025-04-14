package org.example.controllers;

import java.util.Optional;

import org.example.dataaccess.AutoPoliciesRepository;
import org.example.dataaccess.AutoPoliciesRepository;
import org.example.pojos.Auto.AutoInsurance;
import org.example.pojos.Core.User;
import org.example.pojos.Core.Policy.POLICYVIEWINGTYPE;
import org.example.pojos.Auto.AutoInsurance;
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
public class AutoPolicyController {
    @Autowired
    private AutoPoliciesRepository autoPoliciesRepository;

    /**
     * Get for a autoIsnurance
     * 
     * @param userId
     * @return
     */
    @GetMapping("/getAutoPolicy")
    public @ResponseBody Optional<AutoInsurance> getUser(@PathVariable("id") Integer policyId) {
        return autoPoliciesRepository.findById(policyId);
    }

    /**
     * Put mapping for user
     * 
     * @param userId
     * @param name
     * @param email
     * @return
     */
    @PutMapping("/updateautopolicyauto")
    public @ResponseBody HttpStatus updateUser(
            @PathVariable("id") Integer policyId, @ModelAttribute AutoInsurance autoInsurance) {
        if (autoPoliciesRepository.existsById(policyId)) {
            Optional<AutoInsurance> autoPolicy = autoPoliciesRepository.findById(policyId);
            if (autoPolicy.isPresent()) {
                autoPolicy.get().setInsuredAutomobile(autoInsurance.getInsuredAutomobile());
            }
            autoPoliciesRepository.save(autoPolicy.get());
            return HttpStatus.ACCEPTED;
        } else {
            return HttpStatus.CONFLICT;
        }
    }

    @PutMapping("/createautopolicyfromquote")
    public @ResponseBody HttpStatus createPolicyFromQuote(
            @PathVariable("id") Integer policyId) {
        if (autoPoliciesRepository.existsById(policyId)) {
            Optional<AutoInsurance> autoPolicy = autoPoliciesRepository.findById(policyId);
            if (autoPolicy.isPresent()) {
                autoPolicy.get().setViewingType(POLICYVIEWINGTYPE.POLICY);
            }
            autoPoliciesRepository.save(autoPolicy.get());
            return HttpStatus.ACCEPTED;
        } else {
            return HttpStatus.CONFLICT;
        }

    }

    @PutMapping("/cancelautopolicy")
        public @ResponseBody HttpStatus cancelPolicy(
            @PathVariable("id") Integer policyId){
        if (autoPoliciesRepository.existsById(policyId)) {
            Optional<AutoInsurance> autoPolicy = autoPoliciesRepository.findById(policyId);
            if(autoPolicy.isPresent()){
            autoPolicy.get().setActiveStatus(false);
            }
            autoPoliciesRepository.save(autoPolicy.get());
            
        return HttpStatus.ACCEPTED;
        }else {
            return HttpStatus.CONFLICT;
        }

}
}
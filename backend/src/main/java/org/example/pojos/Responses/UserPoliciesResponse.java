package org.example.pojos.Responses;

import org.example.pojos.Auto.AutoInsurance;
import org.example.pojos.Home.HomeInsurance;

public class UserPoliciesResponse {
    private Iterable<HomeInsurance> homePolicies;
    private Iterable<AutoInsurance> autoPolicies;

    public UserPoliciesResponse(Iterable<HomeInsurance> homePolicies, Iterable<AutoInsurance> autoPolicies) {
        this.homePolicies = homePolicies;
        this.autoPolicies = autoPolicies;
    }

    public Iterable<HomeInsurance> getHomePolicies() {
        return homePolicies;
    }

    public Iterable<AutoInsurance> getAutoPolicies() {
        return autoPolicies;
    }

    public void setHomePolicies(Iterable<HomeInsurance> homePolicies) {
        this.homePolicies = homePolicies;
    }

    public void setAutoPolicies(Iterable<AutoInsurance> autoPolicies) {
        this.autoPolicies = autoPolicies;
    }
}

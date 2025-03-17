package Home;

import java.time.LocalDate;

import Core.Policy;
import User.Customer;

public class HomeInsurance extends Policy {
    private Home insuredHome;
    private boolean hasAutoPolicyDiscount;

    public HomeInsurance(String policyId,
                        Customer insuredPerson,
                        LocalDate startDate,
                        double basePremium,
                        double taxRate,
                        Home insuredHome, 
                        boolean hasAutoPolicyDiscount, 
                        double totalPremium) {
        super(policyId, insuredPerson, startDate, basePremium, taxRate);
        this.insuredHome = insuredHome;
        this.hasAutoPolicyDiscount = hasAutoPolicyDiscount;
        setTotalPremium(totalPremium);
    }

    public Home getHome() {
        return this.insuredHome;
    }

    public boolean hasAutoPolicyDiscount() {
        return hasAutoPolicyDiscount;
    }

    public void setHasAutoPolicyDiscount(boolean hasAutoPolicyDiscount) {
        this.hasAutoPolicyDiscount = hasAutoPolicyDiscount;
    }
}

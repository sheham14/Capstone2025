import java.util.ArrayList;
import java.util.List;

public class Customer extends User {
    private List<Policy> policies;

    public Customer(String username) {
        super(username);
        this.policies = new ArrayList<>();
    }

    @Override
    public String getRole() {
        return "Customer";
    }

    public List<Policy> getPolicies() {
        return policies;
    }

    public void addPolicy(Policy policy) {
        this.policies.add(policy);
    }

    public void printPolicies() {
        System.out.println(getUsername() + "'s Policies");
        System.out.println("________");
        for (Policy policy : policies) {
            System.out.println("Policy ID: " + policy.getPolicyId());
            System.out.println("Start Date: " + policy.getStartDate());
            System.out.println("End Date: " + policy.getEndDate());
            System.out.println("Base Premium: $" + policy.getBasePremium());
            System.out.println("Tax Rate: " + policy.getTaxRate());
            System.out.println("Total Premium: $" + policy.getTotalPremium());

            if (policy instanceof AutoInsurance) {
                AutoInsurance autoPolicy = (AutoInsurance) policy;
                System.out.println("Type: Auto Insurance");
                System.out.println("Driver Age: " + autoPolicy.getDriverAge());
                System.out.println("Accidents: " + autoPolicy.getAccidents());
                System.out.println("Address: " + autoPolicy.getAddress());
                System.out.println("Vehicle Make: " + autoPolicy.getVehicleMake());
                System.out.println("Vehicle Model: " + autoPolicy.getVehicleModel());
                System.out.println("Vehicle Year: " + autoPolicy.getVehicleYear());
                System.out.println("Home Policy Discount: " + autoPolicy.isHasHomePolicyDiscount());
            } else if (policy instanceof HomeInsurance) {
                HomeInsurance homePolicy = (HomeInsurance) policy;
                System.out.println("Type: Home Insurance");
                System.out.println("Age Built: " + homePolicy.getAgeBuilt());
                System.out.println("Dwelling Type: " + homePolicy.getDwellingType());
                System.out.println("Heating Type: " + homePolicy.getHeatingType());
                System.out.println("Location: " + homePolicy.getLocation());
                System.out.println("Home Value: $" + homePolicy.getHomeValue());
                System.out.println("Liability Limit: " + homePolicy.getLiabilityLimit());
                System.out.println("Auto Policy Discount: " + homePolicy.isHasAutoPolicyDiscount());
            }

            System.out.println("-----------------------------");
        }
    }
}
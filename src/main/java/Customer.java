import java.util.ArrayList;
import java.util.List;

public class Customer extends User {
    private int age;
    private List<Policy> policies = new ArrayList<>();
    private List<Quote> quotes = new ArrayList<>();

    public Customer(String username) {
        super(username);
        this.age = age;
    }

    public int getAge() {
        return age;
    }

    @Override
    public String getRole() {
        return "Customer";
    }

    public void printQuotes() {
        System.out.println(getUsername() + "'s Quotes");
        System.out.println("________");
        if (quotes.isEmpty()) {
            System.out.println("No quotes available.");
            return;
        }

        for (Quote quote : quotes) {
            System.out.println("Quote ID: " + quote.getQuoteId());
            System.out.println("Start Date: " + quote.getStartDate());
            System.out.println("Base Premium: $" + quote.getBasePremium());
            System.out.println("Tax Rate: " + quote.getTaxRate());
            System.out.println("Total Premium: $" + String.format("%.2f", quote.getTotalPremium()));

            if (quote instanceof AutoQuote) {
                AutoQuote autoQuote = (AutoQuote) quote;
                System.out.println("Type: Auto Insurance Quote");
                System.out.println("Driver Age: " + autoQuote.getDriverAge());
                System.out.println("Accidents: " + autoQuote.getAccidents());
                System.out.println("Vehicle Make: " + autoQuote.getVehicleMake());
                System.out.println("Vehicle Model: " + autoQuote.getVehicleModel());
                System.out.println("Vehicle Year: " + autoQuote.getVehicleYear());
                System.out.println("Home Policy Discount: " + autoQuote.hasHomePolicyDiscount());
            } else if (quote instanceof HomeQuote) {
                HomeQuote homeQuote = (HomeQuote) quote;
                System.out.println("Type: Home Insurance Quote");
                System.out.println("Year Built: " + homeQuote.getYearBuilt());
                System.out.println("Dwelling Type: " + homeQuote.getDwellingType());
                System.out.println("Heating Type: " + homeQuote.getHeatingType());
                System.out.println("Location: " + homeQuote.getLocation());
                System.out.println("Home Value: $" + homeQuote.getHomeValue());
                System.out.println("Liability Limit: " + homeQuote.getLiabilityLimit());
                System.out.println("Auto Policy Discount: " + homeQuote.hasAutoPolicyDiscount());
            }

            System.out.println("-----------------------------");
        }
    }


    void addPolicy(Policy policy) {
        if (!policies.contains(policy)) {
            policies.add(policy);
        } else {
            System.out.println("Duplicate policy detected: " + policy.getPolicyId());
        }
    }


    public List<Quote> getQuotes() {
        return quotes;
    }

    public boolean removeQuote(String quoteId) {
        for (Quote q : quotes) {
            if (q.getQuoteId().equals(quoteId)) {
                quotes.remove(q);
                return true;
            }
        }
        return false;
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
            System.out.println("Total Premium: $" + String.format("%.2f", policy.getTotalPremium()));

            if (policy instanceof AutoInsurance) {
                AutoInsurance autoPolicy = (AutoInsurance) policy;
                System.out.println("Type: Auto Insurance");
                System.out.println("Driver Age: " + autoPolicy.getDriverAge());
                System.out.println("Accidents: " + autoPolicy.getAccidents());
                System.out.println("Vehicle Make: " + autoPolicy.getVehicleMake());
                System.out.println("Vehicle Model: " + autoPolicy.getVehicleModel());
                System.out.println("Vehicle Year: " + autoPolicy.getVehicleYear());
                System.out.println("Home Policy Discount: " + autoPolicy.isHasHomePolicyDiscount());
            } else if (policy instanceof HomeInsurance) {
                HomeInsurance homePolicy = (HomeInsurance) policy;
                System.out.println("Type: Home Insurance");
                System.out.println("Age Built: " + homePolicy.getYearBuilt());
                System.out.println("Dwelling Type: " + homePolicy.getDwellingType());
                System.out.println("Heating Type: " + homePolicy.getHeatingType());
                System.out.println("Location: " + homePolicy.getLocation());
                System.out.println("Home Value: $" + homePolicy.getHomeValue());
                System.out.println("Liability Limit: " + homePolicy.getLiabilityLimit());
                System.out.println("Auto Policy Discount: " + homePolicy.hasAutoPolicyDiscount());
            }

            System.out.println("-----------------------------");
        }
    }

    public void addQuote(Quote quote) {
        if (!quotes.contains(quote)) {
            quotes.add(quote);
        } else {
            System.out.println("Duplicate quote detected: " + quote.getQuoteId());
        }
    }

}
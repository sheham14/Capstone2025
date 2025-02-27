import java.time.LocalDate;
import java.util.Iterator;

public class Representative extends User {
    public Representative(String username) {
        super(username);
    }

    public void convertQuoteToPolicy(Customer customer, String quoteId) {
        Iterator<Quote> iterator = customer.getQuotes().iterator();
        Quote selectedQuote = null;

        while (iterator.hasNext()) {
            Quote quote = iterator.next();
            if (quote.getQuoteId().equals(quoteId)) {
                selectedQuote = quote;
                iterator.remove();
                break;
            }
        }

        if (selectedQuote != null) {
            Policy policy = createPolicyFromQuote(selectedQuote);
            if (policy != null) {
                System.out.println("Converted Quote ID: " + quoteId + " to Policy ID: " + policy.getPolicyId());
            }
        } else {
            System.out.println("Quote ID " + quoteId + " not found or already converted.");
        }
    }

    private Policy createPolicyFromQuote(Quote quote) {
        LocalDate policyStart = LocalDate.now();

        if (quote instanceof AutoQuote autoQuote) {
            return new AutoInsurance(
                    "AUTO-" + autoQuote.getQuoteId(),
                    autoQuote.getInsuredPerson(),
                    policyStart,
                    autoQuote.getBasePremium(),
                    autoQuote.getTaxRate(),
                    autoQuote.getDriverAge(),
                    autoQuote.getAccidents(),
                    autoQuote.getVehicleMake(),
                    autoQuote.getVehicleModel(),
                    autoQuote.getVehicleYear(),
                    autoQuote.hasHomePolicyDiscount(),
                    autoQuote.getTotalPremium()
            );
        } else if (quote instanceof HomeQuote homeQuote) {
            return new HomeInsurance(
                    "HOME-" + homeQuote.getQuoteId(),
                    homeQuote.getInsuredPerson(),
                    policyStart,
                    homeQuote.getBasePremium(),
                    homeQuote.getTaxRate(),
                    homeQuote.getYearBuilt(),
                    homeQuote.getDwellingType(),
                    homeQuote.getHeatingType(),
                    homeQuote.getLocation(),
                    homeQuote.getHomeValue(),
                    homeQuote.getLiabilityLimit(),
                    homeQuote.hasAutoPolicyDiscount(),
                    homeQuote.getTotalPremium()
            );
        }

        return null;
    }



    @Override
    public String getRole() {
        return "Representative";
    }
}

package org.example.pojos.User;
import java.util.Iterator;

import org.example.pojos.Core.Policy;
import org.example.pojos.Core.Quote;
import org.example.pojos.Core.User;

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
        return null;
    }



    @Override
    public String getRole() {
        return "Representative";
    }
}

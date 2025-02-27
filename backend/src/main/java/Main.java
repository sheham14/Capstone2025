import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        Representative rep = new Representative("Jimmy John");
        Customer customer1 = new Customer("Squilliam William");
        Customer customer2 = new Customer("SpongeBob SquarePants");

        // Creating Home Quotes
        HomeQuote homeQuote1 = new HomeQuote("HOME1", customer1, LocalDate.now(), 500.0, 1.15,
                1980, "standalone", "oil", "rural", 350000, 2000000, false);

        HomeQuote homeQuote2 = new HomeQuote("HOME2", customer2, LocalDate.now(), 500.0, 1.15,
                2010, "bungalow", "gas", "urban", 275000, 1000000, true);



        // Creating Quotes
        AutoQuote autoQuote1 = new AutoQuote("AUTO1", customer1, LocalDate.now(), 750.0, 1.15, customer1.getAge(), 2, "Toyota", "Corolla", 2018, true);
        AutoQuote autoQuote2 = new AutoQuote("AUTO2", customer1, LocalDate.now(), 750.0, 1.15, customer1.getAge(), 0, "Honda", "Civic", 2020, false);
        AutoQuote autoQuote3 = new AutoQuote("AUTO3", customer2, LocalDate.now(), 750.0, 1.15, customer2.getAge(), 1, "Ford", "F-150", 2015, true);


        // Print initial quotes
        System.out.println("=== Creating Quotes ===");
        customer1.printQuotes();
        customer2.printQuotes();

        System.out.println("\n=== Converting Quotes to Policies ===");
        rep.convertQuoteToPolicy(customer1, "HOME1");
        rep.convertQuoteToPolicy(customer2, "HOME2");
        rep.convertQuoteToPolicy(customer1, "AUTO1");
        rep.convertQuoteToPolicy(customer1, "AUTO2");
        rep.convertQuoteToPolicy(customer2, "AUTO3");

        // Print policies after conversion
        System.out.println("\n=== Customer Policies After Conversion ===");
        customer1.printPolicies();
        customer2.printPolicies();
    }
}

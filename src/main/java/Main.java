import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        Customer customer = new Customer("Squilliam William");
        Representative rep = new Representative("Jimmy John");
        System.out.println(rep.getUsername());

        System.out.println("=== Auto Insurance Test Cases ===");

        AutoInsurance auto1 = new AutoInsurance("AUTO1", customer, LocalDate.now(), 750.0, 1.15,
                22, 2, "123 Main St", "Toyota", "Corolla", 2018, true);
        auto1.updatePremium();
        System.out.printf("Auto Insurance Premium (Test Case 1): $ %.2f%n", auto1.getTotalPremium());

        AutoInsurance auto2 = new AutoInsurance("AUTO2", customer, LocalDate.now(), 750.0, 1.15,
                35, 0, "456 Elm St", "Honda", "Civic", 2020, false);
        auto2.updatePremium();
        System.out.printf("Auto Insurance Premium (Test Case 2): $ %.2f%n", auto2.getTotalPremium());

        AutoInsurance auto3 = new AutoInsurance("AUTO3", customer, LocalDate.now(), 750.0, 1.15,
                55, 1, "789 Oak St", "Ford", "F-150", 2015, true);
        auto3.updatePremium();
        System.out.printf("Auto Insurance Premium (Test Case 3): $ %.2f%n", auto3.getTotalPremium());

        AutoInsurance auto4 = new AutoInsurance("AUTO4", customer, LocalDate.now(), 750.0, 1.15,
                22, 0, "123 Main St", "Toyota", "Corolla", LocalDate.now().getYear() - 1, false);
        auto4.updatePremium();
        System.out.printf("Auto Insurance Premium (Test Case 4 - Image): $ %.2f%n", auto4.getTotalPremium());

        System.out.println("\n=== Home Insurance Test Cases ===");

        HomeInsurance home1 = new HomeInsurance("HOME1", customer, LocalDate.now(), 500, 1.15,
                30, "standalone", "wood", "urban", 300000, "$1M", true);
        home1.updatePremium();
        System.out.printf("Home Insurance Premium (Test Case 1): $ %.2f%n", home1.getTotalPremium());

        HomeInsurance home2 = new HomeInsurance("HOME2", customer, LocalDate.now(), 500, 1.15,
                60, "bungalow", "oil", "rural", 500000, "$2M", false);
        home2.updatePremium();
        System.out.printf("Home Insurance Premium (Test Case 2): $ %.2f%n", home2.getTotalPremium());

        HomeInsurance home3 = new HomeInsurance("HOME3", customer, LocalDate.now(), 500, 1.15,
                20, "attached", "other", "urban", 200000, "$1M", true);
        System.out.printf("Home Insurance Premium (Test Case 3): $ %.2f%n", home3.getTotalPremium());

        HomeInsurance home4 = new HomeInsurance("HOME4", customer, LocalDate.now(), 500, 1.15,
                1, "standalone", "wood", "urban", 500000, "$1M", false);
        home4.updatePremium();
        System.out.printf("Home Insurance Premium (Test Case 4 - Image): $ %.2f%n", home4.getTotalPremium());
        System.out.println("\n");
        customer.printPolicies();
    }
}
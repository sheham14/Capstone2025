public class Representative extends User {
    /** At current moment Representative is not needed to demonstrate that the premium calculation is working correctly
     * and will need to be fully built and implemented later.
    */
    public Representative(String username) {
        super(username);
    }

    @Override
    public String getRole() {
        return "Representative";
    }
}

public abstract class User {
    private String username;

    public User(String username) {
        this.username = username;
    }

    // Getters and Setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    // Abstract method (optional, for future extensibility)
    public abstract String getRole();
}
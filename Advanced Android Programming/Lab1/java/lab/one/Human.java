package lab.one;

public class Human {
    public String publicName;
    private String privateName;

    public String getPrivateName() {
        return privateName;
    }

    public String getPublicName() {
        return publicName;
    }

    public void setPrivateName(String newName) {
        if (newName != null && newName.length() > 0){
            this.privateName = newName;
            System.out.println("Class Human setPrivateName");
        }
        else {
            throw new IllegalArgumentException();
        }
    }

}

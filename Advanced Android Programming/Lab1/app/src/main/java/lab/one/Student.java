package lab.one;

public class Student extends Human {

    @Override
    public void setPrivateName(String newName) {

        System.out.println("Class Student setPrivateName");
        super.setPrivateName(newName);
    }

}

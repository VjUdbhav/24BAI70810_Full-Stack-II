import java.util.Scanner;

class Employee {
    private String name;
    private double basicSalary;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getBasicSalary() {
        return basicSalary;
    }

    public void setBasicSalary(double basicSalary) {
        this.basicSalary = basicSalary;
    }

    public double calculateSalary() {
        return basicSalary;
    }
}

class PermanentEmployee extends Employee {
    @Override
    public double calculateSalary() {
        return getBasicSalary() + (0.20 * getBasicSalary());
    }
}

class ContractEmployee extends Employee {
    @Override
    public double calculateSalary() {
        return getBasicSalary() + (0.10 * getBasicSalary());
    }
}

public class EmployeeSalary {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of employees: ");
        int T = sc.nextInt();

        for (int i = 0; i < T; i++) {
            System.out.print("Enter employee type (P for Permanent, C for Contract): ");
            String employeeType = sc.next();
            System.out.print("Enter employee name: ");
            String name = sc.next();
            System.out.print("Enter basic salary: ");
            double salary = sc.nextDouble();

            Employee employee;

            if (employeeType.equalsIgnoreCase("P")) {
                employee = new PermanentEmployee();
            } else {
                employee = new ContractEmployee();
            }

            employee.setName(name);
            employee.setBasicSalary(salary);

            System.out.println("Employee: " + employee.getName());
            System.out.printf("Final Salary: %.2f%n", employee.calculateSalary());
        }

        sc.close();
    }
}

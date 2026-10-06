import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class connector {

    public static void main(String[] args) {

        String url = "jdbc:mysql://localhost:3306/St_Fs";
        String user = "udbhavvj";
        String password = "Udbhavvj2006";

        try {
            Connection con = DriverManager.getConnection(url, user, password);

            System.out.println("Connected to MySQL successfully!");

            con.close();
            System.out.println("Connection closed.");

        } catch (SQLException e) {
            System.out.println("Connection failed!");
            e.printStackTrace();
        }
    }
}
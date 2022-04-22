package project.Memebank.Model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "profile")
public class Profile{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Username must be given")
//    @Column(name = "userName", nullable = false, length = 10)
    private String userName;

    @NotBlank(message = "Email must be given")
//    @Column(name = "email", nullable = false, unique = true, length = 45)
    private String email;

    @NotBlank(message = "Password must be given")
//    @Column(name = "password", nullable = false, length = 64)
    private String password;



    public Profile(String userName, String email, String password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    public Profile() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

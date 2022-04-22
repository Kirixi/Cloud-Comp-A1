package project.Memebank;
import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;
import project.Memebank.Model.Profile;
import project.Memebank.Model.ProfileRepository;


@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class ProfileRepositoryTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private ProfileRepository repo;

    @Test
    public void testCreateUser() {
        Profile profile = new Profile();
        profile.setUserName("Kirin");
        profile.setEmail("kables@gmail.com");
        profile.setPassword("abc123");

        Profile profiletwo = new Profile();
        profiletwo.setUserName("Zemelon");
        profiletwo.setEmail("Zemelon@gmail.com");
        profiletwo.setPassword("abc31123");


        Profile savedProfile = repo.save(profile);
        Profile savedProfiletwo = repo.save(profiletwo);

        Profile existUser = entityManager.find(Profile.class, savedProfile.getId());

        assertThat(profile.getEmail()).isEqualTo(existUser.getEmail());

    }


}

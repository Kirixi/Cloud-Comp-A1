package project.Memebank;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;
import project.Memebank.Model.Post;
import project.Memebank.Model.PostRepository;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class PostRepositoryTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private PostRepository repo;


    @Test
    public void testCreateUser() {
        Post post = new Post();
        post.setTitle("Title");
        post.setLikes(100);
        post.setUser("Some");
        post.setUrl("");

        Post savedPost = repo.save(post);

        Post existPost = entityManager.find(Post.class, savedPost.getId());

        assertThat(post.getUser()).isEqualTo(existPost.getUser());

    }

}

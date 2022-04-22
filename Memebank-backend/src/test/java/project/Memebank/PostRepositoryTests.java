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

        post.setTitle("not the same");
        post.setLikes(1030);
        post.setUser("Somthings");
        post.setUrl("");

        Post savedPost = repo.save(post);

        Post existPost = entityManager.find(Post.class, savedPost.getId());

        assertThat(post.getUser()).isEqualTo(existPost.getUser());

    }

//    @Test
//    public void testCreateTwoPost() {
//        Post post = new Post();
//        Post post2 = new Post();
//
//        post.setTitle("This");
//        post.setLikes(170);
//        post.setUser("Some");
//        post.setUrl("");
//
//        post2.setTitle("Tile2");
//        post2.setLikes(130);
//        post2.setUser("SomeBoday");
//        post2.setUrl("https://source.unsplash.com/random/500x500?sig=3001");
//
//
//        Post savedPost = repo.save(post);
//        Post savedPost2 = repo.save(post2);
//
//        Post existPost = entityManager.find(Post.class, savedPost.getId());
//
//        assertThat(post.getUser()).isEqualTo(existPost.getUser());
//
//    }

}

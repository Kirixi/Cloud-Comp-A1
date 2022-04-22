package project.Memebank.Model;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long>{

    List<Post> findAllByOrderByLikesDesc(Pageable pageable);

    List<Post> findTopByUser(String user);
}

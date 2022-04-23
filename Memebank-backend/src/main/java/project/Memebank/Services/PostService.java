package project.Memebank.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import project.Memebank.Model.Post;
import project.Memebank.Model.PostRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepo;

    public List<Post> getAllPost(){
        return new ArrayList<>(postRepo.findAll());
    }

    public List<Post> getHotPost(){
        return new ArrayList<>(postRepo.findAllByOrderByLikesDesc(PageRequest.of(0,10)));
    }

    public List<Post> getUserPost(String user){
        return new ArrayList<>(postRepo.findTopByUser(user));
    }

    public Post savePost(Post post){
        return postRepo.save(post);
    }

    public Post updatePost(long id) throws Exception {
        Post post = postRepo.findById(id).orElseThrow(() -> new Exception("User not found on :: "+ id));
        post.setLikes(post.getLikes() + 1 );

        return postRepo.save(post);
    }

}

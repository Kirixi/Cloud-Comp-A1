package project.Memebank.web;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.Memebank.Model.Post;
import project.Memebank.Model.PostRepository;
import project.Memebank.Services.PostService;

import java.util.List;

@RestController
@RequestMapping("/api/post")
@CrossOrigin
public class PostController {

    @Autowired
    private PostRepository postRepo;

    @Autowired
    private PostService postService;


    @GetMapping("/getPost")
    public ResponseEntity<?> getTopTenPost(){

        List<Post> posts = postService.getHotPost();
        if(posts.size() > 0){
            return new ResponseEntity<>(posts, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(posts, HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("/userPost")
    public ResponseEntity<?> getUserPost(String user){
        List<Post> posts = postService.getUserPost(user);
        if(posts.size() > 0){
            return new ResponseEntity<>(posts, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(posts, HttpStatus.NO_CONTENT);
        }

    }

    @PostMapping("/CreatePost")
    public ResponseEntity<?> createPost(@RequestBody Post post){
        Post savedPost = postService.savePost(post);
        return new ResponseEntity<>(savedPost, HttpStatus.CREATED);
    }

    @PutMapping("/LikePost/{id}")
    public ResponseEntity<?> likePost(@PathVariable Long id) throws Exception {

        try{
            Post upadtePost = postService.updatePost(id);
            return new ResponseEntity<>(upadtePost, HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }
}

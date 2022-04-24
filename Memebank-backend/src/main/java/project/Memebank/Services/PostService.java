package project.Memebank.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import project.Memebank.Model.Post;
import project.Memebank.Model.PostRepository;
import project.Memebank.config.BucketName;

import java.io.IOException;
import java.util.*;

import static org.apache.http.entity.ContentType.*;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepo;

    @Autowired
    private FileStore fileStore;

    public PostService(FileStore fileStore) {
        this.fileStore = fileStore;
    }

    public List<Post> getAllPost(){
        return new ArrayList<>(postRepo.findAll());
    }

    public List<Post> getHotPost(){
        return new ArrayList<>(postRepo.findAllByOrderByLikesDesc(PageRequest.of(0,10)));
    }

    public List<Post> getUserPost(String user){
        return new ArrayList<>(postRepo.findTopByUser(user));
    }

    public Post savePost(String title, String user, MultipartFile file){
        if (file.isEmpty()) {
            throw new IllegalStateException("Cannot upload empty file");
        }
        //Check if the file is an image
        if (!Arrays.asList(IMAGE_PNG.getMimeType(),
                IMAGE_BMP.getMimeType(),
                IMAGE_GIF.getMimeType(),
                IMAGE_JPEG.getMimeType()).contains(file.getContentType())) {
            throw new IllegalStateException("FIle uploaded is not an image");
        }
        //get file metadata
        Map<String, String> metadata = new HashMap<>();
        metadata.put("Content-Type", file.getContentType());
        metadata.put("Content-Length", String.valueOf(file.getSize()));
        //Save Image in S3 and then save Todo in the database
        String UId = UUID.randomUUID().toString();
        String path = String.format("%s/%s", BucketName.TODO_IMAGE.getBucketName(), UId);
        String fileName = String.format("%s", file.getOriginalFilename());
        try {
            fileStore.upload(path, fileName, Optional.of(metadata), file.getInputStream());
        } catch (IOException e) {
            throw new IllegalStateException("Failed to upload file", e);
        }

        Post post = new Post();
        post.setUser(user);
        post.setTitle(title);
        String url = String.format("https://memebank-bucket.s3.amazonaws.com/%s/%s", UId, fileName);
        post.setUrl(url);
        post.setLikes(0);

        return postRepo.save(post);
    }

    public Post updatePost(long id) throws Exception {
        Post post = postRepo.findById(id).orElseThrow(() -> new Exception("User not found on :: "+ id));
        post.setLikes(post.getLikes() + 1 );

        return postRepo.save(post);
    }

}

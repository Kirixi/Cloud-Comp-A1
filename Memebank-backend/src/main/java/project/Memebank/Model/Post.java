package project.Memebank.Model;

import javax.persistence.*;

@Entity
@Table(name = "post")
public class Post {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", nullable = false, length = 10)
    private String title;

    @Column(name = "url", nullable = false, unique = true, length = 45)
    private String url;

    @Column(name = "likes", nullable = false)
    private int likes;

    @Column(name = "user", nullable = false, length = 10)
    private String user;

    public Post(){

    }
    public Post(Long id, String title, String url, int likes, String user) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.likes = likes;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }
}


package project.Memebank.config;


import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum BucketName {
    TODO_IMAGE("memebank-bucket");
    private final String bucketName;
}

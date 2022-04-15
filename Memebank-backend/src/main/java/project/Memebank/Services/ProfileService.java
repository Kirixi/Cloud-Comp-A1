package project.Memebank.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.Memebank.Model.Profile;
import project.Memebank.Model.ProfileRepository;

import java.util.ArrayList;
import java.util.List;


@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepo;

    public List<Profile> getAllUsers(){
        List<Profile> profiles = new ArrayList<>();
        profiles.addAll(profileRepo.findAll());
        return profiles;
    }
}

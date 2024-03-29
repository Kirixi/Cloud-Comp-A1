package project.Memebank.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import project.Memebank.Model.Profile;
import project.Memebank.Model.ProfileRepository;
import project.Memebank.Services.ProfileService;

import java.util.List;


@RestController
@RequestMapping("/api/profile")
@CrossOrigin
public class ProfileController {

    @Autowired
    private ProfileRepository profileRepo;

    @Autowired
    private ProfileService profileService;

//    @GetMapping("/home")
//    public String viewHomePage() {
//        return "index";
//    }
//
//    @GetMapping("/register")
//    public String showRegistrationForm(Model model) {
//        model.addAttribute("user", new Profile());
//
//        return "signup_form";
//    }

    @PostMapping("/register")
    public ResponseEntity<?> processRegister(@RequestBody Profile profile) {

        System.out.println(profile.getPassword());
        System.out.println(profile.getEmail());
        System.out.println(profile.getUserName());

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(profile.getPassword());
        profile.setPassword(encodedPassword);

        profileRepo.save(profile);

        return new ResponseEntity<>(profile, HttpStatus.CREATED);
    }

    @GetMapping("/getAllUsers")
    public ResponseEntity<?> getAllUsers(){
        List<Profile> users = profileService.getAllUsers();
        if(users.size() > 0){
            return new ResponseEntity<>(users, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(users, HttpStatus.NO_CONTENT);
        }
    }




}

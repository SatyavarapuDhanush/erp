package backend.backerp.Controller;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import backend.backerp.Model.UserModel;
import backend.backerp.Service.UserService;
import backend.backerp.dto.LoginRequest;

@RestController
@CrossOrigin
public class UserContoller {
    @Autowired
    UserService us;
    @GetMapping("/")
    public String hi(){
        return "i am ready to build"; 
    }

    @GetMapping("/cal")
    public int cal(@RequestParam int a, @RequestParam int b) {
        return a + b;
    }

    @GetMapping("/users/getusers")
    public ArrayList<UserModel> getusers(){
        return us.getallusers();
    }
    
    @PostMapping("/users/post")
    public ResponseEntity<UserModel> createuser(@RequestBody UserModel newUser){
    UserModel user=us.postUser(newUser);
    return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }

    @PostMapping("users/login")
    public boolean login(@RequestBody LoginRequest loginRequest) {
        System.out.println("Login attempt for ID: " + loginRequest.getId()); // Log login attempt
        boolean isLoggedIn = us.login(loginRequest.getId(), loginRequest.getPassword());
        if (isLoggedIn) {
            System.out.println("Login successful for ID: " + loginRequest.getId());
        } else {
            System.out.println("Login failed for ID: " + loginRequest.getId());
        }
        
        return isLoggedIn;
    }
    


  

}
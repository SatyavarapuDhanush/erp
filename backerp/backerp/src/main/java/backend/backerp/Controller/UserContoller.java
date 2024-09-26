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

    @GetMapping("users/login")
    public boolean login(@RequestParam int id,@RequestParam String password){
        return us.login(id, password);
    } 
  

}
package backend.backerp.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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


}
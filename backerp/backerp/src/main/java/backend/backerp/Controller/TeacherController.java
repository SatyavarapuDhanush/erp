package backend.backerp.Controller;
import backend.backerp.Model.TeacherModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import backend.backerp.Service.TeacherService;
import backend.backerp.dto.TeacherLoginRequest;

import org.springframework.web.bind.annotation.GetMapping;
import java.util.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@CrossOrigin
@RequestMapping("/api/teachers")
public class TeacherController {
    @Autowired
    TeacherService ts;
    
    
    @GetMapping("/")
    public String hi() {
        return "teacher";
    }
    @GetMapping("/getteachers")
    public ArrayList<TeacherModel> getallteachers() {
        return ts.getAllTeachers();
    }
    @PostMapping("/postteachers")
    public ResponseEntity<TeacherModel> createteachers(@RequestBody TeacherModel newteacher) {
        TeacherModel pt = ts.postTeacher(newteacher);
        return ResponseEntity.status(HttpStatus.CREATED).body(pt);
    }
    
    @PostMapping("/login")
    public ResponseEntity<String> Login(@RequestBody TeacherLoginRequest loginRequest) {
        boolean isAuthenticated=ts.login(loginRequest.getId(), loginRequest.getPassword());
        return isAuthenticated?ResponseEntity.ok("Login Successful"):ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credintals");
    }
    
    

}

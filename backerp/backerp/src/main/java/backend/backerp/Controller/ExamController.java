package backend.backerp.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import backend.backerp.Model.ExamModel;
import backend.backerp.Service.ExamService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/exams")
public class ExamController {
    @Autowired
    ExamService es;
    
    @GetMapping("/")
    public String hello() {
        return "hi";
    }

    @GetMapping("/getexams")
    public ArrayList<ExamModel> getAllExams() {
        return es.getExams();
    }

    @GetMapping("/getexams/{id}")
    public ExamModel getById(@PathVariable Long id) {
        return es.getExamById(id);
    }

    @PostMapping("/create")
    public ExamModel PostExam(@RequestBody ExamModel newExam) {
        return es.createExam(newExam);
    }

    @PutMapping("/update/{id}")
    public ExamModel updateExam(@PathVariable Long id, @RequestBody ExamModel newExam) {
        return es.updateExam(id, newExam);
    }
    
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
        es.deleteExam(id);
    }
}

package backend.backerp.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import backend.backerp.Model.UserModel;
import backend.backerp.Model.ExamModel;
import backend.backerp.Repository.ExamInterface;
import backend.backerp.Repository.ExamJpaRepository;
import backend.backerp.Repository.UserJpaRepository;

@Service
public class ExamService implements ExamInterface{
    @Autowired
    public ExamJpaRepository EJR;

    @Autowired
    public UserJpaRepository UJR;
    
    public ArrayList<ExamModel> getExams(){
    List<ExamModel> Exams=EJR.findAll();
    return new ArrayList<>(Exams);
    }

    public ExamModel getExamById(Long id){
        ExamModel Exam=EJR.findById(id).orElse(null);
        return Exam;
    }
    
    public ExamModel createExam(ExamModel exam){
        ExamModel PostExam=EJR.save(exam);
        return PostExam;
    }

    public ExamModel updateExam(Long id,ExamModel examDetails){
        ExamModel exam=EJR.findById(id).orElse(null);
        exam.setExamname(examDetails.getExamname());
        exam.setDate(examDetails.getDate());
        exam.setDuration(examDetails.getDuration());
        return EJR.save(exam);
    }

    public void deleteExam(Long id) {
        EJR.deleteById(id);
    }
    public ExamModel assignedStudents(Long examId,List<Integer> StudentIds){
        ExamModel exam=EJR.findById(examId).orElseThrow(()->new RuntimeException("Exam not found"));
        List<UserModel> students=UJR.findAllById(StudentIds);
        exam.setAssignedStudents(students);
        return EJR.save(exam);
    }
}

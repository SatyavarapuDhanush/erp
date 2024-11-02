package backend.backerp.Service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.backerp.Model.TeacherModel;
import backend.backerp.Repository.TeacherInterface;
import backend.backerp.Repository.TeacherRepository;

@Service
public class TeacherService implements TeacherInterface {
    @Autowired
    TeacherRepository tr;
    
    @Override 
    public ArrayList<TeacherModel> getAllTeachers() {
        List<TeacherModel> teachers = tr.findAll();
        return new ArrayList<>(teachers);
    }

    @Override
    public TeacherModel postTeacher(TeacherModel newTeacher) {
        return tr.save(newTeacher);
    }

    @Override
    public boolean login(Long id, String password) {
        Optional<TeacherModel> teacherOpt = tr.findById(id);
        if (teacherOpt.isPresent()) {
            TeacherModel teacher = teacherOpt.get();
            return password.equals(teacher.getPassword());
        }
        return false;
    }
}

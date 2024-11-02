package backend.backerp.Repository;

import java.util.ArrayList;
import backend.backerp.Model.TeacherModel;

public interface TeacherInterface {
    public ArrayList<TeacherModel> getAllTeachers();
    public TeacherModel postTeacher(TeacherModel newteacher);
    public boolean login(Long TeacherId,String password);

}
    

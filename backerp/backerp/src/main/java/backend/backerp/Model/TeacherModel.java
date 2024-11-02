package backend.backerp.Model;

import jakarta.persistence.*;

@Entity
@Table(name="Teachers")
public class TeacherModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Teacher_ID")
    private Long teacherId;    
    @Column(name="TeacherName")
    private String teacherName;
    @Column(name="email")
    private String email;
    @Column(name="Password")
    private String password;
    
    public TeacherModel() {

    }
    public TeacherModel(Long teacherId, String teacherName, String email, String password) {
        this.teacherId = teacherId;
        this.teacherName = teacherName;
        this.email = email;
        this.password = password;
    }
    public Long getTeacherId() {
        return teacherId;
    }
    public void setTeacherId(Long teacherId) {
        this.teacherId = teacherId;
    }
    public String getTeacherName() {
        return teacherName;
    }
    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }


}

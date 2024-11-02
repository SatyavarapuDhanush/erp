package backend.backerp.Model;

import java.util.List;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="Exams")
public class ExamModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Examid")
    private Long examid;

    @Column(name="Examename")
    private String examname;

    @Column(name="date")
    private String date;

    @Column(name="duration")
    private String duration;

    @ManyToMany
    @JoinTable(
        name = "exam_students",
        joinColumns = @JoinColumn(name = "exam_id"),
        inverseJoinColumns = @JoinColumn(name = "student_id")
    )
    private List<UserModel> assignedStudents;

    public List<UserModel> getAssignedStudents() {
        return assignedStudents;
    }

    public void setAssignedStudents(List<UserModel> assignedStudents) {
        this.assignedStudents = assignedStudents;
    }

    public Long getExamid() {
        return examid;
    }

    public ExamModel(Long examid, String examname, String date, String duration, List<UserModel> assignedStudents) {
        this.examid = examid;
        this.examname = examname;
        this.date = date;
        this.duration = duration;
        this.assignedStudents = assignedStudents;
    }

    public void setExamid(Long examid) {
        this.examid = examid;
    }

    public String getExamname() {
        return examname;
    }

    public void setExamname(String examname) {
        this.examname = examname;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public ExamModel(Long examid, String examname, String date, String duration) {
        this.examid = examid;
        this.examname = examname;
        this.date = date;
        this.duration = duration;
    }

    // Default constructor
    public ExamModel() {
    }
}

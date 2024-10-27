package backend.backerp.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

    public Long getExamid() {
        return examid;
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

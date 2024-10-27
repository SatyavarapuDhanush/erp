package backend.backerp.Repository;

import java.util.ArrayList;
import backend.backerp.Model.ExamModel;

public interface ExamInterface {
      public ArrayList<ExamModel> getExams();
      public ExamModel getExamById(Long id);
      public ExamModel createExam(ExamModel exam);
      public ExamModel updateExam(Long id,ExamModel examDetails);
      public void deleteExam(Long id);
}
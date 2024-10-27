package backend.backerp.Repository;

import backend.backerp.Model.ExamModel;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamJpaRepository  extends JpaRepository<ExamModel,Long>{
    
}

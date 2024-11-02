package backend.backerp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import backend.backerp.Model.TeacherModel;

public interface TeacherRepository extends JpaRepository<TeacherModel,Long>{
    
} 
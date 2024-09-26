package backend.backerp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import backend.backerp.Model.UserModel;

public interface  UserJpaRepository extends JpaRepository<UserModel,Integer>{
    UserModel findById(int id);
}

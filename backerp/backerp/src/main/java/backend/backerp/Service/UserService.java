package backend.backerp.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.backerp.Model.UserModel;
import backend.backerp.Repository.UserInterface;
import backend.backerp.Repository.UserJpaRepository;

@Service
public class UserService implements UserInterface {

    @Autowired
    public UserJpaRepository UJR;

    @Override
    public ArrayList<UserModel> getallusers() {
    List<UserModel> users = UJR.findAll();
    return new ArrayList<>(users);
    }

    @Override
    public UserModel PostUser(UserModel newUser) {
    UserModel user = UJR.save(newUser);
    return user;
    }

   /*  @Override
    public boolean login(int userid, String password) {
    UserModel user=UJR.findByUserId(userid);
    if(user!=null){
        return  password.equals(user.getPassword());
    }
    System.out.println(userid+"user not found");
    return false;
    } */
}

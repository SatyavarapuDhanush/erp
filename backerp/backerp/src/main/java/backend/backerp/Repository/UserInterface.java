package backend.backerp.Repository;

import java.util.ArrayList;
import backend.backerp.Model.UserModel;

public interface UserInterface {
    public ArrayList<UserModel> getallusers();
    public UserModel postUser(UserModel newUser);
   public boolean login(int userid,String password);

}

import CollectionView from "./CollectionView";
import { User } from "../model";
import UserView from "./UserView";
import IUser from "../interface/IUser";

class UserList extends CollectionView<User, IUser>{
    renderItem(model: User, itemParent: Element): void {
        new UserView(itemParent, model).render()
    }
}

export default UserList
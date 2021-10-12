public class User {
    int id;//id
    String name;//账户名
    String pwd;//密码
    public User(){

    }

    public User(int id,String name){
        super();
        this.id = id;
        this.name = name;
    }

    public User(int id,String name,String pwd){
        super();
        this.id = id;
        this.name = name;
        this.pwd = pwd;
    }

    public static void main(String[] args){
        User u1 = new User();
        User u2 = new User(101,"4xi");
        User u3 = new User(100,"5xi","123456");
        System.out.println(u3.pwd);
    }
}

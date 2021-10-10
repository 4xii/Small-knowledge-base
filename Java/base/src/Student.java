public class Student {

    // 属性 fields
    int id;
    String name;
    int age;
    Computer comp;//计算器

    void study(){
        System.out.println("学习啦"+comp.brand);
    }

    void play(){
        System.out.println("玩啦");
    }

    //程序执行的入口，必须要有
    public static void main(String[] args) {
        Student stu = new Student();
        stu.id = 1001;
        stu.name="4xi";
        stu.age = 18;

        Computer c1 = new Computer();
        c1.brand = "mbp";

        stu.comp = c1;

        stu.play();
        stu.study();
    }
}

class Computer{
    String brand;
}

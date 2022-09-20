package Java.Tutorial.Tutorial_19;

public class Main extends Player {
  public static void main(String[] args) {
    Main main = new Main();
    main.play("abcd");
    main.pause();
    main.stop();
    Dog dog = new Dog();
    dog.crying();
  }

  @Override
  void play(String name) {
    // TODO Auto-generated method stub
    System.out.println(name + " 을 재생합니다.");
  }

  @Override
  void pause() {
    // TODO Auto-generated method stub
    System.out.println("곡을 일시정지 합니다.");

  }

  @Override
  void stop() {
    // TODO Auto-generated method stub
    System.out.println("곡을 정지합니다.");
  }
}

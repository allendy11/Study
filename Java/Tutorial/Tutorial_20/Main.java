package Java.Tutorial.Tutorial_20;

public class Main extends Player {
  public static void main(String[] args) {
    Main main = new Main();
    // play("lalalala"); // 에러 : static 은 static 만 불러올수 있다.
    main.play("lalalala");
    main.pause();
    main.stop();
  }

  void play(String song) {
    System.out.println(song + " play");
  }

  void pause() {
    System.out.println("pause");
  }

  void stop() {
    System.out.println("stop");
  }
}

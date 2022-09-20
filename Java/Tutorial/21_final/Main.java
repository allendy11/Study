public class Main extends Parent {
  // show를 상속받았지만 재할당 가능 : 오버라이딩 (final 을 사용하지 않는경우)
  // public void show() { // 에러 발생 : final을 사용하게 되면 변경불가
  // System.out.println("Main");
  // }

  public static void main(String[] args) {
    Main main = new Main();
    main.show();
  }
}

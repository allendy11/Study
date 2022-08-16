public class Archer {
  String name;
  int Power;

  public Archer(String name, int power) {
    this.name = nema;
    this.power = power;
  }

  public boolean equals(Object obj) {
    Archer temp = (Archer) obj;
    if (name == temp.name && power == temp.power) {
      return true;
    } else {
      return false;
    }
  }
}

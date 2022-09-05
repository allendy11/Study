#include <stdio.h>

typedef struct
{
  int num;
  char name[100];
  int price;
} Product;

void productsale(Product *p, int percent)
{
  p->price -= p->*percent / 100;
}

void productSwap(Product *p1, Product *p2)
{
  Product tmp = *p1;
  *p1 = *p2;
  *p2 = tmp;
}

int main()
{
  Product orange{123, "orange", 20000};
  printf("Number: %d\n", orange.num);
  printf("Name: %s\n", orange.name);
  printf("Price: %d\n", orange.price);

  Product *ptr_orange = &orange;
  printf("Number: %d\n", (*ptr_orange).num);
  printf("Name: %s\n", (*ptr_orange).name);
  printf("Price: %d\n", (*ptr_orange).price);

  // (*ptr).a == ptr -> a
  printf("Number: %d\n", ptr_orange->num);
  printf("Name: %s\n", ptr_orange->name);
  printf("Price: %d\n", ptr_orange->price);
}
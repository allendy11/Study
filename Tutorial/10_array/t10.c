// [배열]

// [배열 표기]
int arr[4];
int arr[4] = {1, 2, 3, 4};
int arr[] = {1, 2, 3, 4};

// [배열의 길이]
int length = sizeof(arr) / sizeof(int);
int length = sizeof(arr) / sizeof(char);
// 길이 = 배열의 크기 / 자료형의 크기
// 배열의 길이를 구하는 함수가 존재한다. (strlen);

// [2차원 배열]

// [문자열 배열]
char arr[] = "abc"; //  길이는 4 {'a', 'b', 'c' , '\0'}
// '\0' 문자의 끝을 알린다.
printf(arr) // abc -> 배열이 그대로 출력이 된다 !!

    // [문자열 입력] (string 이 존재하지 않는다.)
    char s[100];
scanf("%s", s);
printf("%s\n", s);
// 입력한 문자열을 그대로 입력받는다
// c++ 로 넘어가야 string 이 나온다 ;;;
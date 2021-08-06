# Java tips and tricks


**Java 8 read file**

```java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public static void main(String[] args) throws IOException {
String content = new String(Files.readAllBytes(Paths.get(“words.txt")));
}
```

**Important classes**

```java
import java.util.stream.Collectors
import java.util.stream.IntStream
```

**Sort strings**

```java
char[] array = “array”.toCharArray()
Arrays.sort(array) // void affects the reference
new String(array);
```

**Important Collectors**

```java
Collectors.counting()
Collectors.toList()
Collectorsjoining
```

Reduce

```java
numbers.stream().reduce(0, Integer::sum);
```

**Java 8 Ranges**

```java
IntStream.range(1, 3);
// > 1, 2
IntStream.rangeClosed(1, 3);
```

**Read file**

```java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public static void main(String[] args) throws IOException {
String content = new String(Files.readAllBytes(Paths.get(“words.txt")));
}
```

**Read from STDIN**

```java
import java.io.*;

Scanner in = new Scanner(System.in);
in.nextInt();
in.nextLine();
```

Filter by number

```
20
```

**Arrays**

```java
new int[]{1,2,3}
Arrays.sort
Arrays.toString
Systemarraycopy(ObjectintObjectintint)
ArrayscopyOf([]int)
```

**Queue**

```java
Queue que = new LinkedList<>()
add()
poll()
```

**Maps**

```java
Map.Entry
getValues()

Map
entrySet()
```

**Collection**

```java
toArray()
```

**StringBuffer**

```java
new StringBuffer(String)
reverse()
deleteCharAt()
append
insert
```

**String**

```java
substring(n)
length()
charAt()
toLowerCase()
```

**Integer**

```java
valueOf()
```

**List**

```java
insertAt
remove
get
List.of("hi", "some");
```

**Stream**

```java
sum()
mapToInt
mapToLong
reduce(0, int::sum)
```

Working with dates

```java
var from = ZonedDateTime.of(LocalDate.parse(firstTx, dateParser).atStartOfDay(),
DateHelpers.MEXICO_CITY_ZONE_ID);
```

```java
ZonedDateTime to = LocalDate.now().atStartOfDay(DateHelpers.MEXICO_CITY_ZONE_ID)
            .minusDays(settlementDays);
```

Latest Java changes

```java
Local Var

private interface methods
//Unmodifiable collection shortcuts

List.of

//Stream enhacements
stream().dropWhile
stream().takeWhile(it -> it < 3)

Collectors.toUnmodiableSet
Collectors.

//String
.lines //Stream lines
.strip()
.stripLeading()
.stripTrailing()
.isBlank()
.repeat(n)

//toArray
.toArray(String[]::new)

//HttpClient
//

// JAVA 15
//Garbage collectors ZGC, Shenandoah
// Better null exceptions

//switch expresions

string food = switch(id) {
	case 1 -> "French friies";
  case 2 -> "Donas";
  default -> "Pizza";
}

//Pattern matching(preview)

if(someObject instanceof String someString) {
 doSomethingWithString(someString)
}

//Records (preview)

record Point(int x, int y) {}
//records are final
//field are final
//cannont define any more field

//Sealed class

sealed interfase Message permits Start, Stop, Timeout {}ilter any
```

Filter any

```java
Optional<Bank> institution = bankModel.getBanks(BankModel.Country.MX)
                        .stream()
                        .filter(bank -> String.valueOf(bank.getCode()).endsWith(bankKey))
                        .findAny();
```

Using optionals to map stuff

```java
List<TransactionPaymentInfo> transactions = response
                .map(RpcResponse::getResult)
                .map(given -> given.get(RippledClientConstants.RPC_FIELD_TRANSACTIONS))
                .filter(JsonNode::isArray)
                .map(ArrayNode.class::cast)
                .map(given -> IntStream.range(0, given.size())
                        .mapToObj(given::get)
                        .map(obj -> obj.get(RippledClientConstants.RPC_FIELD_TX))
                        .map(obj -> mapResponseToClass(obj, TransactionPaymentInfo.class))
                        .collect(Collectors.toList())
                )
                .orElse(Collections.emptyList());
```

```java
toUserId.chars().allMatch(Character::isDigit)
```
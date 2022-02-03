/**
 * JavaScript에서 Hash Table 사용법
 * 1. Object
 * 2. Map
 * 3. Set
 *
 * + Array에 강제로 key를 할당하는 방법의 사용은 추천하지 않는다.
 */

// 1.Object
{
  const table = {};
  table["key"] = 100;
  table["key2"] = "Hello";
  console.log(table["key"]); //100

  table["key"] = 333;
  console.log(table["key"]); //333

  delete table["key"];
  console.log(table["key"]); //undefined
}

//2. Map
{
  const table = new Map();

  table.set("key", 100);
  table.set("key2", "Hello");

  console.log(table["key"]); //undefined
  console.log(table.get("key")); //100
  console.log(table.get("key2")); //Hello

  const dh = { name: "dahye" };
  table.set(dh, "DH"); //  -> object를 key 값으로 사용 할 수 있다.
  console.log(table.get(dh)); //DH
  console.log(table.keys()); //MapIterator {'key', 'key2', {…}}
  console.log(table.values()); // MapIterator {100, 'Hello', 'DH'}

  table.delete(dh);
  console.log(table.keys()); //MapIterator {'key', 'key2'}
  console.log(table.values()); // MapIterator {100, 'Hello'}

  table.clear();
  console.log(table.keys()); //MapIterator {}
  console.log(table.values()); // MapIterator {}
}

//3. Set

{
  const table = new Set();
  table.add("key1");
  table.add("key2");
  console.log(table.has("key1")); //true
  console.log(table.has("key999")); //false

  table.delete("key2");
  console.log(table.has("key2")); //false
  console.log(table.size); //1

  table.add("key3");
  console.log(table.size); //2

  table.clear();
  console.log(table.size); //0
}

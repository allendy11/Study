function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let queue = new Array(bridge_length).fill(0);
  let truck = truck_weights.shift();
  let weightOnBridge = truck;
  queue.shift();
  queue.push(truck);
  answer++;
  while (weightOnBridge > 0) {
    if (truck_weights.length > 0) {
      truck = truck_weights.shift();
    } else truck = 0;
    let passedTruck = queue.shift();
    if (passedTruck > 0) {
      weightOnBridge -= passedTruck;
    }
    if (weightOnBridge + truck <= weight) {
      weightOnBridge += truck;
      queue.push(truck);
    } else {
      truck_weights.unshift(truck);
      queue.push(0);
    }
    answer++;
  }
  return answer;
}

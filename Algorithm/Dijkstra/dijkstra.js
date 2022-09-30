let nodeList = [1,2,3,4,5,6]
const INF = Infinity

let n1 = [0,2,5,1,INF,INF]
let n2 = [2,0,3,2,INF,INF]
let n3 = [5,3,0,3,1,5]
let n4 = [1,2,3,0,1,INF]
let n5 = [INF, INF,1,1,0,2]
let n6 = [INF,INF,5,INF,2,0]

let graph = [n1,n2,n3,n4,n5,n6]

function dijkstra(idx) {
  let visited = new Array(nodeList.length).fill(false)
  let result = [...n1]
  visited[idx] = true 

  for(let i=0 ; i<nodeList.length ; i++) {
    if(!visited[i]) {
      for(let j =0 ; j<nodeList.length ; j++) {
        result[j] = result[j] < result[i] + graph[i][j] ? result[j] : result[i]+graph[i][j]
      }
      visited[i] = true;
    }
  }
  return result
}
console.log(dijkstra(0)) // [0,2,3,1,2,4]
# GraphQL

### 1. GraphQL 은 왜 탄생했는가?

- RESTful API 로는 다양한 기종에서 필요한 정보들을 일일히 구현하는 것이 힘들다.
- 이 때문에  사용하는 측에서 원하는 대로 정보를 가져올 수 있고, 보다 편하게 정보를 수정할 수 있도록 하는 표준화된  Query language를 만들었다.

---

### 2. GraphQL VS RESTful

|  | `GraphQL` | `RESTful` |
|---|:---:|:---:|
|`EndPoint` | 주로 하나의 EndPoint 사용| Resource 마다 하나의 EndPoint 사용|
| `응답구조` | 요청할 때 사용한 Query 문에 따라 응답 구조 달라짐| 응답 구조가 정해져있다 |
| `장점` | Http 요청 횟수/size 를 줄일 수 있다 |  |
| `단점` | 1. File 전송 등 Text 만으로 하기 힘든 내용들을 처리하기 복잡하다 <br/> 2. 고정된 요청과 응답만 필요할 경우 Query 로 인해 요청의 크기가 RESTful API의 경우보다 커진다. <br/> 3. 재귀적인 Qeury가 불가능하다.|  |

---

### 3. GraphQL or RESTful

#### 1. GraphQL
- 서로 다른 모양의 다양한 요청들에 대해 응답할 수 있어야 할 때
- 대부분의 요청이 CRUD에 해당할 때

#### 2. RESTful
- HTTP와 HTTPs 에 의한 Caching 을 잘 사용하고 싶을 때
- File 전송 등 단순한 Text 로 처리되지 않은 요청들이 있을 때
- 요청의 구조가 정해져 있을 때
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

---

### 4. GraphQL 구조
1. 쿼리 / 뮤테이션 (query / mutation) <br/>

> 쿼리 : 데이터를 읽는데(R) 사용<br/>
뮤테이션 : 데이터를 변조(CUD) 하는데 사용

쿼리와 뮤테이션 그리고 응답 내용의 구조는 상당히 직관적이다. 요청하는 쿼리문의 구조와 응답 내용의 구조는 거의 일치한다.


```
// 쿼리문
{
    hero {
        name
    }
}
```

```
// 응답 데이터
{
    "data" : {
        "hero": {
            "name": "R2-D2"
        }
    }
}
```
<br/>

2. 오퍼레이션 네임 쿼리
> 오퍼레이션 네임 쿼리 : 쿼리용 함수. 데이터베이스에서의 프로시저와 유사한 개념 

```
query getStudentInfomation($studentId: ID) {
    personalInfo(studentId: $studentId) {
        name
        address1
        address2
        major
    }

    classInfo(year: 2018, studentId:$studentId) {
        classCode
        className
        teacher {
            name
            major
        }
        classRoom {
            id
            maintainer {
                name
            }
        }
    }

    SATInfo(schoolCode: 0412, studentId: $studentId) {
        totalScore
        dueDate
    }
}
```
<br/>

3. 스키마 / 타입 (schema / type)

```
type Character {
    name: String!
    appersIn: [Episode!]!
}
````

- 오프젝트 타입: Character
- 필드: name, appersIn
- 스칼라 타입: String, ID, Int 등
- 느낌표(!): 필수 값 의미(non-nullable)
- 대괄호([,]): 배열 의미(array)

<br/>

4. 리졸버 (resolver)
> 리졸버: 각각의 필드마다 존재하는 다음 타입을 반환하는 함수 <br/>
>> 필드가 스칼라 값(문자열이나 숫자와 같은 primitive 타입)일 경우 실행 종료 <br/>
필드 타입이 스칼라 타입이 아닌 경우 해당 타입의 리졸버 호출 <br/>
각각의 리졸버 함수에는 내부적으로 데이터베이스 쿼리 존재


```
// resolver 함수

Query: {
    paymentsByUser: async (parent, {userId}, context, info) => {
        const limit = await Limit.findOne({where: {UserId: userId}})
        const payments = await Payment.findAll({where: {LimitId: limit.id}})
        return payments
    },
},

payment: {
    limit: async (payment, args, context, info) => {
        return await Limit.findOne({where: {id: apyment.LimitId}})
    }
}
```

- 첫번째 인자는 parent로 연쇄적 리졸버 호출에서 부모 리졸버가 리턴한 객체이다.<br/>
 이 객체를 활용해서 리졸버가 내보낼 값을 조절 할 수 있다.

- 두번째 인자는 args로 쿼리에서 입력으로 넣은 인자이다.

- 세번째 인자는 context로 모든 리졸버에게 전달된다. 주로 미들웨어를 통해 입력된 값들이 들어있다.<br/>
 로그인 정보 혹은 권한과 같이 주요 컨텍스트 관련 정보를 가지고 있다.

- 네번째 인자는 info로 스키마 정보와 더불어 현재 쿼리의 특정 필드 정보를 가지고 있다.
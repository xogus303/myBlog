---
date: '2023-02-20'
series: ''
title: 'javascript의 동작'
categories: ['Javascript']
summary: '웹페이지를 구성하는 요소 중 동작 부분에 해당하는 javascript가 어떻게 실행되는지 이해해보자'
thumbnail: '../../static/postThumbnails/postThumbnail_230220.jpeg'
---

> javascript는 객체 기반의 스크립트 프로그래밍 언어이며 웹 브라우저 내에서 다양한 동작과 기능을 구현할 수 있도록 해줍니다. 웹사이트를 구현하는 여러 브라우저에서는 javascript를 실행시키기 위해 각각의 javascript 엔진이 존재하는데, 어떤 구조와 흐름으로 실행되는지 알아보겠습니다.

---

### > 웹의 구성

브라우저는 사용자에게 웹페이지를 보여주기 위해 웹서버에 리소스를 요청합니다. 웹서버로부터 html, css, javascript 등의 파일을 응답받아 브라우저 엔진을 통해 화면에 렌더링 합니다. 그 중 javascript는 html 요소 및 브라우저 제어를 가능하게 하고, 사용자의 액션에 따른 동작을 처리하거나 이벤트를 발생시키기도 하며, 웹서버와 통신할 수 있게 해주는 핵심 역할을 담당하고 있습니다.

### > Javascript Engine

javascript는 객체가 생성될 때 자동으로 메모리를 할당하고 더 이상 사용하지 않을 때 메모리를 해제합니다.(가비지 컬렉션) javascript엔진은 힙과 스택이라는 저장공간에 각각의 역할메 맞는 메모리를 할당하여 실행합니다.

### > Memory heap과 Call Stack

Memory Heap은 객체 및 함수를 저장하며 고정된 양이 아닌 필요에 따른 더 많은 공간을 할당합니다. 저장된 데이터에 메모리를 할당하며 stack에서 이를 참조합니다.
Call Stack은 javascript가 사용하는 정적 데이터를 저장하는 데이터 구조입니다. 원시값들(string, number, boolean, undefined, null), 객체와 함수를 참조하는 주소, 함수 호출 시 생성되는 실행 컨텍스트를 저장합니다. 엔진은 크기가 변경되지 않는 다는 것을 알고 있기에 각 값들에게 고정된 양의 메모리를 할당하며 실행 직전, 메모리에 할당하는 과정을 **정적 메모리 할당**이라고 합니다.

javascript는 작성된 코드를 순차적으로 하나씩 실행시키며(하나의 호출 스택) 동시에 여러 호출을 실행할 수 없는 **single thread** 언어 입니다. 하지만 사용자가 느끼기에 전혀 불편함 없이 웹페이지는 이벤트를 처리하는데 바로 비동기 처리를 하기 때문입니다.

### 웹 서버

통신 채널의 반대편에는 클라이언트에 의한 요청에 대한 문서를 제공하는 서버가 존재한다.

### 프록시

웹 브라우저와 서버 사이에는 수많은 컴퓨터와 머신이 HTTP 메시지를 이어 받고 전달한다. 여러 계층으로 이루어진 웹스택 구조에서 이러한 컴퓨터/머신들은 대부분은 전송, 네트워크 혹은 물리 계층에서 동작하며, 성능에 상당히 큰 영향을 주지만 HTTP 계층에서는 이들이 어떻게 동작하는지 눈에 보이지 않는다. 이러한 컴퓨터/머신 중에서도 애플리케이션 계층에서 동작하는 것들을 일반적으로 프록시라고 부르며 다양한 기능들을 수행할 수 있다.

- 캐싱
- 필터링 (바이러스 백신 스캔, 유해 컨텐츠 차단)
- 로드 밸런싱 (여러 서버들이 서로 다른 요청을 처리하도록 허용)
- 인증 (다양한 리소스에 대한 접근 제어)
- 로깅 (이력 정보 저장)

##

## 2. HTTP의 특징

**< 간단하다 >**
HTTP는 사람이 읽을 수 있으며 간단하게 고안되었다. HTTP 메세지를 프레임별로 캡슐화하여 간결함을 유지하였다. 메시지들을 사람이 읽고 이해할 수 있어, 테스트하기 쉽고 초심자의 진입장벽을 낮췄다.<br/>
**< 확장 가능성 >**  
HTTP/1.0에서 소개된, HTTP 헤더는 HTTP를 확장하고 실험하기 쉽게 만들어주었다. 클라이언트와 서버가 새로운 헤더의 시맨틱에 대해 간단히 합의만 한다면, 언제든지 새로운 기능을 추가할 수 있다.<br/>
**< Stateless >**  
HTTP는 상태를 저장하지 않는다(Stateless). 동일한 연결 상에서 연속하여 전달된 두 개의 요청 사이에는 연결고리가 없다. HTTP의 핵심은 상태가 없는 것이지만 HTTP 쿠키는 상태가 있는 세션을 만들도록 해준다. 헤더 확장성을 사용하여, 동일한 컨텍스트 또는 동일한 상태를 공유하기 위해 각각의 요청들에 세션을 만들도록 HTTP 쿠기가 추가된다.<br/>
**< HTTP와 연결 >**  
연결은 전송 계층에서 제어되므로 근본적으로 HTTP영역 밖이다. HTTP는 연결될 수 있도록 하는 근본적인 전송 프로토콜을 요구하지 않는다. 인터넷 상의 가장 일반적인 두 개의 전송 프로토콜 중에서 TCP는 신뢰할 수 있으며 UDP는 그렇지 않다. 그러므로 HTTP는 연결이 필수는 아니지만 연결 기반인 TCP 표준에 의존한다.<br/>
**< 제어 가능한 기능 >**

- **캐시**
  문서가 캐시되는 방식을 제어할 수 있다. 서버는 캐시 대상과 기간을 프록시와 클라이언트에 지시할 수 있고 클라이언트는 저장된 문서를 무시하라고 중간 캐시 프록시에게 지시할 수 있다.
- **origin 제약사항 완화**  
  스누핑과 다른 프라이버시 침해를 막기 위해, 브라우저는 웹 사이트 간의 엄격한 분리를 강제한다. 동일한 origin으로부터 온 페이지만이 웹 페이지의 전체 정보에 접근할 수 있다. 그런 제약 사항은 서버에 부담이 되지만, HTTP 헤더를 통해 완화시킬 수 있고 그 덕분에 문서는 다른 도메인으로부터 전달된 정보를 패치워크할 수 있다.
- **인증**  
  어떤 페이지들은 보호되어 오로지 특정 사용자만이 그것에 접근할 수도 있다. 기본 인증은 HTTP를 통해 WWW-Authenticate 또는 유사한 헤더를 사용해 제공되거나, HTTP 쿠키를 사용해 특정 세션을 설정하여 이루어질 수도 있다.
- **프록시와 터널링**  
  서버 혹은 클라이언트 혹은 그 둘 모두는 종종 인트라넷에 위치하며 다른 개체들에게 그들의 실제 주소를 숨기기도 한다. HTTP 요청은 네트워크 장벽을 가로지르기 위해 프록시를 통해 나가게 되며 모든 프록시가 HTTP 프록시는 아니다. FTP와 같은 다른 프로토콜도 이 프록시를 통해 처리될 수 있다.
- **세션**  
  쿠키 사용은 서버 상태를 요청과 연결하도록 해준다. 이것은 HTTP가 기본적으로 상태없는 프로토콜임에도 세션을 만들어주는 게기가 된다. 이것은 e-커머스 쇼핑 바구니를 위해서 유용할 뿐만 아니라 사용자 구성을 허용하는 모든 사이트에 대해서 유용하다.

##

## 3. HTTP의 흐름

1. **TCP 연결을 연다.** TCP 연결은 요청을 보내거나(혹은 여러개의 요청) 응답을 받는데 사용된다. 클라이언트는 새 연결을 열거나, 기존 연결을 재사용하거나, 서버에 대한 여러 TCP 연결을 열 수 있다.
2. **HTTP 메시지를 전송한다.** HTTP 메시지(HTTP/2 이전)는 인간이 읽을 수 있다.
3. **서버에 의해 전송된 응답을 읽어들인다.**
4. **연결을 닫거나 다른 요청들을 위해 재사용한다.**

##

## 4. HTTP의 메시지

**요청**

- **Method**: HTTP 메서드, 주어진 리소스에 수행하길 원하는 행동을 나타냄. 각각의 메서드는 서로 다른 의미를 구현하지만, 일부 기능은 메서드 집합 간에 서로 공유하기도 한다. 이를테면 응답 메서드는 안전하건, 캐시 가능하거나, 멱등성을 가질 수 있다.
- **Path**: 가져오려는 리소스의 경로, 예를 들어 프로토콜(http://), 도메인(www.naver.com), 또는 TCP 포트(80)의 요소들을 제외한 리소스의 URL.
- **version of the protocol**: HTTP 프로토콜의 버전.
- **Headers**: 서버에 대한 추가 정보를 전달하는 선택적 헤더들.
- **본문**: POST와 같은 몇 가지 메서드를 위한, 전송된 리소스를 포함하는 응답의 본문과 유사한 본문
- **HTTP 메서드**: 보통

**응답**

- **version of the protocol**: HTTP 프로토콜의 버전.
- **Status code**: 요청의 성공 여부와, 그 이유를 나타내는 상태 코드
- **Status message**: 아무런 영향력은 없는, 상태 코드의 짧은 설명을 나타내는 상태 메시지
- **Headers**: 요청 헤더와 비슷한 HTTP 헤더들
- **본문**: 선택사항으로 가여온 리소스가 포함되는 본문

---

HTTP는 사용이 쉬운 확장 가능한 프로토콜이다. 헤더를 쉽게 추가하는 능력을 지닌 클라이언트-서버 구조는 HTTP가 웹의 확장된 수용력과 함께 발전할 수 있게 한다.

#

## 참고자료

[<https://blog.toycrane.xyz/%EC%A7%84%EC%A7%9C-%EC%89%BD%EA%B2%8C-%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC-c7fbdc44cc97>](https://blog.toycrane.xyz/%EC%A7%84%EC%A7%9C-%EC%89%BD%EA%B2%8C-%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC-c7fbdc44cc97)
[<https://wookgu.tistory.com/21>](https://wookgu.tistory.com/21)
[<https://www.javascripttutorial.net/javascript-call-stack/>](https://www.javascripttutorial.net/javascript-call-stack/)
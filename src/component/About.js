import "../css/about.css";
import AOS from "aos";
import "aos/dist/aos.css";
import $ from "jquery";

function About() {
  AOS.init({
    once: true,
    duration: 1000,
  });

  return (
    <>
      <main className="main_front_section" data-aos="fade-up">
        <div className="about_title">
          <h2>ABOUT ME</h2>
        </div>
        <div className="about_me">
          <div className="profile_img">
            <img src="img/profile.jpeg"></img>
          </div>
          <div className="profile_section">
            <h3>
              원하는 결과를 얻기 위해 도전을 마다하지 않는, <br />{" "}
              신입프론트엔드 강예진입니다.
            </h3>
            <p>
              {" "}
              저는 활발하고 강한 사람입니다.
              <br />
              할일에 대해 끝까지 책임을 가지고, 주어진 상황을 인지하고 현실의
              문제를 해결하는 것이 우선이라고 생각합니다.
              <br />
              항상 실수 하지 않기 위해 노력하고 자존심보다는 냉정한 평가를 받아
              들이려고 합니다.
            </p>
            <p>
              {" "}
              평소 컴퓨터나 인터넷 기술에 대해 관심이 많았습니다.
              <br />
              진로에 대해 고민하다가 IT기술을 배우게 된다면 경쟁력이 있을거라
              생각하고 프로그래밍 공부를 시작했습니다.
              <br />
              처음에는 책이나 유튜브를 통해 기본기를 공부하였고, 그 이후
              국비지원 학원을 다니며 조금 더 깊이있는 공부를 배우게 되었습니다.
            </p>
          </div>
        </div>
        <div className="about_me_under">
          <div className="archiving">
            <div className="github">
              <img src="img/GitHub-Mark-64px.png"></img>
              <b>소스 코드 저장소</b>
              <ul>
                <li>과거 프로젝트, 프로그램, 앱의 소스코드</li>
                <li>혼자서 코딩 연습을 위해 만든 토이프로젝트</li>
                <li>그린 아카데미에서 수상한 과제소스 코드</li>
              </ul>
            </div>
            <div className="notion">
              <img src="img/notion2.png"></img>
              <b>공부 지식 공유 목적의 기록소</b>
              <ul>
                <li>공부한 것을 진정한 나의 것으로 만들기 위한 기록</li>
                <li>웹 개발자의 길을 걸으며 공부한 웹 관련 지식 정리</li>
                <li>수강시 배운 수업들의 내용 복습겸 정리</li>
              </ul>
            </div>
          </div>

          <div className="profile_section">
            <b>강예진 kang ye jin</b>
            <p>front-end developer</p>
            <b>AGE</b>
            <p>94.05.24</p>
            <b>PHONE NUMBER</b>
            <p>010-9173-9021</p>
            <b>E-MAIL</b>
            <p>robins2424@kakao.com</p>
          </div>
          <div className="profile">
            <div className="education">
              <b>EDUCATION</b>
              <p>2021.11.08 ~ 2022.04.12 그린컴퓨터 아카데미</p>
              <p>[스마트웹&콘텐츠개발 플립드러닝] PWA제작 프론트엔드 개발</p>
            </div>
            <div className="education">
              <b>PREVIOUS TEAM</b>
              <p>
                그린잇의 웹/앱 개발팀에서 사원으로 근무하며 웹/앱 B2B 사이트의
                운영 및 관리,
                <br /> 시스템 장애 처리, 기술 지원을 담당했습니다.
                <br /> 1년 동안 C# ASP.NET MVC와 Webform 기반의 사이트에서
                <br /> 탁월한 문제 해결 능력을 발휘하며 팀의 성과에 크게
                기여했습니다.
                <br />
                웹앱 개발팀의 일원으로서, 안정적인 시스템 운영과
                <br /> 향상된 사용자 경험 제공에 주력했습니다.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default About;

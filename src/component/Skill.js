import AOS from "aos";
import "aos/dist/aos.css";
import "../css/skill.css";
import $ from "jquery";

function Skill() {
  $(".hover").mouseleave(function () {
    $(this).removeClass("hover");
  });

  return (
    <>
      <main className="skill_section" data-aos="fade-down">
        <div className="skills">
          <div className="skills_title">
            <h2>SKILLS</h2>
          </div>
          <div className="skills_section">
            <div className="front_end">
              <div className="html">
                <img src="img/html.png"></img>
                <p>
                  HTML, HTML5의 기본 구조를 이해하며 타이틀, 하이퍼링크,
                  플러그인, 태그 등이 가능합니다. 또한, 웹표준 및 웹접근성을
                  항상 고려하여 마크업을 작성합니다.
                </p>
              </div>
              <div className="css">
                <img src="img/css.png"></img>
                <img src="img/sass.png"></img>
                <p>
                  CSS3의 기본 구조와 속성을 이해하며 외부 스타일 시트를 이용해
                  다양한 구조와 스타일, 코드 구현이 가능, scss 문법에
                  익숙합니다.
                </p>
              </div>
              <div className="js_jquery">
                <img src="img/javascript.png"></img>
                <img src="img/jquery.png"></img>
                <p>
                  JavaScript와 jQuery의 기본 구조를 이해하며 활용할 수 있습니다.
                  선택자, 오픈소스 활용이 가능합니다.
                </p>
              </div>
              <div className="react">
                <img src="img/react.png"></img>
                <p>
                  각 페이지를 분리하여 React Hooks, useEffect, 컴포넌트, state를
                  사용할 수 있습니다.
                </p>
              </div>
              <div className="react">
                <img src="/img/csharp.png"></img>
                <p>
                  ASP.NET(MVC), ASP기반으로 만들어진 웹사이트를 유지보수,
                  운영하였습니다.
                </p>
              </div>
            </div>

            <div className="git_zep">
              <div className="version_control">
                <img src="img/GitHub-Mark-64px.png"></img>
                <p>
                  작업내용과 작업시점을 확인할 수 있고,
                  <br />전 버전으로 되돌려서 문제를 해결할 수 있습니다.
                </p>
              </div>
              <div className="git">
                <img src="img/git.png"></img>
                <p>Git을 이용한 형상관리 및 flow에 대한 이해가 있습니다.</p>
              </div>
              <div className="communication">
                <img src="img/zeplin2.png"></img>
                <p>
                  프로젝트를 생성 및 관련 디자인 <br /> 파일(화면)을 업로드 할
                  수 있습니다.
                </p>
              </div>
            </div>

            <div className="deplayment">
              <div className="mysql">
                <img src="img/mysql.png"></img>
                <p>
                  SQL문을 이용해 데이터베이스를 만들고
                  <br />
                  데이터베이스 내부에 테이블을 생성하고
                  <br />
                  테이블에 데이터를 생성하고 읽기,변경,삭제 할 수 있습니다.
                </p>
              </div>
              <div className="firebase">
                <img src="img/firebase.png"></img>
                <p>
                  Storage를 통해 사진, 동영상등 여러컨텐츠들을 <br />
                  저장할 수 있는 작은 공간을 만든 경험이 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Skill;

var video = [{
        img: "https://www.youtube.com/embed/CfvhCmzE1QQ",
        title: "[EP.1] Project 0_100",
        text: "청소년의 솔직한 이야기를 들어볼 수 있는 짧은 TALK",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 2021 + "." + 07 + "." + 01
    },
    {
        img: "https://www.youtube.com/embed/CfvhCmzE1QQ",
        title: "[EP.2] 청소년 TALK - 청소년이 생각하는 포르노는?",
        text: "청소년의 솔직한 이야기를 들어볼 수 있는 짧은 TALK",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 2021 + "." + 07 + "." + 15
    },
    {
        img: "https://www.youtube.com/embed/CfvhCmzE1QQ",
        title: "[EP.3] 청소년 TALK - 청소년이 생각하는 청소년 성관계",
        text: "청소년의 솔직한 이야기를 들어볼 수 있는 짧은 TALK",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 2021 + "." + 08 + "." + 01
    },
    {
        img: "https://www.youtube.com/embed/CfvhCmzE1QQ",
        title: "[EP.4] 청소년 TALK - 청소년이 생각하는 퀴어",
        text: "청소년의 솔직한 이야기를 들어볼 수 있는 짧은 TALK",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 2021 + "." + 08 + "." + 15
    },
    {
        img: "https://www.youtube.com/embed/CfvhCmzE1QQ",
        title: "[EP.5] 청소년 TALK - 청소년이 생각하는 페미니즘",
        text: "청소년의 솔직한 이야기를 들어볼 수 있는 짧은 TALK",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 2021 + "." + 09 + "." + 01
    },
    {
        img: "https://www.youtube.com/embed/CfvhCmzE1QQ",
        title: "[EP.6] 청소년이 생각하는 학교 성교육",
        text: "청소년의 솔직한 이야기를 들어볼 수 있는 짧은 TALK",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 2021 + "." + 09 + "." + 15
    },
    {
        img: "https://www.youtube.com/embed/CfvhCmzE1QQ",
        title: "[EP.7] 성교육의 중요성 & 가치",
        text: "성교육의 중요성과 가치에 대해 청소년의 시각에서 접근하는 영상",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 2021 + "." + 10 + "." + 01
    },
    {
        img: "https://www.youtube.com/embed/CfvhCmzE1QQ",
        title: "[EP.8] 우리나라 성교육의 내용적인 문제점",
        text: "구체적인 자료들을 바탕으로 학교 성교육의 어떤 부분이 문제인지 알아보는 영상",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 2021 + "." + 10 + "." + 15
    },
    {
        img: "https://www.youtube.com/embed/CfvhCmzE1QQ",
        title: "[EP.9] 우리나라 성교육의 제도적인 문제점",
        text: "구체적인 자료들을 바탕으로 학교 성교육의 어떤 부분이 문제인지 알아보는 영상",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 2021 + "." + 11 + "." + 01
    },
    {
        img: "https://www.youtube.com/embed/CfvhCmzE1QQ",
        title: "[EP.10] 학교 성교육이 나아가야 할 방향",
        text: "청소년들에게 학교 성교육을 통해 배우고 싶은 내용과, 학교 성교육에서 개선되어야 할 점 등 청소년의 생각을 직접 들어보고, 전문가가 생각하는 학교 성교육에서 개선되어야 할 점에 대해 다룬 영상",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 2021 + "." + 11 + "." + 15
    },
]

function print(_result) {
    for (var i in _result) {
        var videoi = _result[i];
        document.querySelector('.videoBox').innerHTML +=
            `<div class="video">
                <iframe src="${videoi.img}" alt=""></iframe>
                <p class="title"><span>${videoi.title}</span> &nbsp; - ${videoi.day}</p>
                <p class="text">${videoi.text}</p>
                <button type="button" onClick="location.href='${videoi.url}'">보러가기</button>
            </div>`;
    }
}
for (var i in video) {
    var videoi = video[i];
    document.querySelector('.videoBox').innerHTML +=
        `<div class="video">
                <iframe src="${videoi.img}" alt=""></iframe>
                <p class="title"><span>${videoi.title}</span> &nbsp; - ${videoi.day}</p>
                <p class="text">${videoi.text}</p>
                <button type="button" onClick="location.href='${videoi.url}'">보러가기</button>
        </div>`;
}


function list() {
    document.querySelector('.videoBox').innerHTML = ""
    var Select = document.getElementById('List')
    var SelectValue = Select.options[Select.selectedIndex].value;

    if (SelectValue == "old") {
        var _result = video.sort(function(left, right) {
            if (left.day > right.day) return 1;
            else if (left.day < right.day) return -1;
            else return 0;
        });
        print(_result);
    } else {
        var _result = video.sort(function(left, right) {
            if (left.day < right.day) return 1;
            else if (left.day > right.day) return -1;
            else return 0;
        });
        print(_result);
    }
}
// 모바일

function toggle() {
    var menu = document.querySelector('.header_tab')
    menu.classList.toggle('hidden');
}
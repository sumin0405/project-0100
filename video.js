var video = [
    {
        img: "https://www.youtube.com/embed/CfvhCmzE1QQ",
        title: "[EP.1] Project 0_100",
        text: "PROJECT : 0_100의 본격적인 시작을 알리는 짧은 예고편으로 공백의 비전을 담아보았다.",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 2021 + "." + 06 + "." + 15
    },
    {
        img: "https://www.youtube.com/embed/CfvhCmzE1QQ",
        title: "[EP.2] 청소년 성관계는 나쁜걸까?",
        text: "PROJECT : 0_100의 본격적인 시작을 알리는 짧은 예고편으로 공백의 비전을 담아보았다.",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 2021 + "." + 06 + "." + 16
    },
    {
        img: "https://www.youtube.com/embed/CfvhCmzE1QQ",
        title: "[EP.1] Project 0_103",
        text: "PROJECT : 0_100의 본격적인 시작을 알리는 짧은 예고편으로 공백의 비전을 담아보았다.",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 2021 + "." + 06 + "." + 17
    },
    {
        img: "https://www.youtube.com/embed/CfvhCmzE1QQ",
        title: "[EP.1] Project 0_100",
        text: "PROJECT : 0_100의 본격적인 시작을 알리는 짧은 예고편으로 공백의 비전을 담아보았다.",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 2021 + "." + 06 + "." + 18
    },
    {
        img: "https://www.youtube.com/embed/CfvhCmzE1QQ",
        title: "[EP.1] Project 0_100",
        text: "PROJECT : 0_100의 본격적인 시작을 알리는 짧은 예고편으로 공백의 비전을 담아보았다.",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 2021 + "." + 06 + "." + 19
    },
    {
        img: "https://www.youtube.com/embed/CfvhCmzE1QQ",
        title: "[EP.1] Project 0_100",
        text: "PROJECT : 0_100의 본격적인 시작을 알리는 짧은 예고편으로 공백의 비전을 담아보았다.",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 2021 + "." + 06 + "." + 20
    },
    {
        img: "https://www.youtube.com/embed/CfvhCmzE1QQ",
        title: "[EP.1] Project 0_100",
        text: "PROJECT : 0_100의 본격적인 시작을 알리는 짧은 예고편으로 공백의 비전을 담아보았다.",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 2021 + "." + 06 + "." + 21
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
        var _result = video.sort(function (left, right) {
            if (left.day > right.day) return 1;
            else if (left.day < right.day) return -1;
            else return 0;
        });
        print(_result);
    }
    else {
        var _result = video.sort(function (left, right) {
            if (left.day < right.day) return 1;
            else if (left.day > right.day) return -1;
            else return 0;
        });
        print(_result);
    }
}
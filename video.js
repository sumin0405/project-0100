var video = [
    {
        img: "./video_scr/제목을_입력해주세요._1_(3).png",
        title: "[EP.1] Project 0_102",
        text: "PROJECT : 0_100의 본격적인 시작을 알리는 짧은 예고편으로 공백의 비전을 담아보았다.",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 2021 + "." + 06 + "." + 15
    },
    {
        img: "./video_scr/제목을_입력해주세요._1_(3).png",
        title: "[EP.1] Project 0_102",
        text: "PROJECT : 0_100의 본격적인 시작을 알리는 짧은 예고편으로 공백의 비전을 담아보았다.",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 20210616
    },
    {
        img: "./video_scr/제목을_입력해주세요._1_(3).png",
        title: "[EP.1] Project 0_103",
        text: "PROJECT : 0_100의 본격적인 시작을 알리는 짧은 예고편으로 공백의 비전을 담아보았다.",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 20210617
    },
    {
        img: "./video_scr/제목을_입력해주세요._1_(3).png",
        title: "[EP.1] Project 0_100",
        text: "PROJECT : 0_100의 본격적인 시작을 알리는 짧은 예고편으로 공백의 비전을 담아보았다.",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 20210618
    },
    {
        img: "./video_scr/제목을_입력해주세요._1_(3).png",
        title: "[EP.1] Project 0_100",
        text: "PROJECT : 0_100의 본격적인 시작을 알리는 짧은 예고편으로 공백의 비전을 담아보았다.",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 20210619
    },
    {
        img: "./video_scr/제목을_입력해주세요._1_(3).png",
        title: "[EP.1] Project 0_100",
        text: "PROJECT : 0_100의 본격적인 시작을 알리는 짧은 예고편으로 공백의 비전을 담아보았다.",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 20210620
    },
    {
        img: "./video_scr/제목을_입력해주세요._1_(3).png",
        title: "[EP.1] Project 0_100",
        text: "PROJECT : 0_100의 본격적인 시작을 알리는 짧은 예고편으로 공백의 비전을 담아보았다.",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM",
        day: 20210621
    },
]

function print(_result) {
    for (var i in _result) {
        var videoi = _result[i];
        document.querySelector('.videoBox').innerHTML +=
            `<div class="video">
                <img src="${videoi.img}" alt="">
                <p><span>${videoi.title}</span> ${videoi.day}</p>
                <p>${videoi.text}</p>
                <button type="button" onClick="location.href='${videoi.url}'">보러가기</button>
            </div>`;
    }
}
for (var i in video) {
    var videoi = video[i];
    document.querySelector('.videoBox').innerHTML +=
        `<div class="video">
            <img src="${videoi.img}" alt="">
            <h2>${videoi.title} ${videoi.day}</h2>
            <p>${videoi.text}</p>
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
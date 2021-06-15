var video = [
    {
        img: "./video_scr/제목을_입력해주세요._1_(3).png",
        title: "[MV] 새소년 (SE SO NEON)_ 난춘 (亂春)",
        text: "장르의 경계를 넘나드는 다채로운 음악의 스펙트럼과 빈티지한 질감에 대한 애정, 마음 속 깊은 곳을 울리는 정서와 폭발적인 에너지, 그리고 무엇보다 새로움에 대한 추구가 모여 ‘새소년스러움’을 만든다.",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM"
    },
    {
        img: "./video_scr/제목을_입력해주세요._1_(3).png",
        title: "[MV] 새소년 (SE SO NEON)_ 난춘 (亂春)",
        text: "장르의 경계를 넘나드는 다채로운 음악의 스펙트럼과 빈티지한 질감에 대한 애정, 마음 속 깊은 곳을 울리는 정서와 폭발적인 에너지, 그리고 무엇보다 새로움에 대한 추구가 모여 ‘새소년스러움’을 만든다.",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM"
    },
    {
        img: "./video_scr/제목을_입력해주세요._1_(3).png",
        title: "[MV] 새소년 (SE SO NEON)_ 난춘 (亂春)",
        text: "장르의 경계를 넘나드는 다채로운 음악의 스펙트럼과 빈티지한 질감에 대한 애정, 마음 속 깊은 곳을 울리는 정서와 폭발적인 에너지, 그리고 무엇보다 새로움에 대한 추구가 모여 ‘새소년스러움’을 만든다.",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM"
    },
    {
        img: "./video_scr/제목을_입력해주세요._1_(3).png",
        title: "[MV] 새소년 (SE SO NEON)_ 난춘 (亂春)",
        text: "장르의 경계를 넘나드는 다채로운 음악의 스펙트럼과 빈티지한 질감에 대한 애정, 마음 속 깊은 곳을 울리는 정서와 폭발적인 에너지, 그리고 무엇보다 새로움에 대한 추구가 모여 ‘새소년스러움’을 만든다.",
        url: "https://www.youtube.com/watch?v=5lb6gckhvlM"
    },
]

for (var i in video) {
    var videoi = video[i];
    document.querySelector('.videoBox').innerHTML +=
        `<div class="video">
            <img src="${videoi.img}" alt="">
            <h2>${videoi.title}</h2>
            <p>${videoi.text}</p>
            <button type="button" onClick="location.href='${videoi.url}'">보러가기</button>
        </div>`;
}

export const allUsers = {
  admin: {
    name: "Администратор",
    occupation: "TravelAsk",
    rating: null,
    img: "./src/assets/admin.png", // почему такой путь?
  },
  user1: {
    name: "Наталия Полянская",
    occupation: "Гид по Баварии, фотограф",
    rating: 4,
    img: "./src/assets/user1.png",
  },
};

export const chatMessagesEx = [
  {
    text: "Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования",
    sender: "Администратор",
    date: "Вчера в 17:44",
  },
  {
    text: "Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования",
    sender: "Администратор",
    date: "Вчера в 17:45",
  },
  {
    text: "Что из себя представляет вулкан? Просто хочу убедиться, что готова к такому путешествию.",
    sender: "Наталия Полянская",
    date: "Вчера в 18:45",
  },
  {
    text: "Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования",
    sender: "Администратор",
    date: "Вчера в 17:45",
  },
];

/*
 Вчера + время
 Сегодня + время
  < месяца: дата (без времени)
  > месяца: 1 месяц назад, 2 месяца назад..
  > года: около года назад, около 2х лет назад
*/
export const reviewCardsArray = [
  {
    name: "Наталия Полянская",
    img: "./src/assets/admin.png",
    topic: "БАРСЕСОНА - О ГОРОДЕ",
    message:
      "Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...",
    gallery: [
      "./src/assets/pic-1.png",
      "./src/assets/pic-2.png",
      "./src/assets/pic-3.png",
      "./src/assets/pic-3.png",
      "./src/assets/pic-2.png",
      "./src/assets/pic-1.png",
      "./src/assets/pic-1.png",
    ],
    createdAt: new Date("2023-06-20T08:17:00.377Z"),
    comments: [
      "comment",
      "comment",
      "comment",
      "comment",
      "comment",
      "comment",
      "comment",
      "comment",
      "comment",
    ],
    rating: 9,
  },
  {
    name: "Elena Bulgakova",
    img: "./src/assets/admin.png", // ?
    topic: "БАРСЕСОНА - О ГОРОДЕ",
    message:
      "Плюсы города: весь город одни плюсы! Минусы города: не видела. В наш марафон по Европе не вписалось 2 испанских города от усталости - решили остаток путешествия провести в Барселоне ...",
    gallery: [
      "./src/assets/pic-1.png",
      "./src/assets/pic-2.png",
      "./src/assets/pic-3.png",
      "./src/assets/pic-3.png",
      "./src/assets/pic-2.png",
    ],
    createdAt: new Date("2024-02-20T08:17:00.377Z"), // 5 месяцев назад
    comments: ["comment", "comment", "comment"],
    rating: 9,
  },
  {
    name: "Лаврентий Берия",
    img: "./src/assets/admin.png", // ?
    topic: "БАРСЕСОНА - О ГОРОДЕ",
    message:
      "Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...",
    gallery: [
      "./src/assets/pic-1.png",
      "./src/assets/pic-2.png",
      "./src/assets/pic-3.png",
      "./src/assets/pic-3.png",
    ],
    createdAt: new Date("2022-06-20T08:17:00.377Z"), // около 2х лет назад
    comments: ["comment", "comment", "comment"],
    rating: 9,
  },
  {
    name: "Владимир Ленин",
    img: "./src/assets/admin.png", // ?
    topic: "БАРСЕСОНА - О ГОРОДЕ",
    message:
      "Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...",
    gallery: [
      "./src/assets/pic-1.png",
      "./src/assets/pic-2.png",
      "./src/assets/pic-3.png",
      "./src/assets/pic-3.png",
      "./src/assets/pic-2.png",
    ],
    createdAt: new Date("2024-01-20T08:17:00.377Z"), // 6 месяцев назад
    comments: ["comment", "comment", "comment"],
    rating: 9,
  },
  {
    name: "Карл Маркс",
    img: "./src/assets/admin.png", // ?
    topic: "БАРСЕСОНА - О ГОРОДЕ",
    message:
      "Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...",
    gallery: [
      "./src/assets/pic-1.png",
      "./src/assets/pic-2.png",
      "./src/assets/pic-3.png",
      "./src/assets/pic-3.png",
      "./src/assets/pic-2.png",
    ],
    createdAt: new Date("2024-03-20T08:17:00.377Z"), // 4 месяцев назад
    comments: ["comment", "comment", "comment"],
    rating: 9,
  },
  {
    name: "Фридрих Энгельс",
    img: "./src/assets/admin.png", // ?
    topic: "БАРСЕСОНА - О ГОРОДЕ",
    message:
      "Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...",
    gallery: [
      "./src/assets/pic-1.png",
      "./src/assets/pic-2.png",
      "./src/assets/pic-3.png",
      "./src/assets/pic-3.png",
      "./src/assets/pic-2.png",
    ],
    createdAt: new Date("2024-07-19T08:17:00.377Z"), // 19.07.2024
    comments: ["comment", "comment", "comment"],
    rating: 9,
  },
];
